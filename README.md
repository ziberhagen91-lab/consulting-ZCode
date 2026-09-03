# consulting-site — POC

Technical proof of concept for the consulting website platform:

**Next.js contact form → NestJS API → our own PostgreSQL → transactional outbox → background worker → Flectra CRM.**

Nothing in this repo talks to Flectra except `apps/worker`, and it only does so through `packages/flectra`.

## Architecture rules

1. Next.js never communicates directly with Flectra.
2. All Flectra communication goes through NestJS (the worker) and `packages/flectra`.
3. PostgreSQL is our own source of truth for website/application data.
4. Flectra is an external CRM/ERP integration.
5. The Flectra integration is replaceable — the worker depends only on the `FlectraPort` interface; `NoopFlectraAdapter` proves it by running the whole pipeline without Flectra.
6. The POC runs locally with Docker Compose.
7. All credentials and URLs come from environment variables — never hardcoded.

## Layout

```
apps/
  api/        NestJS: POST /leads (validate + persist) and GET /leads/:id (sync status). No Flectra code.
  worker/     NestJS: outbox poller + the Flectra integration (port, adapters, mapper).
  web/        Next.js: landing page + contact form. Talks only to the API.
packages/
  shared/     zod schemas + types shared by web, api, and worker.
  flectra/    Pure Flectra JSON-RPC client (transport only, NestJS-free).
```

## Quickstart

Prerequisites: Node >= 20, pnpm >= 9, Docker.

```bash
pnpm install

# 1) infrastructure: our PostgreSQL + Flectra (with its own PostgreSQL)
cp .env.example .env
docker compose up -d

# 2) per-app environment files
cp apps/api/.env.example apps/api/.env
cp apps/worker/.env.example apps/worker/.env
cp apps/web/.env.example apps/web/.env

# 3) database schema
pnpm db:generate
pnpm db:migrate          # creates the tables (migration name: init)

# 4) build the internal packages once, then run everything
pnpm build
pnpm dev                 # web :3000 · api :4000 · worker polling
```

## Trying the flow

1. Open `http://localhost:3000/contact` and submit the form.
2. The API persists `Lead` + `OutboxEvent` in one transaction (`POST /leads`).
3. The worker claims the event and creates the Flectra records
   (with `FLECTRA_ENABLED=false` the Noop adapter just logs and returns fake ids).
4. Check the result — swap `<id>` for the id shown in the success panel:

```bash
curl http://localhost:4000/leads/<id>
# → status: SYNCED, outbox.status: SYNCED
```

Health check: `http://localhost:4000/health`.

Resilience check: stop Flectra (or keep `FLECTRA_ENABLED=false`), submit a lead,
and watch it stay `PENDING`/retrying — the form still succeeds. Start Flectra
(or set `FLECTRA_ENABLED=true` and restart the worker) and the queued lead syncs.

## Enabling the real Flectra integration

1. `docker compose up -d` starts Flectra on `http://localhost:7073` (first start pulls a ~3.4 GB image).
2. Initialize the Flectra database with the CRM module (one-off). The postgres container
   pre-creates an *empty* `flectra` database — Flectra only installs its schema when you
   explicitly initialize it:

   ```bash
   docker compose stop flectra
   docker compose run --rm flectra -d flectra -i crm --without-demo=all --stop-after-init
   docker compose up -d flectra
   ```

   This installs CRM plus its dependencies (33 modules) **into the existing database** —
   nothing is dropped or recreated.
3. Log in at `http://localhost:7073` with `admin` / `admin` (the CLI-init default) and
   change the password. Then open your user preferences and create an **API key** —
   Flectra 3.0 supports API keys, which is the preferred `FLECTRA_API_KEY` value.
   (Fallback: the login password also works as `FLECTRA_API_KEY`.)
4. In `apps/worker/.env` set `FLECTRA_ENABLED=true` and fill in
   `FLECTRA_URL`, `FLECTRA_DB`, `FLECTRA_USER`, `FLECTRA_API_KEY`.
5. Restart the worker (`pnpm --filter @consulting/worker dev`). New leads now appear in the Flectra CRM pipeline.

Quick read-only sanity checks (no records created):

```bash
docker exec consulting-flectra-db psql -U flectra -d flectra \
  -c "SELECT name, state FROM ir_module_module WHERE name IN ('base','crm');"
curl -s http://localhost:7073/jsonrpc -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"call","params":{"service":"common","method":"version","args":[]},"id":1}'
```

## Environment variables

| File | Variables | Purpose |
| --- | --- | --- |
| `.env` (compose) | `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` | our PostgreSQL |
| | `FLECTRA_DB_USER`, `FLECTRA_DB_PASSWORD` | Flectra's own PostgreSQL |
| `apps/api/.env` | `PORT`, `CORS_ORIGIN`, `DATABASE_URL` | API server |
| `apps/worker/.env` | `DATABASE_URL`, `FLECTRA_ENABLED`, `FLECTRA_URL`, `FLECTRA_DB`, `FLECTRA_USER`, `FLECTRA_API_KEY`, `POLL_INTERVAL_MS`, `BATCH_SIZE`, `MAX_ATTEMPTS` | worker + integration |
| `apps/web/.env` | `NEXT_PUBLIC_API_URL` | where the browser sends the form |

## Design notes

- **Transactional outbox** — `leads.service.ts` writes `Lead` + `OutboxEvent` in one
  DB transaction. The worker claims rows with `FOR UPDATE SKIP LOCKED`, retries with
  exponential backoff (up to `MAX_ATTEMPTS`), then marks them `FAILED`. At-least-once
  semantics: a crash between the Flectra call and the status update can duplicate a
  lead — acceptable for the POC.
- **Circuit breaker** — after repeated failures the worker pauses for 30 s instead of
  hammering a dead Flectra.
- **Interrupted events** — events left `PROCESSING` by a crashed run are requeued on
  worker start.
- **Build order** — internal packages compile to `dist/` before apps build; `pnpm build`
  handles the ordering. If you edit `packages/*` while `pnpm dev` runs, restart the apps.

## Explicitly out of scope (deferred)

Admin dashboard, authentication, client portal, blog, case studies, CMS,
projects/tasks synchronization, bidirectional synchronization, rate limiting,
Redis/BullMQ.

## Troubleshooting

- Flectra container: check `docker compose logs flectra`. The image (`flectrahq/flectra:latest`)
  and web port (`7073`) are the documented defaults — adjust if your image version differs.
- Postgres version: if your Flectra build rejects Postgres 16, change the `flectra-db`
  image to `postgres:14-alpine`.
- pnpm v10 may ask to approve build scripts: run `pnpm approve-builds`
  (needed for prisma/esbuild/tailwind oxide).

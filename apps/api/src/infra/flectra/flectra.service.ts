import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class FlectraService {
  private readonly url = process.env.FLECTRA_URL ?? 'http://localhost:7073/jsonrpc';
  private readonly db = process.env.FLECTRA_DB ?? 'flectra';
  private readonly uid = Number(process.env.FLECTRA_UID ?? '2');
  private readonly password = process.env.FLECTRA_PASSWORD ?? 'admin';

  async call(model: string, method: string, args: unknown[] = [], kwargs: Record<string, unknown> = {}) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: {
          service: 'object',
          method: 'execute_kw',
          args: [this.db, this.uid, this.password, model, method, args, kwargs],
        },
        id: Date.now(),
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      throw new InternalServerErrorException(data.error?.data?.name ?? 'Flectra RPC error');
    }

    return data.result;
  }
}

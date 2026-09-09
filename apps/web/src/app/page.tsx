import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
        Consulting
      </p>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Consulting that starts with listening.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-slate-600">
        We help businesses turn ideas and challenges into practical solutions.
      </p>
      <Link
        href="/contact"
        className="mt-10 rounded-md bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
      >
        Start a conversation
      </Link>
    </main>
  );
}

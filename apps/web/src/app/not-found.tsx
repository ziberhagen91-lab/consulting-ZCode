'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-screen bg-[#08090d] text-white flex items-center justify-center px-6'>
      <div className='text-center'>
        <p className='text-sm text-violet-400'>404</p>
        <h1 className='mt-3 text-4xl font-semibold'>Page not found</h1>
        <p className='mt-4 text-slate-400'>The page you are looking for does not exist.</p>
        <Link href='/' className='mt-8 inline-flex rounded-lg bg-violet-500 px-6 py-3 text-sm font-semibold'>Back to home</Link>
      </div>
    </main>
  );
}

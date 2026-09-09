'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getTranslations, type Locale } from '@consulting/shared';
import { ContactForm } from './contact-form';

export default function ContactPage() {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('locale');

    if (savedLocale === 'uk' || savedLocale === 'en') {
      setLocale(savedLocale);
    }
  }, []);

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem('locale', nextLocale);
  }

  const t = getTranslations(locale).website;

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Consulting Platform"
    className="h-12 w-12 object-contain"
  />
  <span className="text-lg font-semibold tracking-tight">
    Smart<span className="text-violet-400"> Consulting</span>
  </span>
</Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <Link href="/#features" className="transition hover:text-white">
              {t.features}
            </Link>

            <Link href="/#pricing" className="transition hover:text-white">
              {t.pricing}
            </Link>

            <Link href="/contact" className="text-white">
              {t.contact}
            </Link>

            <div className="flex items-center gap-1 rounded-lg border border-white/10 p-1">
              <button
                type="button"
                onClick={() => changeLocale('en')}
                className={`rounded-md px-2 py-1 text-xs transition ${
                  locale === 'en'
                    ? 'bg-white/10 text-white'
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLocale('uk')}
                className={`rounded-md px-2 py-1 text-xs transition ${
                  locale === 'uk'
                    ? 'bg-white/10 text-white'
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                UA
              </button>
            </div>
          </nav>

          <Link
            href="/"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            {t.backToHome}
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              {t.contact}
            </p>

            <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {locale === 'uk' ? (
                <>
                  Давайте поговоримо про{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    ваш проєкт.
                  </span>
                </>
              ) : (
                <>
                  Let&apos;s talk about{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    your project.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              {t.contactDescription}
            </p>

            <div className="mt-10 grid max-w-lg gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold">
                  {t.practicalApproach}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {t.practicalApproachText}
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold">
                  {t.connectedPlatform}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {t.connectedPlatformText}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-2xl" />

            <div className="relative rounded-2xl border border-white/10 bg-[#11131a] p-6 shadow-2xl sm:p-8">
              <div className="mb-7">
                <h2 className="text-xl font-semibold">
                  {t.startConversationTitle}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {t.startConversationDescription}
                </p>
              </div>

              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" className="font-medium text-slate-300">
            Smart Consulting
          </Link>

          <span>© 2026 Consulting. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
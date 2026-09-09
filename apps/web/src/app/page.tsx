'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getTranslations, type Locale } from '@consulting/shared';

const stats = [
  { label: 'Clients', value: '128' },
  { label: 'Projects', value: '42' },
  { label: 'Tasks', value: '186' },
  { label: 'Completed', value: '94%' },
];

export default function HomePage() {
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

  const translatedStats = [
    {
      label: locale === 'uk' ? 'Клієнти' : 'Clients',
      value: '128',
    },
    {
      label: locale === 'uk' ? 'Проєкти' : 'Projects',
      value: '42',
    },
    {
      label: locale === 'uk' ? 'Завдання' : 'Tasks',
      value: '186',
    },
    {
      label: locale === 'uk' ? 'Завершено' : 'Completed',
      value: '94%',
    },
  ];

  const features = [
    {
      number: '01',
      title: t.clientManagement,
      text: t.clientManagementText,
    },
    {
      number: '02',
      title: t.projectVisibility,
      text: t.projectVisibilityText,
    },
    {
      number: '03',
      title: t.dataDrivenDecisions,
      text: t.dataDrivenDecisionsText,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
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
            <a href="#features" className="transition hover:text-white">
              {t.features}
            </a>

            <a href="#pricing" className="transition hover:text-white">
              {t.pricing}
            </a>

            <Link href="/contact" className="transition hover:text-white">
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
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300">Menu</summary>
            <div className="absolute right-0 top-12 z-50 w-44 rounded-xl border border-white/10 bg-[#11131a] p-2 shadow-xl">
              <a href="#features" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5">{t.features}</a>
              <a href="#pricing" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5">{t.pricing}</a>
              <Link href="/contact" className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5">{t.contact}</Link>
            </div>
          </details>
        </div>
      </header>

      <section className="relative">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
              {t.consultingPlatform}
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              {t.heroDescription}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-violet-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                {t.startConversation}
              </Link>

              <a
                href="#features"
                className="rounded-lg border border-white/10 px-6 py-3 text-center text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {t.explorePlatform}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
              <span>{t.secureReliable}</span>
              <span>{t.builtForTeams}</span>
              <span>{t.dataDriven}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-600/20 to-blue-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11131a] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold">{t.dashboard}</p>
                  <p className="text-xs text-slate-500">{t.overview}</p>
                </div>

                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <div className="grid grid-cols-4 gap-3 p-5">
                {translatedStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                  >
                    <p className="text-[10px] text-slate-500">
                      {stat.label}
                    </p>

                    <p className="mt-1 text-lg font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 px-5 pb-5 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-slate-300">
                      {t.revenueAnalytics}
                    </p>

                    <span className="text-[10px] text-emerald-400">
                      +18.4%
                    </span>
                  </div>

                  <div className="mt-6 flex h-28 items-end gap-2">
                    {[35, 48, 42, 62, 58, 78, 72, 92].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-blue-400 opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-medium text-slate-300">
                    {t.projectProgress}
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      [
                        locale === 'uk'
                          ? 'Редизайн сайту'
                          : 'Website redesign',
                        '82%',
                      ],
                      [
                        locale === 'uk'
                          ? 'CRM інтеграція'
                          : 'CRM integration',
                        '68%',
                      ],
                      [
                        locale === 'uk'
                          ? 'Стратегічний проєкт'
                          : 'Strategy project',
                        '94%',
                      ],
                    ].map(([name, progress]) => (
                      <div key={name}>
                        <div className="mb-2 flex justify-between text-[10px]">
                          <span className="text-slate-400">{name}</span>
                          <span className="text-slate-500">{progress}</span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-violet-500"
                            style={{ width: progress }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-slate-300">
                    {t.recentActivity}
                  </p>

                  <span className="text-[10px] text-slate-500">
                    {t.viewAll}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    t.newClientAdded,
                    t.projectMilestoneCompleted,
                    t.taskAssigned,
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs text-slate-500"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-y border-white/10 bg-[#0d0f14]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              {t.everythingInOnePlace}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.featuresTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="bg-[#0d0f14] p-7 transition hover:bg-white/[0.03]"
              >
                <span className="text-sm text-violet-400">
                  {feature.number}
                </span>

                <h3 className="mt-8 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-[#11131a] to-blue-500/10 px-7 py-12 text-center sm:px-12">
          <p className="text-sm font-medium text-violet-300">
            {t.readyToGetStarted}
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.pricingTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            {t.pricingDescription}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            {t.startConversation}
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span className="font-medium text-slate-300">
            Smart Consulting
          </span>

          <span>© 2026 Consulting. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}




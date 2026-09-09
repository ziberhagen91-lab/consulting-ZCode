'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { leadInputSchema, type Locale } from '@consulting/shared';
import { apiClient } from '../../lib/api';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type ContactFormProps = {
  locale: Locale;
};

const emptyValues = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const inputClasses =
  'mt-1 w-full rounded-md border border-white/10 bg-[#0d0f14] px-3 py-2 text-sm text-white shadow-sm placeholder:text-slate-600 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20';

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages || messages.length === 0) {
    return null;
  }

  return <p className="mt-1 text-xs text-red-400">{messages[0]}</p>;
}

export function ContactForm({ locale }: ContactFormProps) {
  const [values, setValues] = useState(emptyValues);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [leadId, setLeadId] = useState<string | null>(null);

  const isUk = locale === 'uk';

  function update(field: keyof typeof emptyValues, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitError(null);
    setFieldErrors({});

    const parsed = leadInputSchema.safeParse(values);

    if (!parsed.success) {
      setFieldErrors(
        parsed.error.flatten().fieldErrors as Record<string, string[]>,
      );
      return;
    }

    setFormState('submitting');

    try {
      const response = await apiClient.createLead(parsed.data);

      setLeadId(response.id);
      setFormState('success');
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : isUk
            ? 'Неочікувана помилка'
            : 'Unexpected error',
      );

      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          {isUk ? 'Дякуємо — запит отримано.' : 'Thank you — request received.'}
        </h2>

        <p className="mt-3 text-slate-400">
          {isUk
            ? 'Ваш запит збережено та буде передано до CRM найближчим часом.'
            : 'Your request is saved and will appear in our CRM within moments.'}
        </p>

        {leadId && (
          <p className="mt-3 text-sm text-slate-500">
            ID:{' '}
            <code className="rounded bg-white/5 px-1 py-0.5 text-xs text-slate-300">
              {leadId}
            </code>
          </p>
        )}

        <p className="mt-2 text-sm text-slate-500">
          {isUk
            ? 'Стан синхронізації можна перевірити через API.'
            : 'The sync status can be checked through the API.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-300"
        >
          {isUk ? 'Імʼя' : 'Name'}
        </label>

        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(event) => update('name', event.target.value)}
          className={inputClasses}
          placeholder={isUk ? 'Іван Петренко' : 'Jane Doe'}
        />

        <FieldError messages={fieldErrors.name} />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300"
        >
          {isUk ? 'Email' : 'Email'}
        </label>

        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(event) => update('email', event.target.value)}
          className={inputClasses}
          placeholder="jane@example.com"
        />

        <FieldError messages={fieldErrors.email} />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-300"
        >
          {isUk ? 'Компанія' : 'Company'}{' '}
          <span className="font-normal text-slate-500">
            ({isUk ? 'необовʼязково' : 'optional'})
          </span>
        </label>

        <input
          id="company"
          type="text"
          value={values.company}
          onChange={(event) => update('company', event.target.value)}
          className={inputClasses}
          placeholder={isUk ? 'Назва компанії' : 'Acme Inc.'}
        />

        <FieldError messages={fieldErrors.company} />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300"
        >
          {isUk ? 'Повідомлення' : 'Message'}
        </label>

        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          className={inputClasses}
          placeholder={
            isUk
              ? 'Коротко розкажіть, з чим вам потрібна допомога...'
              : 'We are looking for help with...'
          }
        />

        <FieldError messages={fieldErrors.message} />
      </div>

      {submitError && (
        <p
          className="rounded-md border border-red-400/20 bg-red-400/10 px-3 py-2 text-sm text-red-400"
          role="alert"
        >
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full rounded-md bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {formState === 'submitting'
          ? isUk
            ? 'Надсилання...'
            : 'Sending...'
          : isUk
            ? 'Надіслати запит'
            : 'Send request'}
      </button>
    </form>
  );
}
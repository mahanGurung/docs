import { I18nProvider } from 'fumadocs-ui/i18n';
import type { ReactNode } from 'react';
import { i18n, languageNames } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Convert language strings to LocaleItem objects
  const locales = i18n.languages.map((lang) => ({
    name: languageNames[lang],
    locale: lang,
  }));

  return (
    <I18nProvider locale={locale} locales={locales}>
      {children}
    </I18nProvider>
  );
}

// Generate static params for the locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

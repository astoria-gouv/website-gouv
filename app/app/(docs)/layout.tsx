import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LocaleProvider } from "@/context/locale-context";
import { Locale } from "@/lib/locale";
import { DocsSidebar } from "@/components/docs/sidebar";
import { DocsHeader } from "@/components/docs/header";

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;
  const finalLocale = locale || "fr";

  if (!routing.locales.includes(finalLocale as (typeof routing.locales)[number])) {
    return null;
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={finalLocale} messages={messages}>
      <LocaleProvider initialLocale={finalLocale as Locale}>
        <div className="min-h-screen flex flex-col">
          <DocsSidebar />
          <div className="flex-1 ml-64 flex flex-col">
            <DocsHeader title="Documentation" />
            <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
          </div>
        </div>
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}

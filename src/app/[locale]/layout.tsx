import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Layout from "@/components/layout";
import Header from "@/components/header";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "use-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ]
});

export const metadata: Metadata = {
  title: "João Victor Rocha",
  description:
    "Engenheiro de Software | Desenvolvedor Full-Stack | Apaixonado por Tecnologia e Inovação"
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
                                             children, params
                                           }: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <html lang={locale} className={poppins.className}>
    <body>
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link
          href="/fonts/stylesheet.css"
          rel="stylesheet preload"
          as="style"
        />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>
      <NextIntlClientProvider>
        <Layout>
          <Header t={t} />
          {children}
        </Layout>
      </NextIntlClientProvider>
    </div>
    </body>
    </html>
  );
}

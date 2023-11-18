import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NGEP",
  description: "Nordic Environmental Green Partners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}

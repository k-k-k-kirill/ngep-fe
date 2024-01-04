import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";
import { Noto_Sans } from "next/font/google";

export const notoSans = Noto_Sans({
  weight: ["500", "400", "600", "700"],
  subsets: ["vietnamese", "latin"],
});

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
        <body className={notoSans.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}

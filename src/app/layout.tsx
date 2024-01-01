import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/config";

const notoSans = Noto_Sans_KR({
  weight: ["400", "500", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Neue",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | chanwu blog",
    default: siteConfig.title,
  },
  description: "개발 주저리 주저리",
  openGraph: {
    title: siteConfig.title,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
    images: [
      {
        url: "/public/a-ryang.jpeg",
      },
    ],
  },
  twitter: {
    title: siteConfig.title,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon/apple-icon.png",
    shortcut: "/favicon/apple-icon.png",
    apple: "/favicon/apple-icon.png",
    other: {
      rel: "/favicon/apple-icon-precomposed",
      url: "/favicon/apple-icon-precomposed.png",
    },
  },
  verification: {
    google: "4oQP_trevE42WBKpMlDz8vUk9MCv5ZmlXECFFyGNv8w",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}

import "@/styles/reset.css";
import "@/styles/global.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const font = localFont({ src: "./PretendardVariable.woff2" });

export const metadata: Metadata = {
  title: "chanwu blog",
  description: "개발 주저리 주저리",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicons/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicons/favicon-96x96.png",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        url: "/favicons/apple-icon-152x152.png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={font.className}>{children}</body>
    </html>
  );
}

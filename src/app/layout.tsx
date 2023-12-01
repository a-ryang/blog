import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./global.css";

const notoSans = Noto_Sans_KR({
  weight: ["400", "500", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "Apple SD Gothic Neo",
    "Malgun Gothic",
    "맑은 고딕",
    "나눔고딕",
    "Nanum Gothic",
    "Noto Sans KR",
    "Noto Sans CJK KR",
    "arial",
    "돋움",
    "Dotum",
    "Tahoma",
    "Geneva",
    "sans-serif",
  ],
});

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
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}

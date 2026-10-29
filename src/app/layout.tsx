// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const arabicFont = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "تمارة ❤️ — بداية حكاية",
  description: "رسالة صغيرة من القلب، لعلها تكون بداية شي حلو.",
};

export const viewport: Viewport = {
  themeColor: "#07030f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={arabicFont.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

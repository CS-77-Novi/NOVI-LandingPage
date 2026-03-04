import type { Metadata } from "next";
import { Syne, DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVI — Attention-Aware Online Learning",
  description:
    "NOVI uses computer vision and audio signals to detect distraction in real-time — keeping every student focused, every session engaged, every outcome measurable.",
  keywords: ["NOVI", "distraction detection", "online learning", "e-learning", "ML", "engagement"],
  openGraph: {
    title: "NOVI — Attention-Aware Online Learning",
    description: "AI-powered distraction detection for online classrooms.",
    siteName: "NOVI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${inter.variable}`}>
      <body className="bg-black text-slate-100 font-body antialiased">{children}</body>
    </html>
  );
}
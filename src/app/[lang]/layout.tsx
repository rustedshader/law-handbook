import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Merriweather, Inter } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Article Jankar",
  description:
    "This is a e booklet for consitutional articles of India in Hindi and English.",
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "hi" }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className="bg-[#F9E7DD]">
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased bg-[#F9E7DD] min-h-screen`}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <Header params={params} />
        {children}
        <Footer params={params} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9E7DD] min-h-screen`}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <Header params={params} />
        {children}
        <Footer params={params} />
      </body>
    </html>
  );
}

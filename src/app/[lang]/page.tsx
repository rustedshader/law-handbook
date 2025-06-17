import { getDictionary } from "./dictionaries";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import IndianFlag from "@/components/indian-flag";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex justify-center mb-8">
          <div
            className="w-24 h-16"
            aria-label="Indian Flag"
            title="Indian Flag"
          >
            <IndianFlag />
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Scale className="w-16 h-16 text-yellow-950" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.hero.heading}
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              {dict.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={`/${lang}#articles`}>
              <Button
                size="lg"
                className="rounded-none bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-10 py-4 text-black font-bold text-lg"
              >
                {dict.hero.cta}
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-none bg-[#f5902a] border-2 border-[#FFB066] shadow-[6px_6px_0_0_rgba(255,176,102,0.3)] hover:bg-[#FFE5CC] hover:shadow-[8px_8px_0_0_rgba(255,176,102,0.3)] hover:-translate-y-1 transition-all duration-300 px-10 py-4 text-[#7C3A00] font-bold text-lg"
            >
              {dict.hero.learnMore}
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20 z-10">
          <Scale className="w-8 h-8 text-orange-400" />
        </div>
        <div className="absolute top-20 right-16 opacity-20 z-10">
          <Scale className="w-6 h-6 text-orange-400" />
        </div>
        <div className="absolute bottom-16 left-16 opacity-20 z-10">
          <Scale className="w-10 h-10 text-orange-400" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 z-10">
          <Scale className="w-7 h-7 text-orange-400" />
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="articles">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === "en"
                ? "Key Constitutional Articles"
                : "मुख्य संवैधानिक अनुच्छेद"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {lang === "en"
                ? "Dive deep into the articles that form the backbone of Indian democracy and individual rights"
                : "उन अनुच्छेदों में गहराई से जानें जो भारतीय लोकतंत्र और व्यक्तिगत अधिकारों की रीढ़ हैं"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dict.homepage.articles.map((article) => (
              <Card
                key={article.number}
                className="
                  bg-white/60
                  backdrop-blur-sm
                  border border-orange-200/80
                  rounded-lg
                  shadow-lg shadow-orange-700/10
                  hover:shadow-xl hover:shadow-orange-700/20
                  hover:-translate-y-1
                  transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="text-lg font-bold px-3 py-1 bg-transparent text-gray-800"
                    >
                      {lang === "en" ? "Article" : "अनुच्छेद"} {article.number}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription
                    className="text-gray-700 mb-4 leading-relaxed"
                    style={{ minHeight: "96px" }} // Adjust minHeight as needed
                  >
                    {article.description}
                  </CardDescription>
                  <Separator className="my-4 bg-orange-200/60" />
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-xs border-orange-400 text-orange-700 rounded-sm"
                    >
                      {article.importance}
                    </Badge>
                    <Button className="rounded-none bg-white border border-orange-400 shadow-[4px_4px_0_0_rgba(231,111,81,0.2)] hover:bg-orange-50 transition-colors duration-300 text-orange-800 font-semibold text-sm">
                      {lang === "en" ? "Read More →" : "और पढ़ें →"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {lang === "en"
              ? "Knowledge is Power. Know Your Rights."
              : "ज्ञान ही शक्ति है। अपने अधिकारों को जानें।"}
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            {lang === "en"
              ? "Empower yourself with constitutional knowledge that every citizen should possess"
              : "संवैधानिक ज्ञान से खुद को सशक्त बनाएं जो हर नागरिक के पास होना चाहिए"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/articles`}>
              <Button
                size="lg"
                className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-8 py-3 text-black font-semibold"
              >
                {lang === "en" ? "Start Learning" : "सीखना शुरू करें"}
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-8 py-3 text-black font-semibold"
            >
              {lang === "en" ? "Download Guide" : "गाइड डाउनलोड करें"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

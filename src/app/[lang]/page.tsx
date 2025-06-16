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
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const articles =
    lang === "en"
      ? [
          {
            number: "14",
            title: "Right to Equality",
            description:
              "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
            importance: "Foundation of Justice",
            color: "bg-blue-50 border-blue-200",
          },
          {
            number: "18",
            title: "Abolition of Titles",
            description:
              "No title, not being a military or academic distinction, shall be conferred by the State.",
            importance: "Democratic Values",
            color: "bg-green-50 border-green-200",
          },
          {
            number: "21",
            title: "Right to Life and Personal Liberty",
            description:
              "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
            importance: "Most Fundamental Right",
            color: "bg-purple-50 border-purple-200",
          },
        ]
      : [
          {
            number: "14",
            title: "समानता का अधिकार",
            description:
              "राज्य भारत के राज्यक्षेत्र में किसी व्यक्ति को विधि के समक्ष समता या विधियों के समान संरक्षण से वंचित नहीं करेगा।",
            importance: "न्याय की आधारशिला",
            color: "bg-blue-50 border-blue-200",
          },
          {
            number: "18",
            title: "उपाधियों का अंत",
            description:
              "राज्य द्वारा सैन्य या शैक्षणिक सम्मान के सिवाय कोई भी उपाधि प्रदान नहीं की जाएगी।",
            importance: "लोकतांत्रिक मूल्य",
            color: "bg-green-50 border-green-200",
          },
          {
            number: "21",
            title: "जीवन और व्यक्तिगत स्वतंत्रता का अधिकार",
            description:
              "विधि द्वारा स्थापित प्रक्रिया के अलावा किसी व्यक्ति को उसके जीवन या व्यक्तिगत स्वतंत्रता से वंचित नहीं किया जाएगा।",
            importance: "सबसे मौलिक अधिकार",
            color: "bg-purple-50 border-purple-200",
          },
        ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            alt="banner"
            src="/banner.jpg"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.hero.heading}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {dict.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3"
            >
              {dict.hero.cta}
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              {dict.hero.learnMore}
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            {articles.map((article, index) => (
              <Card
                key={article.number}
                className={`${article.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="text-lg font-bold px-3 py-1"
                    >
                      {lang === "en" ? "Article" : "अनुच्छेद"} {article.number}
                    </Badge>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-700 mb-4 leading-relaxed">
                    {article.description}
                  </CardDescription>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {article.importance}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    >
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {lang === "en"
              ? "Knowledge is Power. Know Your Rights."
              : "ज्ञान ही शक्ति है। अपने अधिकारों को जानें।"}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {lang === "en"
              ? "Empower yourself with constitutional knowledge that every citizen should possess"
              : "संवैधानिक ज्ञान से खुद को सशक्त बनाएं जो हर नागरिक के पास होना चाहिए"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              {lang === "en" ? "Start Learning" : "सीखना शुरू करें"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              {lang === "en" ? "Download Guide" : "गाइड डाउनलोड करें"}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚖</span>
                </div>
                <span className="text-xl font-bold">{dict.name}</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {lang === "en"
                  ? "Making constitutional rights accessible to every Indian citizen through simple, clear explanations."
                  : "सरल, स्पष्ट व्याख्याओं के माध्यम से हर भारतीय नागरिक के लिए संवैधानिक अधिकारों को सुलभ बनाना।"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {lang === "en" ? "Quick Links" : "त्वरित लिंक"}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {dict.header.home}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {dict.header.articles}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {dict.header.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {dict.header.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">
                {lang === "en" ? "Contact" : "संपर्क"}
              </h3>
              <p className="text-gray-400">
                {lang === "en"
                  ? "Have questions? Reach out to us."
                  : "कोई सवाल है? हमसे संपर्क करें।"}
              </p>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 {dict.name}.{" "}
              {lang === "en" ? "All rights reserved." : "सर्वाधिकार सुरक्षित।"}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              {lang === "en"
                ? "Made with ❤️ for India"
                : "भारत के लिए ❤️ से बनाया गया"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

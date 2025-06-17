import { getDictionary } from "../dictionaries";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

async function getArticles(lang: "en" | "hi") {
  try {
    const articlesPath = path.join(process.cwd(), "src", "content", "article");
    const articleFolders = await fs.readdir(articlesPath);

    const articles = [];

    for (const folder of articleFolders) {
      const folderPath = path.join(articlesPath, folder);
      const stat = await fs.stat(folderPath);

      if (stat.isDirectory()) {
        const langPath = path.join(folderPath, lang);

        try {
          await fs.access(langPath);

          let metadata = null;
          try {
            const metadataPath = path.join(langPath, "metadata.json");
            const metadataContent = await fs.readFile(metadataPath, "utf-8");
            metadata = JSON.parse(metadataContent);
          } catch {
            metadata = {
              title: folder
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
              description:
                lang === "hi"
                  ? "इस लेख में महत्वपूर्ण संवैधानिक जानकारी है।"
                  : "This article contains important constitutional information.",
              importance: lang === "hi" ? "महत्वपूर्ण" : "Important",
              readTime: "5 min",
              category: lang === "hi" ? "संविधान" : "Constitution",
              publishedAt: new Date().toISOString().split("T")[0],
            };
          }

          articles.push({
            id: folder,
            ...metadata,
          });
        } catch {
          continue;
        }
      }
    }

    return articles;
  } catch (error) {
    console.error("Error reading articles:", error);
    return [];
  }
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const articles = await getArticles(lang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <nav className="mb-8">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Link
                href={`/${lang}`}
                className="text-orange-700 hover:text-orange-800 transition-colors duration-300 font-medium"
              >
                {lang === "hi" ? "होम" : "Home"}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 font-medium">
                {lang === "hi" ? "सभी लेख" : "All Articles"}
              </span>
            </div>
          </nav>

          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <BookOpen
                className="w-16 h-16 text-yellow-950"
                strokeWidth={1.5}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {lang === "hi" ? "संवैधानिक लेख" : "Constitutional Articles"}
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              {lang === "hi"
                ? "भारतीय संविधान के महत्वपूर्ण अनुच्छेदों का विस्तृत अध्ययन"
                : "Comprehensive study of important articles of the Indian Constitution"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {articles.length}
              </div>
              <div className="text-gray-600">
                {lang === "hi" ? "कुल लेख" : "Total Articles"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">395</div>
              <div className="text-gray-600">
                {lang === "hi"
                  ? "संवैधानिक अनुच्छेद"
                  : "Constitutional Articles"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600">
                {lang === "hi" ? "अनुसूचियां" : "Schedules"}
              </div>
            </div>
          </div>

          <Link href={`/${lang}`}>
            <Button className="rounded-none bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-8 py-3 text-black font-bold">
              ← {lang === "hi" ? "होम पर वापस जाएं" : "Back to Home"}
            </Button>
          </Link>
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

      {/* Articles Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {articles.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {lang === "hi" ? "उपलब्ध लेख" : "Available Articles"}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {lang === "hi"
                    ? "प्रत्येक लेख को पढ़कर अपने संवैधानिक ज्ञान को बढ़ाएं"
                    : "Enhance your constitutional knowledge by reading each article"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card
                    key={article.id}
                    className="
                      bg-white/70
                      backdrop-blur-sm
                      border border-orange-200/80
                      rounded-lg
                      shadow-lg shadow-orange-700/10
                      hover:shadow-xl hover:shadow-orange-700/20
                      hover:-translate-y-2
                      transition-all duration-300
                      group
                    "
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge
                          variant="secondary"
                          className="text-sm font-bold px-3 py-1 bg-orange-100 text-orange-800 border-orange-200"
                        >
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-orange-800 transition-colors duration-300">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-700 mb-4 leading-relaxed text-sm">
                        {article.description}
                      </CardDescription>

                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.publishedAt).toLocaleDateString(
                          lang === "hi" ? "hi-IN" : "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>

                      <Separator className="my-4 bg-orange-200/60" />

                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className="text-xs border-orange-400 text-orange-700 rounded-sm"
                        >
                          {article.importance}
                        </Badge>
                        <Link href={`/${lang}/article/${article.id}`}>
                          <Button
                            size="sm"
                            className="rounded-none bg-white border border-orange-400 shadow-[4px_4px_0_0_rgba(231,111,81,0.2)] hover:bg-orange-50 hover:shadow-[6px_6px_0_0_rgba(231,111,81,0.3)] hover:-translate-y-1 transition-all duration-300 text-orange-800 font-semibold text-sm group"
                          >
                            {lang === "hi" ? "पढ़ें" : "Read"}
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <BookOpen className="w-16 h-16 text-orange-400 mx-auto mb-6 opacity-60" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {lang === "hi"
                    ? "कोई लेख उपलब्ध नहीं"
                    : "No Articles Available"}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {lang === "hi"
                    ? "अभी तक कोई लेख प्रकाशित नहीं हुआ है। जल्द ही नए लेख आएंगे।"
                    : "No articles have been published yet. New articles will be available soon."}
                </p>
                <Link href={`/${lang}`}>
                  <Button className="rounded-none bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-8 py-3 text-black font-bold">
                    {lang === "hi" ? "होम पर वापस जाएं" : "Back to Home"}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {lang === "hi"
              ? "संविधान की गहराई में जाएं"
              : "Dive Deep into the Constitution"}
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {lang === "hi"
              ? "हर लेख आपको भारतीय संविधान की बेहतर समझ देगा"
              : "Each article will give you a better understanding of the Indian Constitution"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}`}>
              <Button
                size="lg"
                className="rounded-none bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-8 py-3 text-black font-bold"
              >
                {lang === "hi" ? "होमपेज पर जाएं" : "Go to Homepage"}
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-none bg-orange-100 border-2 border-orange-400 shadow-[6px_6px_0_0_rgba(251,146,60,0.2)] hover:bg-orange-200 hover:shadow-[8px_8px_0_0_rgba(251,146,60,0.3)] hover:-translate-y-1 transition-all duration-300 px-10 py-4 text-orange-800 font-bold text-lg"
            >
              {lang === "hi" ? "सभी लेख डाउनलोड करें" : "Download All Articles"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

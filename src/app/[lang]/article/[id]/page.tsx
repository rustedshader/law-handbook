"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArticlePage() {
  const params = useParams<{ lang: "en" | "hi"; id: string }>();
  console.log("Article Page Params:", params);

  const ArticleContent = dynamic(
    async () => {
      try {
        return await import(
          `@/content/article/${params.id}/${params.lang}/content.mdx`
        );
      } catch (error) {
        return () => (
          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <Scale className="w-16 h-16 text-orange-400 mx-auto mb-6 opacity-60" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {params.lang === "hi"
                  ? "सामग्री नहीं मिली!"
                  : "Content not found!"}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {params.lang === "hi"
                  ? "यह लेख अभी उपलब्ध नहीं है।"
                  : "This article is not available at the moment."}
              </p>
              <Link href={`/${params.lang}`}>
                <Button className="rounded-none bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-8 py-3 text-black font-bold">
                  {params.lang === "hi" ? "होम पर वापस जाएं" : "Back to Home"}
                </Button>
              </Link>
            </div>
          </div>
        );
      }
    },
    {
      ssr: false,
      loading: () => (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Scale className="w-12 h-12 text-orange-400 mx-auto mb-4 animate-pulse" />
            <p className="text-lg text-gray-600">
              {params.lang === "hi" ? "लोड हो रहा है..." : "Loading..."}
            </p>
          </div>
        </div>
      ),
    }
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white">
      {/* Header Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link
                href={`/${params.lang}`}
                className="text-orange-700 hover:text-orange-800 transition-colors duration-300 font-medium"
              >
                {params.lang === "hi" ? "होम" : "Home"}
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href={`/${params.lang}/articles`}
                className="text-orange-700 hover:text-orange-800 transition-colors duration-300 font-medium"
              >
                {params.lang === "hi" ? "लेख" : "Articles"}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 capitalize">{params.id}</span>
            </div>
          </nav>

          {/* Back Button */}
          <div className="mb-8">
            <Link href={`/${params.lang}`}>
              <Button
                variant="ghost"
                className="rounded-none border border-orange-400 shadow-[4px_4px_0_0_rgba(231,111,81,0.2)] hover:bg-orange-50 transition-all duration-300 text-orange-800 font-semibold"
              >
                ← {params.lang === "hi" ? "वापस जाएं" : "Back"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20 z-10">
          <Scale className="w-8 h-8 text-orange-400" />
        </div>
        <div className="absolute top-20 right-16 opacity-20 z-10">
          <Scale className="w-6 h-6 text-orange-400" />
        </div>
      </section>

      {/* Main Content Area */}
      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content Container */}
          <div
            className="
            bg-white/80 
            backdrop-blur-sm 
            border border-orange-200/80 
            rounded-lg 
            shadow-lg shadow-orange-700/10 
            overflow-hidden
          "
          >
            <div className="p-8 md:p-12">
              <ArticleContent />
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href={`/${params.lang}`}>
              <Button className="rounded-none bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-8 py-3 text-black font-bold">
                {params.lang === "hi" ? "होम पर वापस जाएं" : "Back to Home"}
              </Button>
            </Link>

            <Link href={`/${params.lang}/articles`}>
              <Button className="rounded-none bg-[#f5902a] border-2 border-[#FFB066] shadow-[6px_6px_0_0_rgba(255,176,102,0.3)] hover:bg-[#FFE5CC] hover:shadow-[8px_8px_0_0_rgba(255,176,102,0.3)] hover:-translate-y-1 transition-all duration-300 px-8 py-3 text-[#7C3A00] font-bold">
                {params.lang === "hi" ? "सभी लेख देखें" : "View All Articles"}
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-16 left-16 opacity-20 z-10">
        <Scale className="w-10 h-10 text-orange-400" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 z-10">
        <Scale className="w-7 h-7 text-orange-400" />
      </div>
    </div>
  );
}

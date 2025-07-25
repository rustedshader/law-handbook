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
import {
  Scale,
  Instagram,
  Users,
  Heart,
  BookOpen,
  Target,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import IndianFlag from "@/components/indian-flag";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex justify-center mb-4"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.about.heading}
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              {dict.about.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.instagram.com/articlejankar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-none bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-purple-600 shadow-[6px_6px_0_0_rgba(147,51,234,0.3)] hover:shadow-[8px_8px_0_0_rgba(147,51,234,0.4)] hover:-translate-y-1 transition-all duration-300 px-10 py-4 text-white font-bold text-lg"
              >
                <Instagram className="w-5 h-5 mr-2" />
                {dict.about.cta.instagram}
              </Button>
            </a>
            <Link href={`/${lang}/articles`}>
              <Button
                size="lg"
                className="rounded-none bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-10 py-4 text-black font-bold text-lg"
              >
                {dict.about.cta.articles}
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20 z-10">
          <Scale className="w-8 h-8 text-orange-400" />
        </div>
        <div className="absolute top-20 right-16 opacity-20 z-10">
          <Heart className="w-6 h-6 text-orange-400" />
        </div>
        <div className="absolute bottom-16 left-16 opacity-20 z-10">
          <BookOpen className="w-10 h-10 text-orange-400" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 z-10">
          <Users className="w-7 h-7 text-orange-400" />
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/60 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10 hover:shadow-xl hover:shadow-orange-700/20 hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {dict.about.mission.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed text-base">
                  {dict.about.mission.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10 hover:shadow-xl hover:shadow-orange-700/20 hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-orange-600 mr-3" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {dict.about.story.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed text-base">
                  {dict.about.story.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Platform Section */}
          <Card className="bg-white/60 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10 mb-16">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-orange-600 mr-3" />
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  {dict.about.platform.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 leading-relaxed text-base text-center max-w-4xl mx-auto">
                {dict.about.platform.description}
              </CardDescription>
              <div className="flex justify-center mt-6">
                <a
                  href="https://www.instagram.com/articlejankar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-none bg-gradient-to-r from-purple-500 to-pink-500 border border-purple-600 shadow-[4px_4px_0_0_rgba(147,51,234,0.2)] hover:shadow-[6px_6px_0_0_rgba(147,51,234,0.3)] transition-all duration-300 text-white font-semibold">
                    <Instagram className="w-4 h-4 mr-2" />
                    @articlejankar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.about.team.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.about.team.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dict.about.team.members.map((member, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10 hover:shadow-xl hover:shadow-orange-700/20 hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 text-center leading-tight">
                    {member.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-orange-600 mr-3" />
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  {dict.about.foundation.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700 leading-relaxed text-base text-center">
                {dict.about.foundation.description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {lang === "en"
              ? "Join Us in Spreading Legal Awareness"
              : "कानूनी जागरूकता फैलाने में हमारे साथ जुड़ें"}
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            {lang === "en"
              ? "Together, we can build a more informed and empowered society"
              : "मिलकर, हम एक अधिक जानकार और सशक्त समाज का निर्माण कर सकते हैं"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/articlejankar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-none bg-gradient-to-r from-purple-500 to-pink-500 border border-purple-600 shadow-[4px_4px_0_0_rgba(147,51,234,0.2)] hover:shadow-[6px_6px_0_0_rgba(147,51,234,0.3)] transition-all duration-300 px-8 py-3 text-white font-semibold"
              >
                <Instagram className="w-4 h-4 mr-2" />
                {dict.about.cta.instagram}
              </Button>
            </a>
            <Link href={`/${lang}/contact`}>
              <Button
                size="lg"
                className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-8 py-3 text-black font-semibold"
              >
                {dict.about.cta.contact}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

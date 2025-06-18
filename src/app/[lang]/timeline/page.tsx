import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Calendar, Gavel, Users, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import IndianFlag from "@/components/indian-flag";
import {
  EnType,
  HiType,
  Lang,
  timelineEvents,
  typeColors,
} from "@/app/dictionaries/timeline";
import Link from "next/link";

const getTypeColor = (type: EnType | HiType, lang: Lang) => {
  return (
    (typeColors[lang] as Record<string, string>)[type] ||
    "bg-gray-100 text-gray-800 border-gray-300"
  );
};

export default async function ConstitutionTimeline({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const events = timelineEvents[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Header Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-14 border-2 border-black rounded-md shadow overflow-hidden">
            <IndianFlag />
          </div>
        </div>
        <div className="relative max-w-full sm:max-w-4xl mx-auto text-center z-10">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {lang === "en" ? "Constitutional Timeline" : "संवैधानिक समयरेखा"}
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-4 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
              {lang === "en"
                ? "Journey through 75 years of constitutional evolution in India from 1949 to 2025"
                : "1949 से 2025 तक भारत में संवैधानिक विकास के 75 वर्षों की यात्रा"}
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-none bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 px-6 sm:px-8 py-3 text-black font-bold text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {lang === "en" ? "View Timeline" : "समयरेखा देखें"}
            </Button>
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-10 left-10 opacity-20 z-10">
          <Scale className="w-6 h-6 text-orange-400" />
        </div>
        <div className="hidden sm:block absolute top-20 right-16 opacity-20 z-10">
          <BookOpen className="w-5 h-5 text-orange-400" />
        </div>
        <div className="hidden sm:block absolute bottom-16 left-16 opacity-20 z-10">
          <Gavel className="w-8 h-8 text-orange-400" />
        </div>
        <div className="hidden sm:block absolute bottom-10 right-10 opacity-20 z-10">
          <Users className="w-6 h-6 text-orange-400" />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8" id="timeline">
        <div className="max-w-full sm:max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 rounded-full"></div>

            <div className="space-y-8">
              {events.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-[14px] sm:left-6 mt-1 w-4 h-4 bg-white border-[3px] sm:border-4 border-orange-400 rounded-full shadow-lg z-10"></div>
                    <div className="ml-12 sm:ml-20 w-full min-w-0">
                      <Card className="bg-white/80 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10 hover:shadow-xl hover:shadow-orange-700/20 hover:-translate-y-1 transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 bg-orange-100 rounded-lg">
                                <IconComponent className="w-4 h-4 text-orange-600" />
                              </div>
                              <Badge
                                variant="secondary"
                                className="text-base sm:text-lg font-bold px-2 py-1 bg-transparent text-gray-800"
                              >
                                {event.year}
                              </Badge>
                            </div>
                            <Badge
                              variant="outline"
                              className={`text-xs border rounded-sm ${getTypeColor(
                                event.type,
                                lang
                              )}`}
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight break-words">
                            {event.title}
                          </CardTitle>
                          <p className="text-xs sm:text-sm text-gray-500 font-medium">
                            {event.date}
                          </p>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                            {event.description}
                          </CardDescription>
                          <Separator className="my-3 bg-orange-200/60" />
                          {/* FIX: Added 'flex-wrap' and 'gap-2' to allow the badge and button to stack on narrow screens. */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <Badge
                              variant="outline"
                              className="text-xs border-orange-400 text-orange-700 rounded-sm"
                            >
                              {event.importance}
                            </Badge>
                            <Button className="rounded-none bg-white border border-orange-400 shadow-[3px_3px_0_0_rgba(231,111,81,0.2)] hover:bg-orange-50 transition-colors duration-300 text-orange-800 font-semibold text-xs sm:text-sm">
                              {lang === "en" ? "Learn More →" : "और जानें →"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline End Marker */}
            <div className="relative flex items-center mt-8">
              <div className="absolute left-[14px] sm:left-6 w-4 h-4 bg-orange-500 rounded-full shadow-lg z-10 animate-pulse"></div>
              <div className="ml-12 sm:ml-20 w-full">
                <Card className="bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300 rounded-lg shadow-lg">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold text-orange-800 mb-2">
                      {lang === "en"
                        ? "The Constitution Continues to Evolve"
                        : "संविधान का विकास जारी है"}
                    </h3>
                    <p className="text-sm sm:text-base text-orange-700">
                      {lang === "en"
                        ? "As India progresses, our Constitution adapts to meet new challenges and opportunities"
                        : "जैसे-जैसे भारत प्रगति कर रहा है, हमारा संविधान नई चुनौतियों और अवसरों के अनुकूल हो रहा है"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full sm:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            {lang === "en"
              ? "Understand Your Constitutional Heritage"
              : "अपनी संवैधानिक विरासत को समझें"}
          </h2>
          <p className="text-base sm:text-lg text-black mb-6 max-w-2xl mx-auto">
            {lang === "en"
              ? "Each milestone in our Constitution's journey has shaped the India we live in today"
              : "हमारे संविधान की यात्रा के हर मील के पत्थर ने आज के भारत को आकार दिया है"}
          </p>
          <div className="flex flex-col gap-3 justify-center items-center">
            <Link href={`/${lang}/articles`}>
              <Button
                size="lg"
                className="rounded-none bg-white border border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-6 py-2 text-black font-semibold text-sm"
              >
                {lang === "en" ? "Explore Articles" : "अनुच्छेदों को देखें"}
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-none bg-orange-100 border border-orange-400 shadow-[3px_3px_0_0_rgba(251,146,60,0.2)] hover:bg-orange-200 transition-colors duration-300 px-6 py-2 text-orange-800 font-semibold text-sm"
            >
              {lang === "en" ? "Download Timeline" : "समयरेखा डाउनलोड करें"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

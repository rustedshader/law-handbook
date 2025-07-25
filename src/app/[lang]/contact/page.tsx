import { getDictionary } from "../dictionaries";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Scale,
  Instagram,
  Mail,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import IndianFlag from "@/components/indian-flag";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {dict.contact.heading}
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              {dict.contact.subtitle}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20 z-10">
          <Scale className="w-8 h-8 text-orange-400" />
        </div>
        <div className="absolute top-20 right-16 opacity-20 z-10">
          <MessageCircle className="w-6 h-6 text-orange-400" />
        </div>
        <div className="absolute bottom-16 left-16 opacity-20 z-10">
          <Mail className="w-10 h-10 text-orange-400" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 z-10">
          <Instagram className="w-7 h-7 text-orange-400" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <Card className="bg-white/60 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10 hover:shadow-xl hover:shadow-orange-700/20 hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 text-orange-600 mr-3" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {dict.contact.email.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed text-base mb-6">
                  {dict.contact.email.description}
                </CardDescription>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                  <p className="text-lg font-semibold text-gray-900 text-center">
                    {dict.contact.email.address}
                  </p>
                </div>
                <a href="mailto:articlejankar@gmail.com">
                  <Button className="w-full rounded-none bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:bg-gray-50 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 text-black font-bold">
                    <Mail className="w-4 h-4 mr-2" />
                    {dict.contact.cta.email}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="bg-white/60 backdrop-blur-sm border border-orange-200/80 rounded-lg shadow-lg shadow-orange-700/10 hover:shadow-xl hover:shadow-orange-700/20 hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <Instagram className="w-8 h-8 text-orange-600 mr-3" />
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {dict.contact.social.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed text-base mb-6">
                  {dict.contact.social.description}
                </CardDescription>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mb-6">
                  <p className="text-lg font-semibold text-purple-800 text-center">
                    @articlejankar
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/articlejankar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full rounded-none bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-purple-600 shadow-[4px_4px_0_0_rgba(147,51,234,0.3)] hover:shadow-[6px_6px_0_0_rgba(147,51,234,0.4)] hover:-translate-y-1 transition-all duration-300 text-white font-bold">
                    <Instagram className="w-4 h-4 mr-2" />
                    {dict.contact.cta.instagram}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {lang === "en"
              ? "Let's Build Legal Awareness Together"
              : "आइए मिलकर कानूनी जागरूकता का निर्माण करें"}
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            {lang === "en"
              ? "Your questions and feedback help us create better content for everyone"
              : "आपके प्रश्न और फीडबैक सभी के लिए बेहतर सामग्री बनाने में हमारी मदद करते हैं"}
          </p>
        </div>
      </section>
    </div>
  );
}

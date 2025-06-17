import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Footer({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <footer className=" text-black py-12 px-4 sm:px-6 lg:px-8 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">{dict.name}</span>
            </div>
            <p className="text-black mb-4 max-w-md">
              {lang === "en"
                ? "Making constitutional rights accessible to every Indian citizen through simple, clear explanations."
                : "सरल, स्पष्ट व्याख्याओं के माध्यम से हर भारतीय नागरिक के लिए संवैधानिक अधिकारों को सुलभ बनाना।"}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {lang === "en" ? "Quick Links" : "त्वरित लिंक"}
            </h3>
            <ul className="space-y-2 text-black">
              <li>
                <a
                  href="#"
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.home}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.articles}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.about}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {lang === "en" ? "Contact" : "संपर्क"}
            </h3>
            <p className="text-black">
              {lang === "en"
                ? "Have questions? Reach out to us."
                : "कोई सवाल है? हमसे संपर्क करें।"}
            </p>
          </div>
        </div>

        <div className="mt-8  pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">
            © 2025 {dict.name}.{" "}
            {lang === "en" ? "All rights reserved." : "सर्वाधिकार सुरक्षित।"}
          </p>
          <p className="text-black text-sm mt-2 md:mt-0">
            {lang === "en"
              ? "Made with ❤️ for India"
              : "भारत के लिए ❤️ से बनाया गया"}
          </p>
        </div>
      </div>
    </footer>
  );
}

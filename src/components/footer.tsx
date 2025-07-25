import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function Footer({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <footer className=" text-black py-12 px-4 sm:px-6 lg:px-8 border-t border-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">{dict.name}</span>
            </div>
            <p className="text-black mb-4 max-w-md">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.quick_link}</h3>
            <ul className="space-y-2 text-black">
              <li>
                <Link
                  href={`/${lang}`}
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/articles`}
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.articles}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/timeline`}
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.timeline}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 px-4 py-2 inline-block text-black font-semibold text-sm"
                >
                  {dict.header.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{dict.footer.Questions}</h3>
            <p className="text-black">{dict.footer.Questions}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2 w-full">
            <p className="text-black text-sm md:mr-4">
              © {new Date().getFullYear()} {dict.name}. {dict.footer.disclamer}
            </p>
            <p className="text-black text-sm">{dict.footer.finisher}</p>
          </div>
          <div className="text-black text-xs text-center md:text-right w-full md:w-auto mt-2 md:mt-0">
            Last updated July 25 2025
          </div>
        </div>
      </div>
    </footer>
  );
}

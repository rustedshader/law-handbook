import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";
import LangSwitcherButton from "./lang-switcher";
import MobileMenu from "./mobile-header";

export default async function Header({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <header className="border-b border-black bg-gray-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-[#111418]">
          {dict.name}
        </h2>

        <nav className="hidden md:flex items-center gap-4">
          <Link href={`/${lang}`} className="nav-button">
            {dict.header.home}
          </Link>
          <Link href={`/${lang}/articles`} className="nav-button">
            {dict.header.articles}
          </Link>
          <Link href={`/${lang}/about`} className="nav-button">
            {dict.header.about}
          </Link>
          <Link href={`/${lang}/contact`} className="nav-button">
            {dict.header.contact}
          </Link>
          <LangSwitcherButton />
        </nav>

        <div className="md:hidden">
          <MobileMenu lang={lang} dict={dict} />
        </div>
      </div>
    </header>
  );
}

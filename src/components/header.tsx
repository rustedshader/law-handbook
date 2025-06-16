import Link from "next/link";
import { StarsIcon } from "lucide-react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import LangSwitcherButton from "./lang_switcher";

export default async function Header({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const changeLanguage = () => {
    console.log("Hi");
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-[#eaedf0] px-10 py-3 bg-gray-50">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="size-4">
          <StarsIcon />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111418]">
          {dict.name}
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link
            href="/"
            className="text-sm font-medium leading-normal text-[#111418] hover:underline"
          >
            {dict.header.home}
          </Link>
          <Link
            href="/articles"
            className="text-sm font-medium leading-normal text-[#111418] hover:underline"
          >
            {dict.header.articles}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium leading-normal text-[#111418] hover:underline"
          >
            {dict.header.about}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium leading-normal text-[#111418] hover:underline"
          >
            {dict.header.contact}
          </Link>
        </nav>
        <div className="flex gap-2">
          <LangSwitcherButton />
        </div>
      </div>
    </header>
  );
}

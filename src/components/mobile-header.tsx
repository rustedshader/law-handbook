"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LangSwitcherButton from "./lang-switcher";

export default function MobileMenu({
  lang,
  dict,
}: {
  lang: string;
  dict: any;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border border-black bg-white"
        aria-label="Toggle Menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-black shadow-lg z-50">
          <ul className="flex flex-col">
            <li>
              <Link
                href={`/${lang}`}
                className="block px-4 py-2 hover:bg-gray-100 border-b"
                onClick={() => setOpen(false)}
              >
                {dict.header.home}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/articles`}
                className="block px-4 py-2 hover:bg-gray-100 border-b"
                onClick={() => setOpen(false)}
              >
                {dict.header.articles}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/about`}
                className="block px-4 py-2 hover:bg-gray-100 border-b"
                onClick={() => setOpen(false)}
              >
                {dict.header.about}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/contact`}
                className="block px-4 py-2 hover:bg-gray-100 border-b"
                onClick={() => setOpen(false)}
              >
                {dict.header.contact}
              </Link>
            </li>
            <li className="px-4 py-2">
              <LangSwitcherButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

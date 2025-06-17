"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function LangSwitcherButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState<string>("English");
  const switchLanguage = () => {
    console.log(pathname);
    if (pathname.startsWith("/en")) {
      router.push(pathname.replace("en", "hi"));
      setCurrentLanguage("Hindi");
    } else {
      router.push(pathname.replace("hi", "en"));
      setCurrentLanguage("English");
    }
  };

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setCurrentLanguage("हिन्दी");
    } else {
      setCurrentLanguage("English");
    }
  }, [currentLanguage]);
  return (
    <>
      <Button
        onClick={switchLanguage}
        className="rounded-none bg-white border border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 transition-colors duration-300 w-32"
        style={{ boxShadow: "4px 4px 0 0 rgba(0,0,0,0.2)" }}
      >
        <div className="text-black font-semibold w-full text-center">
          {currentLanguage}
        </div>
      </Button>
    </>
  );
}

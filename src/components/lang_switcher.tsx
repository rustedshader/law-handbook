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
      setCurrentLanguage("Hindi");
    } else {
      setCurrentLanguage("English");
    }
  }, [currentLanguage]);
  return (
    <>
      <Button onClick={switchLanguage}>{currentLanguage}</Button>
    </>
  );
}

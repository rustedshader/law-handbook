import "server-only";

const dictionaries = {
  en: () =>
    import("@/app/dictionaries/en.json").then((module) => module.default),
  hi: () =>
    import("@/app/dictionaries/hi.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "hi") =>
  dictionaries[locale]();

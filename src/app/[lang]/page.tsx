import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  console.log(lang);
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="font-bold">
        The Language Set is: {lang === "en" ? "English" : "Hindi"}
      </div>
    </>
  );
}

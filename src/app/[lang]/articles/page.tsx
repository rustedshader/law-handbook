import { getDictionary } from "../dictionaries";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <></>;
}

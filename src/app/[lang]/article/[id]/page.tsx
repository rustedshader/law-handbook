export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: "en" | "hi"; id: string }>;
}) {
  const { lang, id } = await params;
  return (
    <div>
      <h1>Article Page</h1>
      <p>This is the article page for the application.</p>
      <p>Language: {lang}</p>
      <p>Article ID: {id}</p>
    </div>
  );
}

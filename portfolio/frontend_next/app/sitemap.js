// app/sitemap.js (for App Router)

export default async function sitemap() {
  const baseUrl = "https://vishwajeetportfolio.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/certificate`,
      lastModified: new Date().toISOString(),
    },
  ];
}

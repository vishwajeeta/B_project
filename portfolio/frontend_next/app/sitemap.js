
export default async function sitemap() {
  const baseUrl = "https://vishwajeetportfolio.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/certificate`,
      lastModified: new Date().toISOString(),
    },
    // Add more routes as needed
  ];
}

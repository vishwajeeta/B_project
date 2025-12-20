
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
    {
      url: `${baseUrl}/marketplace`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/challenges`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/challenges/1-solidity-simple-bug`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/challenges/2-solidity-function-bug`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/challenges/3-gas-optimized-storage`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/challenges/4-gas-optimization-and-storage-refunds`,
      lastModified: new Date().toISOString(),
    }
    // Add more routes as needed
  ];
}

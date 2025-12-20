import { challenges } from './challenges/challanges'

export default async function sitemap() {
  const baseUrl = 'https://vishwajeetportfolio.vercel.app'

  const challengeUrls = challenges.map((challenge) => {
    const slug = `${challenge.id}-${challenge.slug}` 
    // OR if you don't have slug field:
    // const slug = `${challenge.id}-${challenge.title.toLowerCase().replace(/\s+/g, '-')}`

    return {
      url: `${baseUrl}/challenges/${slug}`,
      lastModified: new Date().toISOString(),
    }
  })

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
      url: `${baseUrl}/challenges`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    ...challengeUrls,
  ]
}

// export default async function sitemap() {
//   const baseUrl = "https://vishwajeetportfolio.vercel.app";

//   return [
//     {
//       url: `${baseUrl}/`,
//       lastModified: new Date().toISOString(),
//     },
//     {
//       url: `${baseUrl}/certificate`,
//       lastModified: new Date().toISOString(),
//     },
//     {
//       url: `${baseUrl}/marketplace`,
//       lastModified: new Date().toISOString(),
//     },
//     {
//       url: `${baseUrl}/challenges`,
//       lastModified: new Date().toISOString(),
//     },
//     {
//       url: `${baseUrl}/blog`,
//       lastModified: new Date().toISOString(),
//     },
//     // Add more routes as needed
//   ];
// }

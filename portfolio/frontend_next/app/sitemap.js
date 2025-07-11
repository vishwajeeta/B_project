import { MetadataRoute } from "next"
// export default async function sitemap():Promise <MetadataRoute.Sitemap> {
 export default async function sitemap() {

    return[
        {
            url:'https://vishwajeetportfolio.vercel.app/',
            
            },
        {
        url:'https://vishwajeetportfolio.vercel.app/certificate',
        lastModified:new Date(),
        },
    ]
}

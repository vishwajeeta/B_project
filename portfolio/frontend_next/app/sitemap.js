import { MetadataRoute } from "next"
// export default async function sitemap():Promise <MetadataRoute.Sitemap> {
 export default async function sitemap() {

    return[
        {
            url:'localhost:3000/',
            
            },
        {
        url:'localhost:3000/certificate',
        lastModified:new Date(),
        },
    ]
}
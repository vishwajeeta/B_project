import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId:process.env.NEXT_APP_SANITY_PROJECT_ID,
    dataset:'',
    apiVersion:'',
    useCdn:'',
    token:process.env.NEXT_APP_SANITY_TOKEN,
});
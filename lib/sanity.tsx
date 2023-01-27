import {createClient, groq} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: "production",
    projectId: "bezipeib",
    apiVersion: "2021-10-21",
    useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(config);
export const urlFor = (source:any) => builder.image(source);
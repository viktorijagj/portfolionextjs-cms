import { sanityClient } from "lib/sanity";
import { groq } from "next-sanity";

export const fetchproject = async ()=> {
    const query = groq `
    *[_type=="project"]{
  _id,title,url,image, languages[]-> {
   _id, title, skilimg
  }
    }
    `;
    const project = await sanityClient.fetch(query);
    return project;
};
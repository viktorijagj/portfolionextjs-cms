import { sanityClient } from "lib/sanity";
import { groq } from "next-sanity";

export const fetchcv = async ()=> {
    const query = groq `
    *[_type=="cv"]{
  _id,education,title,year
}
    `;
    const cv = await sanityClient.fetch(query);
    return cv;
};
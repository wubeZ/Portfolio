import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "projects"]{
      title,
      description,
      backgroundImage {alt, "image": asset->url},
      featured,
      githubLink,
      siteLink,
      techUsed,
    }`
  );
}

export async function getProgLanguages(){
    return client.fetch(
        groq`*[_type == "progLanguages"]{
            programmingLanguages,
            frontend,
            backend,
            database
        }[0]`
    )
}
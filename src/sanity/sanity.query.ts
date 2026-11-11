import { groq } from "next-sanity";
import client from "./sanity.client";

// Cache Sanity responses for 72 hours.
const REVALIDATE_SECONDS = 3600 * 72;

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
    }`,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } }
  );
}

export async function getProgLanguages() {
  return client.fetch(
    groq`*[_type == "progLanguages"]{
            programmingLanguages,
            frontend,
            backend,
            database
        }[0]`,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } }
  );
}

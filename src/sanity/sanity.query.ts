import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProjects() {
  const revalidate: number = 3600*72;
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
    { revalidate }
  );
}

export async function getProgLanguages() {
  const revalidate: number = 3600*72;
  return client.fetch(
    groq`*[_type == "progLanguages"]{
            programmingLanguages,
            frontend,
            backend,
            database
        }[0]`,
    { revalidate }
  );
}

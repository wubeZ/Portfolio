import { createClient, type ClientConfig } from "next-sanity";

const config: ClientConfig = {
  projectId: "vuhehstv",
  dataset: "production",
  apiVersion: "2024-04-05",
  useCdn: true,
};

const client = createClient(config);

export default client;

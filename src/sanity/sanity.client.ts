import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "vuhehstv",
  dataset: "production",
  apiVersion: "2024-04-05",
};

const client = createClient(config);

export default client;

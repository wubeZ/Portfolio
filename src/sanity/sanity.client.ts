import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "vuhehstv",
  dataset: "production",
  apiVersion: "2023-09-27",
};

const client = createClient(config);

export default client;
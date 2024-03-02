import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "vuhehstv",
  dataset: "production",
  apiVersion: "2024-03-02",
};

const client = createClient(config);

export default client;

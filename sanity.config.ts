import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {visionTool} from '@sanity/vision'
import { schemaTypes } from "./src/schemas";

export default defineConfig({
  name: "Portfolio-Website",
  title: "Portfolio Website",
  projectId: "vuhehstv",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {visionTool} from '@sanity/vision'
import { schemaTypes } from "./src/schemas";

export default defineConfig({
  name: "Portfolio-Website",
  title: "Portfolio Website",
  projectId: "vuhehstv",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});

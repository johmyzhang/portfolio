import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "portfolio",
  title: dataset === "production" ? "Portfolio CMS" : `Portfolio CMS [${dataset}]`,
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset,

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "siteSettings"
            ),
          ]),
    }),
    visionTool(),
  ],
});

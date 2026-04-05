import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Only create a real client if projectId looks valid
export const client = projectId && /^[a-z0-9-]+$/.test(projectId)
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

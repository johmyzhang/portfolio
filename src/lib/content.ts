import fs from "fs";
import path from "path";
import { Settings, Section } from "./types";

const contentDir = path.join(process.cwd(), "content");

export function getSettings(): Settings {
  const filePath = path.join(contentDir, "settings.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function getSections(): Section[] {
  const files = fs.readdirSync(contentDir).filter(
    (f) => f.endsWith(".json") && f !== "settings.json"
  );

  // Sort by filename (prefix like 01-, 02- controls order)
  files.sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const data = JSON.parse(raw);
    // Derive section id from filename: "01-timeline.json" → "timeline"
    const id = file.replace(/^\d+-/, "").replace(/\.json$/, "");
    return { id, ...data };
  });
}

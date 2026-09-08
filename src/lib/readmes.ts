import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getProfileReadme(lang: "es" | "en") {
  const file = lang === "es" ? "README.md" : "README.en.md";
  return readFile(join(process.cwd(), "github-profile", file), "utf8");
}

export async function getSettingsMarkdown() {
  return readFile(
    join(process.cwd(), "github-profile", "SETTINGS.md"),
    "utf8",
  );
}

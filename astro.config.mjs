import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://orvik.dev",
  integrations: [sitemap(), mdx()],
  output: "server",
  adapter: cloudflare()
});
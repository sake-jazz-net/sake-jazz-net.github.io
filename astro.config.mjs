import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sake-jazz-net.github.io",
  output: "static",
  integrations: [sitemap()],
});

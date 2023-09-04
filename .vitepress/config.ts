import { defineConfig } from "vitepress";
import vuetify from "vite-plugin-vuetify";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitepress Material 3",
  description: "A VitePress Theme Powered by Material 3",
  vite: {
    plugins: [vuetify({ autoImport: true })],
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  base: "/vitepress-material3/",
  markdown: {
    headers: {
      level: [2, 3],
    },
  },
  appearance: false,
  themeConfig: {
    giscus: {
      host: "https://giscus.app",
      repo: "zivenyang/vitepress-material3",
      repoId: "R_kgDOKOGqfQ",
      category: "General",
      categoryId: "DIC_kwDOKOGqfc4CZER1",
      mapping: "pathname",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "top",
      lang: "zh-CN",
      loading: "lazy",
    },
  },
});

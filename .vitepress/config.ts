import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitepress Material 3",
  description: "A VitePress Theme Powered by Material 3",
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})

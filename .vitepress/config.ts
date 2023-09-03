import { defineConfig } from 'vitepress'
import vuetify from 'vite-plugin-vuetify'
import anchor from 'markdown-it-anchor'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitepress Material 3",
  description: "A VitePress Theme Powered by Material 3",
  vite: {
    plugins: [vuetify({ autoImport: true })],
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  base: '/vitepress-material3/',
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: anchor.permalink.ariaHidden({
        placement: 'before'
      }),
    },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: {        
      level: [1, 2] },
  }
})

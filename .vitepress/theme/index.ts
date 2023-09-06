// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import vuetify from './vuetify'
import MasonryWall from '@yeger/vue-masonry-wall'
import './style.scss'
import './styles/markdown.scss'
import './styles/vars.scss'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
    app.use(MasonryWall)
  }
}


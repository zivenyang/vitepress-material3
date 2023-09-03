// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import vuetify from './vuetify'
import './style.scss'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
  }
}


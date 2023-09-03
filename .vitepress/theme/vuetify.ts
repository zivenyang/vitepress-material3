import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
        themes: {
          light: {
            colors: {
              primary: colors.blue.darken1, // #1E88E5
              secondary: colors.blue.lighten4, // #BBDEFB
            }
          },
        },
      },
})
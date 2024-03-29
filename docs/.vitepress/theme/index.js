// .vitepress/theme/index.js
import Theme from 'vitepress/theme'
import { h, watch } from 'vue'
import './fonts.css'
import './vars.css'
import './custom.css'

import Logo from './cam-logo.vue';
import Footer from './cam-footer.vue';

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'aside-bottom': () => h(Logo),
      'doc-after': () => h(Footer),
    }
    )
  },
}

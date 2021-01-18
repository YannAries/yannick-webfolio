// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

import "~/assets/styles/index.scss"
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedinIn, faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, faGithub, faLinkedinIn, faCanadianMapleLeaf)

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'fr' }

  config.autoReplaceSvg = "nest"
  config.observeMutations = false
  console.log(config.autoA11y)
  config.autoA11y = true
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
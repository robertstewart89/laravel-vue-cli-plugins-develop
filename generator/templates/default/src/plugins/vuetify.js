import Vue from 'vue'
<%_ if (useAlaCarte) { _%>
// For information on how to automate this process
// Checkout https://vuetifyjs.com/guides/a-la-carte#vuetify-loader

import Vuetify, {
  VApp,
  VBtn,
  VContainer,
  VContent,
  VFlex,
  VFooter,
  VIcon,
  VImg,
  VLayout,
  VNavigationDrawer,
  VSpacer,
  VToolbar,
  VToolbarTitle
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
<%_ } else { _%>
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
<%_ } _%>
<%_ if (locale !== 'en') { _%>
import <%= locale.replace(/-/g, '') %> from 'vuetify/<%= typescript ? 'src' : 'es5' %>/locale/<%= locale %>'
<%_ } _%>

Vue.use(Vuetify, {
<%_ if (useAlaCarte) { _%>
  components: {
    VApp,
    VBtn,
    VContainer,
    VContent,
    VFlex,
    VFooter,
    VIcon,
    VImg,
    VLayout,
    VNavigationDrawer,
    VSpacer,
    VToolbar,
    VToolbarTitle
  },
<%_ } _%>
<%_ if (useTheme) { _%>
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
<%_ } _%>
<%_ if (useCustomProperties) { _%>
  customProperties: true,
<%_ } _%>
  iconfont: '<%= iconFont %>',
<%_ if (locale !== 'en') { _%>
  lang: {
    locales: { <%= locale.replace(/-/g, '') %> },
    current: '<%= locale %>'
  },
<%_ } _%>
})

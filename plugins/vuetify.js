import Vue from "vue";
import Vuetify from "vuetify";
// import VInput from "vuetify/lib/components/VInput/VInput.js";

//import colors from './../config/colors'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import colors from "vuetify/lib/util/colors";

import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

export default (ctx) => {
  
  const vuetify = new Vuetify({
    icons: {
      iconfont: 'fa' || 'md',
    },
    theme: {
      themes: {
        light: {
          //dark: false,
          colors: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
          },
        },
        dark: {
          ...colors,
        },
      },
    },
  });
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};

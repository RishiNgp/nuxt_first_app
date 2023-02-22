import Vue from "vue";
import Vuetify from "vuetify";

//import colors from './../config/colors'
import colors from "vuetify/lib/util/colors";

import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

export default (ctx) => {
  const vuetify = new Vuetify({
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

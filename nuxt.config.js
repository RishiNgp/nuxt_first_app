const pkg = require("./package");

module.exports = {
  // ssr:true,
  // target: 'server',
  mode: "spa",
  components: true,
  // [
  //   '~/components',
  //   { path: '~/components/componentC', extensions: ['vue'] }],

  /*
   ** Headers of the page
   */
  //  router: {
  //   base: '/Login/'
  // },
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/ngpfavicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#FFFFFF" },

  /*
   ** Global CSS
   */
  css: [ '@mdi/font/css/materialdesignicons.min.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/vuetify.js","~plugins/toast.js"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ,
    // Doc: https://bootstrap-vue.js.org/docs/
    //"bootstrap-vue/nuxt",
    "@nuxtjs/router",
    "@nuxtjs/toast",
    "@nuxt/components",
    'nuxt-material-design-icons-iconfont',
    // "@nuxtjs/axios",
    // "@nuxtjs/auth",
  ],
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ["vuetify"],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
  router:{
    middleware:['authenticated']
  }
};

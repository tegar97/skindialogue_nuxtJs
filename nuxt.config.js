
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 loading: {
    color: 'pink',
    height: '5px'
},
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'SKIN DIA/LO/GUE Official' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './assets/images/favicon.ico' },
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap"},
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap"},
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Itim&display=swap"},
      {rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"},
      
      
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/main.scss', lang: 'scss'},

  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/skeleton', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',

  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

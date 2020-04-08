import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

import Home from './components/home.vue'
import Edit from './components/edit.vue'
import Detail from './components/detail.vue'
import Rate from './components/rate.vue'

window.shared_data = {
  movies: [
    {
      id: "0",
      title: "Titanic",
      date: "1990",
      language: "US",
      director : [
        {
        name: "James Cameron",
        nationality: "Canadian",
        birthday: "16/08/1954"
        }
      ],
      desc: "Titanic est une romance dramatique américaine écrite, produite et réalisée par James",
      type: "romance",
      rating: null
    },
    {
      id: "1",
      title: "La ligne verte",
      date: "2000",
      language: "US",
      director : [
        {
        name: "Frank Darabont",
        nationality: "Hongrois",
        birthday: "28/01/1959"
        }
      ],
      desc: "La Ligne verte (The Green Mile) est un film américain écrit et réalisé par Frank Darabont",
      type: "Drame/Fantastique",
      rating: null
    }
  ]
}

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: Detail, name:"detail" },
  { path: '/movie/:id/edit', component: Edit, name: "edit" },
  { path: '/movie/:id/rate', component: Rate, name: "rate" }
]

const opts = {
  icons: {
    iconfont: 'md',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: true,
  },
  themes: {
    light: {
      primary: "#4682b4",
      secondary: "#b0bec5",
      accent: "#8c9eff",
      error: "#b71c1c",
    },
  },
}

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify(opts),
}).$mount('#app')


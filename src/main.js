import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Book from './components/Book.vue'
import work from './components/work.vue'
import study from './components/study.vue'
import Login from './components/Login.vue'
import CNNode from './components/CNNode.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path:'/book',component:Book
  },
  {
    path:'/login',component:Login
  },
  {
    path:'/work',component:work
  },
  {
    path:'/study',component:study
  },
  {
    path:'/cnnode',component:CNNode
  }
]

Vue.config.productionTip = false
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

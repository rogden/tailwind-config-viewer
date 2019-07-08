import Vue from 'vue'
import Router from 'vue-router'
import Canvas from './views/Canvas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Canvas
    }
  ]
})

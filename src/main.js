import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/index.css'

;(async function init () {
  // config
  Vue.config.productionTip = false

  // load vue
  new Vue({
    render: h => h(App)
  }).$mount('#app')
}())

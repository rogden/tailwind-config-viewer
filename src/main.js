import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/index.css'

;(async function init () {
  // config
  Vue.config.productionTip = false

  // register sections
  const components = import.meta.glob('./components/Canvas/Sections/**/*.vue')
  const componentPromises = Object.entries(components).map(([path, importer]) => {
    console.log('Registering ' + path)
    return importer().then((module) => {
      const componentName = path.split('/').pop().replace(/\.\w+$/, '')
      Vue.component(componentName, module.default)
    })
  })
  await Promise.all(componentPromises)

  // load vue
  new Vue({
    render: h => h(App)
  }).$mount('#app')
}())

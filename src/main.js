import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import testComponent from './views/aboutGlobalComponent/globalComponent/plugins.js'

Vue.use(ElementUI);
Vue.use(testComponent);
window.jQuery = $;
window.$ = $;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

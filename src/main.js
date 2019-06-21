import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import tools from '@/tools'
import directives from '@/directives/directives'

Vue.use(ElementUI)
Vue.use(directives)
Vue.prototype.$tools = tools

// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)


// const messages = {
//   zh: {
//     message: {
//       hello: '好好学习，天天向上！'
//     }
//   },
//   en: {
//     message: {
//       hello: 'good good study, day day up!'
//     }
//   }
// }
// const i18n = new VueI18n({
//   locale: 'zh', // 语言标识
//   messages
// })
import i18n from '@/langs/i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

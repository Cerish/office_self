import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './index'

Vue.use(VueI18n)
console.log(localStorage)

const i18n = new VueI18n({
    locale: localStorage.lang || 'ch',
    messages,
    silentTranslationWarn: true
})
// console.log(i18n.locale)
export default i18n
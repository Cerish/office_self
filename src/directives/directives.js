
const directives = {
    install(Vue) {
        Vue.directive('focus', {
            inserted(el) {
                el.children[0].focus()
            }
        })
    }
}
export default directives 
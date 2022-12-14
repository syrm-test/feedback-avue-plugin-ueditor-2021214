import App from '@/App.vue'
// @ts-ignore
import Editor from 'avue-plugin-ueditor'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

Vue.use(Editor)
Vue.use(Element)

new Vue({
    render: h => h(App),
}).$mount('#app')

# 简介

`vite` + `vue2` (`@vitejs/plugin-vue2` 提供支持) + `typescript` 项目

# 问题

1. 使用任意包管理器安装依赖后, 运行 `npm run dev` 打开 <http://localhost:10000> 此时一切正常, `element-ui` 和 `src/App.vue` 内单独创建的 `wangeditor`
   都正常工作
2. 取消 `src/main.ts` 内的注释

```ts
import App from '@/App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// @ts-ignore
import Editor from 'avue-plugin-ueditor'
import Vue from 'vue'

Vue.use(Editor)
Vue.use(Element)

new Vue({
    render: h => h(App),
}).$mount('#app')
```

3. 此时浏览器控制台出现一条错误日志:

> Uncaught SyntaxError: The requested module '/node_modules/.pnpm/wangeditor@4.7.15/node_modules/wangeditor/dist/wangEditor.js?v=42c65da2' does not
> provide an export named 'default' (at plugin.js?v=42c65da2:1:8)


![](doc\1.png)
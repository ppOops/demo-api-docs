import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入全局样式变量??
import "@/assets/style/index.scss";
// element组件按需引入
import "./plugins/element";
// 使用 github 的样式
// import 'github-markdown-css'

// 代码高亮 
// import 'highlight.js/styles/atom-one-dark.css'

// import ElementUI from 'element-ui';
// Vue.use(ElementUI)
// import showdown from "showdown";
// var converter = new showdown.Converter();

Vue.config.productionTip = false;
// Vue.prototype.md2html = (md:any) => {
//   let converter = new showdown.Converter();

//   let text = md.toString();

//   let html = converter.makeHtml(text);

//   return html;
// };

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

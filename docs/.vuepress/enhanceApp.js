// import PageHeader from '@src/components/layout/PageHeader'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
// import store from '@src/store/index'

// import store from '@src/store'

// 使用异步函数也是可以的
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
  }) => {
    // ...做一些其他的应用级别的优化
    Vue.use(ElementUI)
    // Vue.component('PageHeader', PageHeader)
    // https://zhuanlan.zhihu.com/p/455574827
    // router.beforeEach((to, from, next) => {
      // if (typeof _hmt !== "undefined") {
      //   if (to.path) {
      //     _hmt.push(["_trackPageview", to.fullPath]);
      //   }
      // }
      
    //   next();
    // })
    Vue.use(VueRouter)
    // Vue.use(store)
    // Vue.mixin({store: store})
  }
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../components/layout/Layout.vue'
import LayoutHome from '../components/layout/LayoutHome.vue'
import APIDocsLayout from '../components/layout/APIDocsLayout.vue'
import APIDocsLayoutV2 from '../views/APIDocsLayoutV2.vue'

Vue.use(VueRouter)

type Route = RouteConfig & {
  menu?: boolean
}

export const routes: Array<Route> = [
// export const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: LayoutHome,
    children: [
      {
        path: 'product',
        name: 'product',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
        meta: { title: 'Product', icon: 'el-icon-s-data' },
      },
    ]
  }, 
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Layout,
  //   redirect: '/call-statistics',
  //   meta: { title: '数据查询', icon: 'el-icon-s-data' },
  //   menu: true,
  //   children: [
  //     {
  //       path: 'call-statistics',
  //       name: 'callStatistics',
  //       component: () => import(/* webpackChunkName: "callStatistics" */ '@/views/call-statistics/CallStatistics.vue'),
  //       meta: { title: '外呼记录汇总', icon: 'el-icon-s-data' },
  //     },
  //     {
  //       path: 'call-records',
  //       name: 'callRecords',
  //       component: () => import(/* webpackChunkName: "callRecords" */ '@/views/call-records/CallRecords.vue'),
  //       meta: { title: '人员外呼统计', icon: 'el-icon-s-data' },
  //     }
  //   ]
  // },
  {
    path: '/account',
    name: 'account',
    component: Layout,
    redirect: '/001',
    meta: { title: '账号管理', icon: 'el-icon-s-data' },
    menu: false,
    children: [
      // {
      //   path: '001',
      //   name: '001',
      //   component: () => import(/* webpackChunkName: "about" */ '@/views/TestMarkDownPage.vue'),
      //   meta: { title: '账号统计', icon: 'el-icon-s-data' },
      // },
    ]
  },
  {
    path: '/docs',
    name: 'docs',
    component: APIDocsLayout,
    redirect: '/',
    meta: { title: 'API文档', icon: 'el-icon-s-data' },
    menu: false,
    children: [
      {
        path: ':catogory/:doc',
        name: 'APIDocs',
        component: () => import(/* webpackChunkName: "APIDocs" */ '@/views/APIDocs.vue'),
        meta: { title: 'markdown', icon: 'el-icon-s-data' }
      },
    ]
  },
  {
    path: '/docs-v2/:catogory/:doc?',
    name: 'docs-v2',
    component: APIDocsLayoutV2,
    meta: { title: 'API文档', icon: 'el-icon-s-data' },
    menu: false,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestMarkDownPage.vue'),
    meta: { title: '测试md', icon: 'el-icon-s-data' },
    menu: false,
  },
  {
    path: '/docs/testmarkdown',
    name: 'testmarkdown',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TestMarkDownPage.vue'),
    meta: { title: 'testMarkdown', icon: 'el-icon-s-data' },
    menu: false
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

const res = {
  pageSize: 10,
  totalCount: 1198,
  totalPage: 120,
  currPage: 1,
  list: [
      {
          categoryId: 1476,
          categoryLevel: 1,
          categoryName: '御龙2',
          categoryRank: 200,
          createTime: '2022-05-28 14:10:49',
          createUser: 0,
          isDeleted: 0,
          parentId: 1,
          updateTime: '2022-09-13 20:16:41',
          updateUser: 0
      }
  ]
};
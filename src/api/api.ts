import axios from "axios";
import Qs from "qs";
import store from "@/store";
import router from "@/router";
import Vue from "vue";
import { Loading, Message } from "element-ui"; // 引用element-ui的加载和消息提示组件
import { ElLoadingComponent } from "element-ui/types/loading";

const $axios = axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_BASE_API,
});
Vue.prototype.$http = axios; // 并发请求
// 在全局请求和响应拦截器中添加请求状态
let loading: ElLoadingComponent | null = null;
let requestNum = 0;

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++;
  if (requestNum == 1) {
    loading = Loading.service({
      text: "正在努力加载中....",
      background: "rgba(0, 0, 0, 0)",
    });
  }
};

const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--;
  if (requestNum === 0) loading?.close();
};

// 请求拦截器
$axios.interceptors.request.use(
  (config: any) => {
    // loading = Loading.service({ text: "拼命加载中" });
    const { loading = true } = config;
    console.log("config:", config);
    if (loading) addLoading();
    // const token = store.getters.token;
    // if (token) {
    //   config.headers.Authorization = token; // 请求头部添加token
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截器
$axios.interceptors.response.use(
  (response) => {
    // @ts-ignore
    const { loading = true } = response.config;
    if (loading) {
      cancelLoading();
    }
    const code = response.status;
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    const { loading = true } = error.config;
    if (loading) cancelLoading();
    console.log(error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401 清除token信息并跳转到登陆页面
          store.commit("DEL_TOKEN");
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
          break;
        case 404:
          Message.error("网络请求不存在");
          break;
        default:
          Message.error(error.response.data.message);
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes("timeout")) {
        Message.error("请求超时！请检查网络是否正常");
      } else {
        Message.error("请求失败，请检查网络是否已连接");
      }
    }
    return Promise.reject(error);
  }
);

// get，post请求方法
export default {
  post(url: string, data: any) {
    return $axios({
      method: "post",
      url,
      data: Qs.stringify(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
  },
  get(url: string, params: any) {
    return $axios({
      method: "get",
      url,
      params,
    });
  },
};

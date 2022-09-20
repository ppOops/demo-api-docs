<template>
  <div class="sidebar-wrapper">
    <el-menu
      :default-active="activeMenu"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <!-- <template v-for="item in menusRoutes">
        <el-submenu
          v-if="item.children && item.children.length"
          :key="item.path"
          :index="resolvePath(item.path)"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.path"
            :index="resolvePath(item.path, child.path)"
          >
            <span>{{ child.meta.title }}</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :key="item.path" :index="resolvePath(item.path)">
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template> -->

      <el-submenu index="/markdown-page">
        <template slot="title">
            <span>短信</span>
        </template>
        <el-menu-item index="/docs/markdown-page/book">
          <span>短信计费标准</span>
        </el-menu-item>
        <el-menu-item index="/docs/markdown-page/message">
          <span>短信下行发送</span>
        </el-menu-item>
      </el-submenu>

      <!-- <el-menu-item index="/docs/markdown-page/book">
          <span>消息</span>
        </el-menu-item>
        <el-menu-item index="/docs/markdown-page/message">
          <span>短信</span>
        </el-menu-item> -->
    </el-menu>
    <!-- <div>
      <a href="/docs/api/message/001.html">Docs</a>
    </div> -->
    <!-- <div>
      <router-link :to="{ name: 'MarkdownPage', params: { id: 'book' }}">md-1</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'MarkdownPage', params: { id: 'message' }}">message</router-link>
    </div> -->

  </div>
</template>

<script>
import { routes } from "@/router";
import path from "path";

export default {
  data() {
    return {
      routes,
    };
  },
  computed: {},
  computed: {
    menusRoutes() {
      return (this.routes || []).filter((route) => !!route.menu);
    },
    activeMenu() {
      return this.$route.path;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    resolvePath(...routerPath) {
      return path.join(...routerPath);
    },
  },
};
</script>
<style lang='scss' scoped>
.sidebar-wrapper {
  border-right: 1px solid #ccc;
}
.el-menu {
  border: none;
}
</style>
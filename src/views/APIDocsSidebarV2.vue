<template>
  <div class="sidebar-wrapper">
    <el-menu
      :default-active="activeMenu"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <template v-for="item in sidebar">
        <el-submenu
          v-if="item.children && item.children.length"
          :key="item.path"
          :index="item.path"
        >
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="(child, index) in item.children"
            :key="child.path + index"
            :index="child.path"
          >
            <span>{{ child.title }}</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :key="item.path + 1" :index="item.path">
          <span>{{ item.title }}</span>
        </el-menu-item>
      </template>

      <!-- <el-submenu>
        <template slot="title">
          <span>短信</span>
        </template>
        <el-menu-item index="/docs/markdown-page/book">
          <span>短信计费标准</span>
        </el-menu-item>
        <el-menu-item index="/docs/markdown-page/message">
          <span>短信下行发送</span>
        </el-menu-item>
      </el-submenu> -->

      <!-- <el-submenu index="/markdown-page">
          <template slot="title">
              <span>短信</span>
          </template>
          <el-menu-item index="/docs/markdown-page/book">
            <span>短信计费标准</span>
          </el-menu-item>
          <el-menu-item index="/docs/markdown-page/message">
            <span>短信下行发送</span>
          </el-menu-item>
        </el-submenu> -->
    </el-menu>
  </div>
</template>
  
  <script>
import { routes } from "@/router";
import path from "path";
import { apiSidebar } from "@/configs/sidebarV2";

export default {
  name: "APIDocsSidebar",
  data() {
    return {
      routes,
      sidebar: apiSidebar,
    };
  },
  computed: {},
  mounted() {
    console.log('$route.path', this.$route.path, this.sidebar);
  },
  computed: {
    // menusRoutes() {
    //   return (this.routes || []).filter((route) => !!route.menu);
    // },
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
    buildPath(routerPath) {
      return '/docs'+ routerPath;
    },
  },
};
</script>
  <style lang='scss' scoped>
.sidebar-wrapper {
  border-right: 1px solid #ccc;
  overflow: auto;
}
.el-menu {
  border: none;
}
</style>
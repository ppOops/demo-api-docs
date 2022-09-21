<template>
  <div class="layout">
    <page-header class="header"></page-header>
    <div class="body">
      <APIDocsSidebarV2 class="sidebar"></APIDocsSidebarV2>
      <div class="content">
        <div class="main">
          <div class="markdown-body">
            <component :is="mdFile" v-hljs></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/layout/PageHeader.vue";
import APIDocsSidebarV2 from "./APIDocsSidebarV2.vue";
import hljs from 'highlight.js';
import Vue from "vue";


Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});


export default {
  components: {
    PageHeader,
    APIDocsSidebarV2,
  },
  data() {
    return {
      htmlMD: "",
      //保存解析后的md文件对象
      mdFile: "",
      //为了让组件强制渲染
      key: 0,
    };
  },
  watch: {
    $route: {
      handler: "getMdFile",
      immediate: true,
    },
  },
  mounted() {
    console.log("aaa", `@/assets${this.$route.path}.md`);
  },
  methods: {
    async getMdFile() {
      // const catogory = this.$route.params.catogory;
      // const docPath = this.$route.params.doc;
      // const docName = (RoutePath2FileNameMapping[docPath] || docPath).toLowerCase();
      // console.log(catogory, docName, `@/assets/docs/${catogory.toLowerCase()}/${docName}.md`)

      try {
        await import(`@/assets${this.$route.path}.md`).then((myModule) => {
          this.mdFile = myModule.default;
        });
      } catch (error) {
        this.mdFile = null;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .header {
    flex-shrink: 0;
  }
  .body {
    height: calc(100% - 60px);
    display: flex;
    .sidebar {
      width: 240px;
      flex-shrink: 0;
    }
    .content {
      flex-grow: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      padding: 20px 140px;
      .breadcrumb {
        flex-shrink: 0;
        margin-top: 12px;
        height: 80px;
        background: #fff;
        border: 1px solid #ebebeb;
      }
      .main {
        flex-grow: 1;
        margin: 8px;
      }
    }
    .footer {
      margin: 4px 0 12px 0;
      text-align: center;
    }
  }
}
</style>

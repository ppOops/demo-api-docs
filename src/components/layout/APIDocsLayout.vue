<template>
    <div class="layout">
      <page-header class="header"></page-header>
      <div class="body">
        <APIDocsSidebar class="sidebar"></APIDocsSidebar>
        <div class="content">
          <div class="main">
            <router-view></router-view>
          </div>
          <div class="footer">Power by NXCloud</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PageHeader from "./PageHeader.vue";
  import APIDocsSidebar from "./APIDocsSidebar.vue";
  
  export default {
    data() {
      return {};
    },
  
    components: {
      PageHeader,
      APIDocsSidebar
    },
  
    computed: {},
  
    mounted() {},
  
    methods: {},
  };
  </script>
  <style lang='scss' scoped>
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
        padding: 20px;
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
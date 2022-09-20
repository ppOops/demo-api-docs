<template>
  <div class="wrapper">
    <div class="left">
      <img class="logo" href="/" src="../../assets/img/nx-logo.png" />
    </div>
    <div class="right">
      <div class="header-menu">
        <el-menu class="el-menu-demo" mode="horizontal" router index="0">
          <el-menu-item index="/product">产品中心</el-menu-item>
          <el-menu-item index="/product">解决方案</el-menu-item>
          <el-menu-item index="/docs/sms/1-sms">开发文档</el-menu-item>
          <el-menu-item index="/product">产品价格</el-menu-item>
        </el-menu>
      </div>
      <div class="user-info">
        <img class="user-img" src="../../assets/img/user.jpg" alt="user" />
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{ $store.state.userName
            }}<i class="el-icon-arrow-down el-icon--right"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.wrapper {
  display: flex;
  height: 60px;
  width: 100%;
  line-height: 60px;
  background-color: #b3c0d1;
  border-bottom: 1px solid #ccc;
}
.left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  background-color: #fff;
  padding-left: 20px;
}
.logo {
  width: 150px;
  font-size: 18px;
  color: #fff !important;
  text-decoration: none;
}

.right {
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
}
.sidebar-toggle {
  height: 100%;
}
.sidecoll {
  float: left;
  margin-top: 16px;
}
.bread {
  float: left;
  margin: 18px 0 0 20px;
}
.user-img {
  width: 32px;
  height: 32px;
  margin-right: 20px;
  border-radius: 50%;
  vertical-align: middle;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>



<!-- <style lang='scss' scoped>
.wrapper {
  display: flex;
  height: 60px;
  width: 100%;
  line-height: 60px;
  background-color: #b3c0d1;
}
.left {
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  background-color: #0d284f;
  .logo {
    height: 100%;
    font-size: 18px;
    color: #fff !important;
    text-decoration: none;
  }
}
.right {
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
  .sidebar-toggle {
    height: 100%;
    .sidecoll {
      float: left;
      margin-top: 16px;
    }
    .bread {
      float: left;
      margin: 18px 0 0 20px;
    }
  }
  .user-info {
    img {
      width: 32px;
      height: 32px;
      margin-right: 20px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}


.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style> -->
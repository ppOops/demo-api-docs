<template>
  <div class="wrapper">
    <div class="left">
      <el-form
        ref="searchForm"
        :inline="true"
        label-width="100px"
        :model="searchForm"
      >
        <el-form-item label="业务员手机号:" prop="phone">
          <el-input v-model="searchForm.phone" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="人员名称:" prop="user">
          <el-input v-model="searchForm.user" placeholder="请输入"></el-input>
        </el-form-item>
        <div v-show="expand">
          <el-form-item label="地市:" prop="region">
            <el-input
              v-model="searchForm.region"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="外呼时间:" prop="date">
            <el-date-picker
              v-model="searchForm.date"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="账号:" prop="account">
            <el-input
              v-model="searchForm.account"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="right">
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button @click="resetForm">重置</el-button>
      <el-link type="primary" @click="expand = !expand"
        >收起<i class="el-icon-view el-icon--right"></i>
      </el-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: true,
      searchForm: {
        phone: "",
        user: "",
        region: "",
        date: [new Date(), new Date()],
        account: "",
      },
    };
  },

  computed: {},
  created() {
    const {
      phone = "",
      user = "",
      regin = "",
      account = "",
    } = this.$route.query;
    this.searchForm.phone = phone;
    this.searchForm.user = user;
    this.searchForm.regin = regin;
    this.searchForm.account = account;
    this.$emit("search", this.searchForm);
  },
  mounted() {},

  methods: {
    onSubmit() {
      this.$emit("search", this.searchForm);
    },
    resetForm() {
      this.$refs.searchForm.resetFields();
    },
  },
};
</script>
<style lang='scss' scoped>
.wrapper {
  display: flex;
  .left {
    width: 810px;
    .el-form-item {
      margin-right: 0;
      width: 400px;
    }
  }
  .right {
    width: 300px;
  }
}
.el-input,
.el-range-editor {
  width: 260px !important;
}
</style>
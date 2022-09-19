<template>
  <div class="wrapper">
    <el-card>
      <search class="search" @search="searchData($event)"></search>
      <div class="export">
        <el-button>全量导出</el-button>
        <el-button>勾选导出</el-button>
      </div>
      <div class="selected-tip" v-show="multipleSelection.length">
        <i class="icon el-icon-warning"></i>
        <span class="label">已选择{{ multipleSelection.length + 1 }}项</span>
        <el-link type="primary" @click="cancelSelectio">清空</el-link>
      </div>
      <div class="table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          stripe
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column prop="phone" label="业务员手机号" width="120">
          </el-table-column>
          <el-table-column prop="user" label="人员" width="120">
          </el-table-column>
          <el-table-column prop="account" label="账号" width="120">
          </el-table-column>
          <el-table-column prop="regin" label="区域" width="120">
          </el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-link  class="operate" @click="resetPassword(scope.row)" type="primary"
                >重置密码</el-link
              >
              <el-link  class="operate" @click="showDetail(scope.row)" type="primary"
                >详情</el-link
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          :current-page="currentPage"
          :total="total"
          class="pagination"
          @size-change="handleSize"
          @current-change="handlePage"
        >
        </el-pagination>
      </div>
    </el-card>
    <reset-password v-model="detailVisible" :item="resetRow" @change="onChange"></reset-password>
    <detail></detail>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import ResetPassword from './components/ResetPassword.vue';
import Detail from "./components/Detail.vue";

export default {
  components: {
    Search,
    ResetPassword,
    Detail,
  },

  data() {
    return {
      detailVisible: false,
      resetRow: null,
      tableData: [
        {
          phone: "11111111111",
          user: "张三",
          account: "zhangsan",
          regin: "深圳",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1111 弄",
        },
        {
          phone: "22222222222",
          user: "李四",
          account: "lisi",
          regin: "广州",
          date: "2016-05-02",
          name: "王大虎",
          address: "上海市普陀区金沙江路 2222 弄",
        },
        {
          phone: "12342342124",
          user: "张三",
          account: "zhangsan",
          regin: "深圳",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          phone: "12342342124",
          user: "张三",
          account: "zhangsan",
          regin: "深圳",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          phone: "12342342124",
          user: "张三",
          account: "zhangsan",
          regin: "深圳",
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          phone: "12342342124",
          user: "张三",
          account: "zhangsan",
          regin: "深圳",
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          phone: "12342342124",
          user: "张三",
          account: "zhangsan",
          regin: "深圳",
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      pageSizes: [10, 20, 30, 40],
      tablePage: [],
    };
  },

  computed: {},

  mounted() {},

  methods: {
    searchData(val) {
      console.log("onSearch", val);
    },
    handleSize(val) {
      this.pageSize = val;
    },
    handlePage(val) {
      this.currentPage = val;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    cancelSelectio() {
      this.$refs.multipleTable.clearSelection();
    },
    resetPassword(val) {
      this.resetRow = val;
      this.detailVisible = true;
    },
    showDetail(val) {
      console.log("showDetail", val);
    },
    onChange() {
      this.resetRow = null;
      console.log('change event');
    }
  },
};
</script>
<style lang='scss' scoped>
.wrapper {
  height: 100%;
  el-card {
    height: 100%;
  }
  .search {
    margin-bottom: 16px;
  }
  .selected-tip {
    margin: 12px 0;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #91d5ff;
    background: #e6f7ff;
    .icon {
      color: #1890ff;
    }
    .label {
      padding: 0 16px 0 8px;
    }
  }
  .table {
    margin-top: 12px;
    .operate {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  .pagination {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
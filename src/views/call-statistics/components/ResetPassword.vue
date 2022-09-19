<template>
  <div>
    <el-dialog
      title="我是标题"
      :visible.sync="visible"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- prop	表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的, 不想重置，就不设置prop属性，比如这里的account和name -->
        <el-form-item label="当前账号名">
          <el-input
            v-model.number="ruleForm.account"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="人员名称">
          <el-input v-model.number="ruleForm.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import popup from "@/mixins/popup";
// import popup from "@/mixins/popup";

export default {
  mixins: [popup],
  components: {},
  props: {
    item: {
      type: Object,
    },
  },

  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        name: "",
        account: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  watch: {
    item: {
      handler(val) {
        if (val) {
          console.log("resetPassword item:", val);
          this.ruleForm.account = this.item.account;
          this.ruleForm.name = this.item.name;
        }
      },
    },
  },
  mounted() {},
  methods: {
    handleClose() {
      this.visible = false;
      this.resetForm('ruleForm');
      // this.$confirm("确认关闭？")
      //   .then(() => {
      //     this.visible = false;
      //     done();
      //   })
      //   .catch(() => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang='scss' scoped>
</style>
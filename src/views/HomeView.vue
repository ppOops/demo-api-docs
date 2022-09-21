<template>
  <div class="home">
    <div class="doc-link">
      <a class="item" :href="smsDocLink">国际短信文档</a>
      <a class="item" :href="voiceDocLink">语音验证码文档</a>
      <a class="item" :href="nxphoneDocLink">语音群呼文档</a>
    </div>
  </div>
</template>

<script>
import { getFirstDoc } from "@/configs/sidebarV2";

export default {
  name: "PageHeader",
  data() {
    return {
    };
  },

  components: {},
  mounted() {
    console.log(getFirstDoc('短信').path)
    console.log(getFirstDoc('语音').path)
    console.log(getFirstDoc('语音群呼').path)
  },

  computed: {
    smsDocLink() {
      return getFirstDoc('短信').path
    },
    voiceDocLink() {
      return getFirstDoc('语音').path
    },
    nxphoneDocLink() {
      return getFirstDoc('语音群呼').path
    }
  },

  methods: {},
};
</script>

<style scoped lang="scss">
  .doc-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 660px;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 150px;
      background: #f8fbf0;
      border-radius: 20px;
      box-shadow: 0 4px 12px 1px rgb(46 66 2 / 8%);
    }
  }
</style>

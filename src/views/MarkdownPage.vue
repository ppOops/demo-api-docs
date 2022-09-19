<template>
    <!-- markdown-body 一定要写这个class名 -->
  <!-- <div class="markdown-body" v-html="htmlMD"></div> -->
  <!-- <vue-markdown :key="key">{{msg}}</vue-markdown> -->
  <!-- <div class="markdown-body">
    <markdown/>
  </div> -->
  <div class="markdown-body">
    <component :is="testMDFile"></component>
  </div>
</template>
  
 <script>

  

export default {
  name: "GitBook",
  data(){
    return{
      htmlMD: '',
      //保存解析后的md文件对象
      testMDFile:'',
      //为了让组件强制渲染
      key: 0
     
    }
  },
  watch: {
    '$route': {
      handler: 'testMd',
      immediate:true
    }
  },
  mounted() {
    // this.testMd(this.$route.params.id);
  },
  methods: {
    async testMd() {  
        const type = this.$route.params.id;
	      await import(`@/assets/docs/${type.toLowerCase()}.md`).then(myModule => {
	      this.testMDFile=  myModule.default;
		  });
	      // //强制重新渲染
	      // this.key += 1 
     }
  },
};
</script>

<style>

</style>
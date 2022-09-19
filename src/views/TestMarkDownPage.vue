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
  import markdown from './book.md'
  import VueMarkdown from 'vue-markdown'

export default {
  name: "GitBook",
  components: { markdown, VueMarkdown  },

  data(){
    return{
      htmlMD: '',
      //保存解析后的md文件对象
      testMDFile:'',
      //为了让组件强制渲染
      key: 0
     
    }
  },
  mounted() {
    this.getHtmlMD(this.$route.query.databaseType);
    this.testMd(this.$route.query.databaseType);
  },
  methods: {
    getHtmlMD(type) {
      console.log(this.$route.query.databaseType)
      this.htmlMD = require(`@/assets/docs/${type.toLowerCase()}.md`); //导入md 我这里根据不同的类型拿不同md文件
    },
    async testMd(type) {  
	      await import(`@/assets/docs/${type.toLowerCase()}.md`).then(myModule => {
	      this.testMDFile=  myModule.default;
		  });
	      // //强制重新渲染
	      // this.key += 1 
     }
  },
};
</script>
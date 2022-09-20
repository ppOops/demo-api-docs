<template>
  <div class="markdown-body">
    <component :is="mdFile"></component>
  </div>
</template>
  
 <script>
import { RoutePath2FileNameMapping, sidebarMenus } from '@/configs/sidebar.js'

export default {
  name: "APIDocs",
  data(){
    return{
      htmlMD: '',
      //保存解析后的md文件对象
      mdFile:'',
      //为了让组件强制渲染
      key: 0
     
    }
  },
  watch: {
    '$route': {
      handler: 'getMdFile',
      immediate:true
    }
  },
  mounted() {
    console.log(RoutePath2FileNameMapping)
    // this.testMd(this.$route.params.id);
  },
  methods: {
    async getMdFile() {  
        const catogory = this.$route.params.catogory;
        const docPath = this.$route.params.doc;
        const docName = (RoutePath2FileNameMapping[docPath] || docPath).toLowerCase();
        console.log(catogory, docName, `@/assets/docs/${catogory.toLowerCase()}/${docName}.md`)

	      await import(`@/assets/docs/${catogory.toLowerCase()}/${docName}.md`).then(myModule => {
	      this.mdFile=  myModule.default;
		  });
     },
  },
};
</script>

<style>

</style>
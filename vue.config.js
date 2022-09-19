const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  parallel: false,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: { path: require.resolve("path-browserify") },
    },
  },
  // https://blog.csdn.net/nnaay_/article/details/124456058
  chainWebpack: (config) => {
  	config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
});

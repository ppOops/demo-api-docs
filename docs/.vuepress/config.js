const path = require("path");

module.exports = {
  dest: "dist/docs",
  base: "/docs/",
  port: 8080,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/" },
      { text: "API", link: "/api/message/001" },
    ],
    sidebar: {
      "/": [
        {
          title: "Test",
          children: [
            "",
          ],
        },
      ],
      "/api/": [
        {
          title: "Message",
          collapsable: false,
          //   sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            "/api/message/001.md",
            "/api/message/002.md",
            "/api/message/003.md",
          ],
        },
        {
          title: "Voice",
          children: [
            "/api/voice/001.md",
            "/api/voice/002.md",
            "/api/voice/003.md",
          ],
        },
        {
          title: "NXPhone",
          children: [
            "/api/phone/001.md",
            "/api/phone/002.md",
            "/api/phone/003.md",
          ],
        },
        {
          title: "Flash Call",
          children: [
            "/api/flash-call/001.md",
            "/api/flash-call/002.md",
            "/api/flash-call/003.md",
          ],
        },
        {
          title: "Test",
          children: [
            "/api/test/README.md",
            "/api/test/message.md",
            "/api/test/front-matter.md",
            "/api/test/palette.md",
          ],
        },
      ],
    },
  },
  configureWebpack: {
    node: {
      global: true,
      process: true,
    },
    // resolve: {
    //   alias: {
    //     "@src": path.resolve(__dirname, "../../src/"),
    //   },
    // },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
  devServer: {
    before: app => {
      app.get('/docs', (req,res)=> {
        res.redirect('http://localhost:8080/docs')
      })
    }
  }
};

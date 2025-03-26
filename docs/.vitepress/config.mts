import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  title: "灵卡面板",
  description: "agile-tiles-website",
  themeConfig: {
    logo: "icon.png", // 配置logo位置，public目录
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      // { text: '下载页', link: '/download' },
      { text: '开发者文档', link: '/developer' },
      { text: '政策协议', link: '/agreement' },
      { text: '关于我们', link: '/about' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          // { text: '下载页', link: '/download' },
          { text: '开发者文档', link: '/developer' },
          { text: '政策协议', link: '/agreement' },
          { text: '关于我们', link: '/about' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]

    // 页脚
    footer: {
      message: "Copyright©2025 ******公司",
      copyright: "辽ICP备18000129号-3",
    },
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/icon.png" }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }],
    // 全局关键词
    ['meta', { name: 'keywords', content: '灵卡面板,灵卡面板下载,灵卡面板官网,七仔的桌面工具,灵卡面板开发,灵卡面板插件,国产效率软件,效率工具,生产力工具,AI助手,高效工作' }],
    // 增强社交媒体分享预览
    ['meta', { property: 'og:title', content: '灵卡面板 - 打造你的专属工具面板' }],
    ['meta', { property: 'og:description', content: '打造你的专属工具面板，海量卡片，自由组合，快捷唤出' }],
    ['meta', { property: 'og:image', content: '/icon.png' }]
  ],
  title: "灵卡面板",
  description: "打造你的专属工具面板，海量卡片，自由组合，快捷唤出",
  // sitemap
  sitemap: {
    hostname: 'https://www.agiletiles.com'  // 替换为您的实际域名
  },
  themeConfig: {
    logo: "icon.png", // 配置logo位置，public目录
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '价格', link: '/price' },
      // { text: '开发者文档', link: '/developer' },
      // {
      //   text: '教程/帮助',
      //   items: [
      //     { text: '教程', link: '/help/tutorial' },
      //     { text: '帮助', link: '/help/help' },
      //   ]
      // },
      {
        text: '协议相关',
        items: [
          { text: '用户协议', link: '/agreement/user-agreement' },
          { text: '隐私协议', link: '/agreement/privacy-policy' },
          { text: '开发者协议', link: '/agreement/developer-agreement' },
        ]
      },
      { text: '关于我们', link: '/about' },
    ],

    sidebar: {
      "/help/": {
        text: '教程/帮助',
        items: [
          { text: '教程', link: '/help/tutorial' },
          { text: '帮助', link: '/help/help' },
        ]
      },
      "/agreement/": {
        text: '协议相关',
        items: [
          { text: '用户协议', link: '/agreement/user-agreement' },
          { text: '隐私协议', link: '/agreement/privacy-policy' },
          { text: '开发者协议', link: '/agreement/developer-agreement' },
        ]
      },
      "/developer": {
        text: '开发者文档',
        items: [
          { text: '开发者文档', link: '/developer' },
        ]
      },
      "/history": {
        text: '更新历史',
        items: [
          { text: '更新历史', link: '/history' },
        ]
      },
      "/about": {
        text: '关于我们',
        items: [
          { text: '关于我们', link: '/about' },
        ]
      },
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]

    // 页脚
    footer: {
      message: `Copyright©2025-${new Date().getFullYear()} 杭州市拱墅区启杭灵卡软件开发工作室`,
      copyright: `<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2025189575号</a>`,
    },
  }
})

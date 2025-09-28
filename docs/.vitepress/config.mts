import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/icon.png" }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }],
    // 全局关键词
    ['meta', { name: 'keywords', content: '灵卡面板,摸鱼,办公,灵卡面板下载,灵卡面板官网,七仔的桌面工具,灵卡面板开发,灵卡面板插件,国产效率软件,效率工具,生产力工具,AI助手,高效工作' }],
    // 增强社交媒体分享预览
    ['meta', { property: 'og:title', content: '灵卡面板 - 打造你的专属摸鱼面板' }],
    ['meta', { property: 'og:description', content: '打造你的专属摸鱼面板，海量卡片，自由组合，快捷唤出' }],
    ['meta', { property: 'og:image', content: '/icon.png' }],
    // Plyr视频播放器
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.plyr.io/3.7.8/plyr.css'
    }],
    ['script', {
      src: 'https://cdn.plyr.io/3.7.8/plyr.js'
    }],
    // 51.LA 统计脚本
    ['script', {
      charset: 'UTF-8',
      id: 'LA_COLLECT',
      src: 'https://index.agiletiles.com/website/js/51.la/js-sdk-pro.min.js'
    }],
    ['script', {}, `
      LA.init({
        id: "3N9p2IRHN8YAVUn0",
        ck: "3N9p2IRHN8YAVUn0",
        autoTrack: true,
        prefix: '%2F%2Findex.agiletiles.com%2Fwebsite%2Fjs%2F51.la'
      })
    `],
    // 百度统计
    [
      'script',
      {},
      `
      (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        } else {
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
      })();
      `
    ]
  ],
  title: "灵卡面板 - 打造你的专属摸鱼面板",
  description: "打造你的专属摸鱼面板，海量卡片，自由组合，快捷唤出",
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
      // { text: '开发者文档', link: '/developer' },
      {
        text: '教程/帮助',
        items: [
          { text: '帮助', link: '/help/help' },
          { text: '教程', link: '/help/tutorial' },
        ]
      },
      {
        text: '协议相关',
        items: [
          { text: '用户协议', link: '/agreement/user-agreement' },
          { text: '隐私协议', link: '/agreement/privacy-policy' },
          { text: '开发者协议', link: '/agreement/developer-agreement' },
        ]
      },
      { text: '方案', link: '/price' },
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
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      {
        icon: {
          svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1477" width="36" height="36" style="width: 36px; height: 36px; fill: #00a1d6; filter: drop-shadow(0 0 4px color-mix(in oklab, #00a1d6, transparent 40%));">' +
              '<path d="M450.803484 456.506027l-120.670435 23.103715 10.333298 45.288107 119.454151-23.102578-9.117014-45.289244z m65.04448 120.060586c-29.483236 63.220622-55.926329 15.502222-55.926328 15.502223l-19.754098 12.768142s38.90176 53.192249 75.986489 12.764729c43.770311 40.42752 77.203911-13.068516 77.203911-13.068516l-17.934791-11.55072c0.001138-0.304924-31.305956 44.983182-59.575183-16.415858z m59.57632-74.773617L695.182222 524.895573l10.029511-45.288106-120.364373-23.103716-9.423076 45.289245z m237.784178-88.926436c-1.905778-84.362809-75.487004-100.540871-75.487004-100.540871s-57.408853-0.316302-131.944676-0.95232l54.237867-52.332089s8.562916-10.784996-6.026809-22.834062c-14.592-12.051342-15.543182-6.660551-20.615396-3.487289-4.441884 3.169849-69.462471 66.920676-80.878933 78.340551-29.494613 0-60.2624-0.319716-90.075591-0.319716h10.466418s-77.705671-76.754489-82.781298-80.241777c-5.075627-3.488427-5.709369-8.56064-20.616533 3.487289-14.589724 12.05248-6.026809 22.8352-6.026809 22.8352l55.504213 53.919288c-60.261262 0-112.280462 0.319716-136.383147 1.268623-78.025387 22.521173-71.99744 100.859449-71.99744 100.859449s0.950044 168.100978 0 253.103217c8.562916 85.00224 73.899804 98.636231 73.899805 98.636231s26.007324 0.63488 45.357511 0.63488c1.900089 5.391929 3.486151 32.034133 33.302756 32.034134 29.495751 0 33.30048-32.034133 33.30048-32.034134s217.263218-0.950044 235.340231-0.950044c0.953458 9.196658 5.394204 33.619058 35.207395 33.303893 29.494613-0.636018 31.714418-35.20512 31.714418-35.20512s10.151253-0.95232 40.280747 0c70.413653-13.005938 74.534684-95.468658 74.534684-95.468657s-1.265209-169.689316-0.312889-254.056676zM752.628622 681.8304c0 13.319964-10.467556 24.102684-23.471218 24.102684H300.980907c-13.003662 0-23.47008-10.78272-23.47008-24.102684V397.961671c0-13.32224 10.467556-24.106098 23.47008-24.106098h428.176497c13.003662 0 23.471218 10.783858 23.471218 24.106098v283.868729z" p-id="1478">' +
              '</path>' +
              '</svg>'
        },
        link: 'https://space.bilibili.com/66023397',
      },
      // {
      //   icon: {
      //     svg: '<svg class="icon" style="width: 20px; height: 20px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#111111" source="https://sucai.mixinnet.cn/icon/4830c28107.html"></path><path d="M204.27776 670.59712a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V134.35904h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#FF4040" source="https://sucai.mixinnet.cn/icon/4830c28107.html"></path><path d="M164.92544 631.23456a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V94.99648h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#00F5FF" source="https://sucai.mixinnet.cn/icon/4830c28107.html"></path><path d="M410.91072 427.58144c-158.8224 20.15232-284.44672 222.72-154.112 405.00224 120.40192 98.47808 373.68832 41.20576 380.70272-171.85792l-0.17408-324.1472a280.7296 280.7296 0 0 0 142.88896 38.62528V261.2224a144.98816 144.98816 0 0 1-72.8064-54.82496 135.23968 135.23968 0 0 1-54.70208-72.45824h-123.66848l-0.08192 561.41824c-0.11264 78.46912-130.9696 106.41408-164.18816 30.2592-83.18976-39.77216-64.37888-190.9248 46.31552-192.57344z" fill="#FFFFFF"></path></svg>'
      //   },
      //   link: 'https://www.douyin.com/user/MS4wLjABAAAA1KEVMgHf9_ofIzprM4P4GYZD7d34_L8Bg7OlRvmlGyE3g-qBP-QIWE-cT8rjbKo6',
      // },
    ],

    // 页脚
    footer: {
      message: `Copyright©2025-${new Date().getFullYear()} 杭州市拱墅区启杭灵卡软件开发工作室`,
      copyright: `<a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">浙ICP备2025189575号</a>`,
    },
  }
})

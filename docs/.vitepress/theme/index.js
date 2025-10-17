// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import GitHubCorner from './components/GitHubCorner.vue'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // 在 layout-top 插槽中添加 GitHub Corner
            'layout-top': () => h(GitHubCorner, {
                repoUrl: 'https://github.com/baby7/agile-tiles'
            })
        })
    },
    enhanceApp({ app, router, siteData }) {
        // 如果需要，也可以在这里注册为全局组件
        // app.component('GitHubCorner', GitHubCorner)
    }
}
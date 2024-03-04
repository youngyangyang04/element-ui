// 从 VitePress 的默认主题中导入 DefaultTheme
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
// 导入 Font Awesome 图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// 自定义样式
import '../../../src/styles/index.css'
import './index.css'
library.add(fas)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', NaiveUIContainer)
  }
}
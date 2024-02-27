import { createApp } from 'vue'
// 引入styles样式
import './styles/index.css'
import App from './App.vue'
// 引入路由，方便展示各组件
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

createApp(App).use(router)
.mount('#app')
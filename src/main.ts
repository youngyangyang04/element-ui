import { createApp } from 'vue'
// 引入styles样式
import './styles/index.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

createApp(App)
.mount('#app')
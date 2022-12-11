import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import '@/styles/button/routerbutton.scss'
import '@/styles/other/index.scss'


createApp(App).use(store).use(router).mount('#app')

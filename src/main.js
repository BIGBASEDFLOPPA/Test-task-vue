import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import '@/assets/style/component/button.scss'
import '@/assets/style/index.scss'


createApp(App).use(store).use(router).mount('#app')

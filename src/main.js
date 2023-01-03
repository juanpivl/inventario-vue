import { createApp } from 'vue'
import App from './App.vue'
//import store from './store'
import routerAuth from './modules/authentication/router'
import 'bootstrap/dist/css/bootstrap.css'




createApp(App).use(routerAuth).mount('#app')

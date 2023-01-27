import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import VueFileUpload from 'vue-file-upload'

import './assets/css/main.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

// import navbar from './components/Navbar.vue'
// import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/', name: "Home-Page", component: Home },
//         // { path: }
//     ],
//     base: '/'
// });
const app = createApp(App)
app.use(router)
app.use(store)
app.use(flatPickr)
app.use(VueFileUpload)
app.mount('#app')
app.config.globalProperties.axios = axios;
app.config.globalProperties.$url = 'http://127.0.0.1:8000/api'

// createApp(App).use(store).use(router).use(flatPickr).mount('#app')
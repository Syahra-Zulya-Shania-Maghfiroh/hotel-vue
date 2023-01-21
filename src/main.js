import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

import './assets/css/main.css'


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
// const app = createApp(App)
// app.use(router)
// app.use(store)
// app.mount('#app')
createApp(App).use(store).use(router).use(flatPickr).mount('#app')
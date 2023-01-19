import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
createApp(App).use(store).use(router).mount('#app')
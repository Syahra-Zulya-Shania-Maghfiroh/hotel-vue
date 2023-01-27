import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Room from '../views/Room.vue'
import Booking from '../views/Booking.vue'
import Manage from '../components/manage/Manage.vue'
import Type from '../components/manage/Type.vue'
import Rooms from '../components/room/Home.vue'

// import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/rooms',
        name: 'rooms',
        component: Rooms
    },
    {
        path: '/ourroom',
        name: 'roo',
        component: Room
    },
    {
        path: '/booking',
        name: 'booking',
        component: Booking
    },
    {
        path: '/manage',
        name: 'manage',
        component: Manage
    },
    {
        path: '/m-type',
        name: 'type',
        component: Type
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
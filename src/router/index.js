import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Room from '../views/Room.vue'
import Booking from '../views/Booking.vue'
import Manage from '../components/manage/Manage.vue'
import Type from '../components/manage/Type.vue'
import DRoom from '../components/manage/DRoom.vue'
import Order from '../components/manage/Order.vue'
import Rooms from '../components/room/Home.vue'
import BookNow from '../components/room/BookNow.vue'
import Receipt from '../views/Receipt.vue'

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
        name: 'room',
        component: Room
    },
    {
        path: '/booking/:type_id',
        name: 'booking',
        component: Booking
    },
    {
        path: '/receipt',
        name: 'receipt',
        component: Receipt
    },
    {
        path: '/booknow',
        name: 'booknow',
        component: BookNow
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
        path: '/detailroom/:type_id',
        name: 'droom',
        component: DRoom
    },
    {
        path: '/m-order',
        name: 'order',
        component: Order
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
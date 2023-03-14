import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Room from '../views/Room.vue'
import Booking from '../views/Booking.vue'
import Login from '../components/Login.vue'
import Type from '../components/manage/Type.vue'
import DRoom from '../components/manage/DRoom.vue'
import User from '../components/manage/User.vue'
import Order from '../components/manage/Order.vue'
import Rooms from '../components/room/Home.vue'
import BookNow from '../components/room/BookNow.vue'
import Receipt from '../views/Receipt.vue'
import FindReceipt from '../views/FindReceipt.vue'

import Unauthorized from '../components/Unauthorized.vue'
// import store from "../store/index.js";
// import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/unauthorized',
        name: 'unauthorized',
        component: Unauthorized
    },
    {
        path: '/login',
        name: 'login',
        component: Login
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
        path: '/orders/receipt/:order_number',
        name: 'receipt',
        component: Receipt,
        props: true,
    },
    {
        path: '/orders/receipt',
        name: 'findreceipt',
        component: FindReceipt
    },
    {
        path: '/booknow',
        name: 'booknow',
        component: BookNow
    },
    {
        path: '/m-type',
        name: 'type',
        component: Type,
        meta: {
            requiresAuth: true,
            allowedRoles: ['admin']
        }
    },
    {
        path: '/detailroom/:type_id',
        name: 'droom',
        component: DRoom,
    },
    {
        path: '/m-user',
        name: 'user',
        component: User,
        meta: {
            requiresAuth: true,
            allowedRoles: ['admin']
        }
    },
    {
        path: '/m-order',
        name: 'order',
        component: Order,
        meta: {
            requiresAuth: true,
            allowedRoles: ['receptionist']
        }
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
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth) {
        const userRole = localStorage.getItem("role");
        if (!userRole) {
            next({
                path: "/login"
            });
        } else {
            if (to.meta.allowedRoles.includes(userRole)) {
                next();
            } else {
                next({
                    name: "unauthorized"
                });
            }
        }
    } else {
        next();
    }
})
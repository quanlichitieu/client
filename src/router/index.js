import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/authentication/Login')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/authentication/Register')
    },
    {
        path: '/email-sent',
        name: 'emailSent',
        component: () => import('../views/authentication/EmailSent')
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: () => import('../views/authentication/ForgotPassword')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard'),
    },
    {
        path: '/report',
        name: 'Report',
        component: () => import('../views/Report')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/Settings')
    },
    {
        path: '/:notFound',
        name: 'NotFound',
        component: () => import('../views/NotFound')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

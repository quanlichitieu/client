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
        path: '/:notFound',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

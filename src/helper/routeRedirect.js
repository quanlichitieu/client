import router from '../router'
import { authRoute, protectedRoute } from '../router/specialRoute'
import { startsWith } from '../utils/startsWith'

export const routerCheck = function(to, from) {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
        if (startsWith(to.path, authRoute))
            router.push('/dashboard')
    } else {
        if (startsWith(to.path, protectedRoute))
            router.push('/login')
    }
}
import router from '../router'

export const authHandler = function(status) {
    if (status === 401 || status === 403) {
        localStorage.removeItem('accessToken')
        router.push('/login')
    }
}
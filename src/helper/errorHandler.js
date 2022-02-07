import router from '../router'
import store from '../store'

export const errorHandler = function (error) {
    if (error.response) {
        const status = error.response.status
        if (status === 401 || status === 403) {
            localStorage.removeItem('accessToken')
            router.push('/login')
        }
        if (status === 404) {
            store.dispatch("general/setAlert", {
                status: true,
                message: "404 Not Found",
            })
            return
        }
        store.dispatch("general/setAlert", {
            status: true,
            message: error.response.data.message
        })
        return
    }
    store.dispatch("general/setAlert", {
        status: true,
        message: error.message
    })
}
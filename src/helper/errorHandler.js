import router from '../router'
import store from '../store'

export const errorHandler = function(error) {
    console.log(error);
    if (error.response) {
        const status = error.response.status
        if (status === 401 || status === 403) {
            localStorage.removeItem('accessToken')
            router.push('/login')
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
export default {
    namespaced: true,
    state: () => ({
        theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
        showAlert: false,
        alertMessage: "",
    }),
    mutations: {
        setTheme(state, theme) {
            state.theme = theme
            localStorage.setItem('theme', theme)
            location.reload()
        },
        setShowAlert(state, status) {
            state.showAlert = status
        },
        setAlertMessage(state, message) {
            state.alertMessage = message
        }
    },
    actions: {
        setTheme(state, theme) {
            console.log('setting theme to:', theme)
            state.commit('setTheme', theme)
        },
        setAlert(state, payload) {
            const { status, message } = payload
            if (status) {
                state.commit('setShowAlert', true)
                state.commit('setAlertMessage', message)
            } else {
                state.commit('setShowAlert', false)
                state.commit('setAlertMessage', "")
            }
        }
    },
    getter: {
    },
    modules: {
    }
}
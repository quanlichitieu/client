export default {
    namespaced: true,
    state: () => ({
        theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
    }),
    mutations: {
        setTheme(state, theme) {
            state.theme = theme
            localStorage.setItem('theme', theme)
        },
    },
    actions: {
        setTheme(state, theme) {
            console.log('setting theme to:', theme)
            state.commit('setTheme', theme)
        },
    },
    getter: {
    },
    modules: {
    }
}
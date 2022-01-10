export default {
    namespaced: true,
    state: () => ({
        theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
        language: localStorage.getItem('language') === 'vn' ? 'vn' : 'en'
    }),
    mutations: {
        setTheme(state, theme) {
            state.theme = theme
            localStorage.setItem('theme', theme)
        },
        setLanguage(state, language) {
            state.language = language
            localStorage.setItem('language', language)
        }
    },
    actions: {
        setTheme(state, theme) {
            console.log('setting theme to:', theme)
            state.commit('setTheme', theme)
        },
        setLanguage(state, language) {
            console.log('setting language to:', language)
            state.commit('setLanguage', language)
        }
    },
    getter: {
    },
    modules: {
    }
}
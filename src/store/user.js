export default {
    namespaced: true,
    state: () => ({
        user: {
            userName: '',
            email: '',
            totalBalance: 0,
            currencyUnit: '',
            createdAt: '',
            updatedAt: '',
        }
    }),
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        setUserName(state, userName) {
            state.commit('setUser', {
                ...state.user,
                userName,
            })
        },
        setEmail(state, email) {
            state.commit('setUser', {
                ...state.user,
                email,
            })
        },
        setTotalBalance(state, totalBalance) {
            state.commit('setUser', {
                ...state.user,
                totalBalance,
            })
        },
        setCurrencyUnit(state, currencyUnit) {
            state.commit('setUser', {
                ...state.user,
                currencyUnit,
            })
        },
        setUser(state, user) {
            state.commit('setUser', user);
        },
    },
    getters: {
    },
    modules: {
    },
}
export default {
    namespaced: true,
    state: () => ({
        userName: '',
        email: '',
        totalBalance: 0,
        currencyUnit: '',
    }),
    mutations: {
        setUserName(state, userName) {
            state.userName = userName
        },
        setEmail(state, email) {
            state.email = email
        },
        setTotalBalance(state, totalBalance) {
            state.totalBalance = totalBalance
        },
        setCurrencyUnit(state, currencyUnit) {
            state.currencyUnit = currencyUnit
        },
    },
    actions: {
        setUserName(state, userName) {
            state.commit('setUserName', userName)
        },
        setEmail(state, email) {
            state.commit('setEmail', email)
        },
        setTotalBalance(state, totalBalance) {
            state.commit('setTotalBalance', totalBalance)
        },
        setCurrencyUnit(state, currencyUnit) {
            state.commit('setCurrencyUnit', currencyUnit)
        },
    },
    getters: {
    },
    modules: {
    },
}
import { date } from '../utils/date'

export default {
    namespaced: true,
    state: () => ({
        walletList: [],
        currentWalletID: '',
        currentYear: date.getFullYear(),
        currentMonth: date.getMonth() + 1,
    }),
    mutations: {
        setWalletList(state, list) {
            state.walletList = list
        },
        setCurrentWalletID(state, id) {
            state.currentWalletID = id
        },
    },
    actions: {
        setWalletList(state, walletList) {
            state.commit('setWalletList', walletList)
            const currentWalletID = localStorage.getItem('currentWalletID')
            if (!currentWalletID) {
                localStorage.setItem('currentWalletID', walletList[0].walletID)
                state.commit('setCurrentWalletID', walletList[0].walletID)
                return
            }
            if (!walletList.map(wallet => wallet.walletID).includes(currentWalletID)) {
                localStorage.setItem('currentWalletID', walletList[0].walletID)
                state.commit('setCurrentWalletID', walletList[0].walletID)
                return
            }
            state.commit('setCurrentWalletID', currentWalletID)
        },
    },
    getters: {
        getCurrentWallet(state) {
            if (state.walletList.length === 0)
                return null
            return state.walletList.filter(wallet => wallet.walletID === state.currentWalletID)[0]
        },
        getTotalBalance(state) { //exclude wallet not count to total
            let total = 0
            state.walletList.map((wallet) => {
                if (wallet.totalInclude)
                    total += wallet.walletBalance
            })
            return total
        }
    },
    modules: {
    },
}
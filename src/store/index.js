import { createStore } from 'vuex'

import general from './general'
import user from './user'
import wallet from './wallet'

export default createStore({
    namespaced: true,
    modules: {
        general,
        user,
        wallet,
    }
})

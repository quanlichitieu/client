import { createStore } from 'vuex'

import general from './general'
import user from './user'

export default createStore({
    modules: {
        general,
        user,
    }
})

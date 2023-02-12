import { createStore } from 'vuex'

// Store 
const store = createStore({
    state(){
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

app.use(store)

store.commit('increment')

console.log(store.state.count) // -> 1

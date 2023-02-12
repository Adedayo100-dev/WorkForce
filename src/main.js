import { createApp } from 'vue'
import { createStore } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

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




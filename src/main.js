import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

import './assets/styles.css'


// Store 
const store = createStore({
    state(){
        return {
            toggleModal: false,
        }
    },
    mutations: {
        openModal (state, modalType){
            state.toggleModal = true;
        },
        closeModal (state){
            state.toggleModal = false;
        }
    }
})


console.log(store.state.toggleModal)

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')


import { createApp } from 'vue'
import { createStore } from 'vuex'
import { formatNum } from './mixins/toLocaleString.js'


import App from './App.vue'
import router from './router'

import './assets/styles.css'


// Store 
const store = createStore({
    state(){
        return {
            toggleModal: false,
            whichModal: 'null', //Change to null
            whichSubmitType: null,
        }
    },
    mutations: {
        openModal (state, modalType){
            state.toggleModal = true;
            state.whichModal = modalType;
            switch (state.whichModal) {
                case "DialogBox":
                    state.whichSubmitType = "DialogSubmit";
                    break;
                    
                case "NewShift":
                    state.whichSubmitType = null;
                    break;
                    
                case "NewTransaction":
                    state.whichSubmitType = null;
                    break;
                    
                case "NewEmployer":
                    state.whichSubmitType = null;
                    break;

                default:
                    state.whichSubmitType = "DialogSubmit";
                    break;
            }
            
            console.log(state.whichModal, typeof state.whichModal, "mutated");
        },
        closeModal (state){
            state.toggleModal = false;
        }
    }
})


// console.log(store.state.toggleModal, store.state.whichModal);



const app = createApp(App)

app.config.globalProperties.$formatNum = formatNum;
app.use(router)
app.use(store)

app.mount('#app')


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
            modal: {
                toggleModal: false,
                whichModal: null, //Change to null
                whichSubmitType: null, //Change to null
                position: ''
            }
        }
    },
    mutations: {
        openModal (state, modalType){
            state.modal.toggleModal = true;
            state.modal.whichModal = modalType;
            switch (state.modal.whichModal) {
                case "DialogBox":
                    state.modal.whichSubmitType = "DialogSubmit";
                    state.modal.position = 'center-modal'
                    break;
                    
                case "NewShift":
                    state.modal.whichSubmitType = null;
                    state.modal.position = 'center-modal'
                    break;
                    
                case "NewTransaction":
                    state.modal.whichSubmitType = null;
                    state.modal.position = 'center-modal'
                    break;
                    
                case "NewEmployer":
                    state.modal.whichSubmitType = null;
                    state.modal.position = 'center-modal'
                    break;

                case "NewFilter":
                    state.modal.whichSubmitType = null;
                    state.modal.position = 'right-modal'
                    break;

                default:
                    state.modal.whichSubmitType = null;
                    state.modal.position = ''
                    break;
            }
            
            console.log(state, typeof state.modal.whichModal, "mutated");
        },
        closeModal (state){
            state.modal.toggleModal = false;
        }
    }
})


// console.log(store.state.modal.toggleModal, store.state.modal.whichModal);



const app = createApp(App)

app.config.globalProperties.$formatNum = formatNum;
app.use(router)
app.use(store)

app.mount('#app')


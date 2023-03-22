<template>
    <transition  name="modal">
        <div class="modal-overlay" :class="{show: toggleModal}">
            <div class="modal-static-container">
                <div class="modal-dynamic-content">
                    <component :is='currentModal'></component>
                    <div class="confirm-button-container">
                        <component :is='modalSubmitType'></component> 
                    </div>
                    <!-- Content goes in here -->
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import NewShift from '../components/NewShift.vue'
import DialogBox from '../components/DialogBox.vue'
import WorkDetails from '../components/WorkDetails.vue'
import FormSubmit from '../components/FormSubmit.vue'
import DialogSubmit from '../components/DialogSubmit.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'modal',
    components: {
        NewShift,
        DialogBox,
        WorkDetails,
        FormSubmit, // defineAsyncComponent(() => import('../components/FormSubmit.vue')),
        DialogSubmit // defineAsyncComponent( () => import('../components/DialogSubmit.vue')),
        // DialogSubmit
    },
    props: ['modalOptions'],
    data() {
        return {
            modalSubmitType: FormSubmit,
        }
    },
    computed: mapState({
            currentModal: state => state.whichModal,
    }),
    emits: ['close'],
    // created(){
    //     console.log(this.$store.state.whichModal, "created");
    // },
    // updated() {
    //     console.log("updated modal to", this.currentModal);
    // },
}
</script>

<style>
    .modal-overlay.show{
        /* display: flex; */
    }
    .modal-overlay{
        position: fixed;
        top: 0;
        left: 0;
        /* background-color: rgba(0, 0, 0, 0.452); */
        background-color: rgba(32, 33, 36, 0.6);
        width: 100%;
        z-index: 100;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 500px;
    }
    .modal-overlay h3{
        margin-top: 0;
        margin-bottom: 28px;
    }
    .modal-static-container{
        background: white;
        padding: 24px 24px;
        border-radius: 6px;
        box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%);
        font-size: 14px;
    }
    .modal_add-shift{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .confirm-button-container{
        display: flex;
        justify-content: end;
        column-gap: 12px;
        margin-top: 24px;
    }
    .confirm-button-container button{
        border: none;
        /* border-radius: 4px; */
        padding: 10px 40px;
    }
    /* .green-confirm-button{
        background-color: #0a793b;
        color: white;
    }
    .green-confirm-button a{
        color: white;
    } */

    /* Modal Transition */
    .modal-enter-from {
        opacity: 0;
    }

    .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-from .modal-container,
    .modal-leave-to .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
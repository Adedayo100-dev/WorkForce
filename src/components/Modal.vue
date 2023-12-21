<template>
    <div class="modal-fixed-overlay" :class="{show: toggleModal}">
        <div class="modal-relative-overlay">
            <Transition name="modal">
                <div class="dark-bg" @click="closeModal('close')"></div>
            </Transition>
            <div class="modal-appearance" :class="modalPosition">
                <div class="modal-static-container">
                    <div class="modal-dynamic-content">
                        <component :is='currentModal'></component>
                        <div class="confirm-button-container">
                            <component :is='modalSubmitType'></component> 
                        </div>
                        <!-- Content goes in here -->

                        <!-- #dae0e4  color for input
                            #1274c4 color for blue pay button
                        -->

                    </div>
                </div>
            </div>
        </div>  
    </div>   
</template>

<script>
import NewShift from '../components/NewShift.vue'
import NewTransaction from '../components/NewTransaction.vue'
import NewEmployer from '../components/NewEmployer.vue'
import NewFilter from '../components/FilterComponent.vue'
import NewSchedule from '../components/NewSchedule.vue'
import UndoCountDown from '../components/UndoCountDown.vue'
import DialogBox from '../components/DialogBox.vue'
import WorkDetails from '../components/WorkDetails.vue'
import DialogSubmit from '../components/DialogSubmit.vue'
import { mapState } from 'pinia'
import { useModalStore } from '@/stores/modalStore'

export default {
    name: 'modal',
    components: {
        NewShift,
        NewTransaction,
        NewEmployer,
        NewFilter,
        NewSchedule,
        UndoCountDown,
        DialogBox,
        WorkDetails,
        DialogSubmit
    },
    props: ['modalOptions'],
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState( useModalStore, {
            currentModal: store => store.modal.whichModal, // NewShift, newTransaction  or DialogBox
            modalSubmitType: store => store.modal.whichSubmitType, // FormSubmit or DialogSubmit
            modalPosition: store => store.modal.classNames, // center-Modal / right-modal
        })
    },
    emits: ['close'],
    methods: {
        closeModal: function(event) {
            useModalStore().closeModal()

            // console.log(event, this.modalType);
        },
    },
    // updated() {
    //     console.log("updated modal to", this.currentModal);
    // },
}
</script>

<style>
    /* .modal-overlay.show{
        display: flex;
    } */
    .modal-fixed-overlay{
        position: fixed;
        inset: 0;
        z-index: 100;        
        transition: all .4s;
        display: flex;
    }
    .modal-relative-overlay{
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .dark-bg{
        /* background-color: rgba(0, 0, 0, 0.452); */
        background-color: rgba(32, 33, 36, 0.3);
        height: 100vh;
        width: 100%;

    }
    .modal-appearance{
        position: absolute;
        /* top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); */
        display: flex;

    }
    .center-modal{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* justify-content: center;
        align-items: center; */
    }
    .bottom-modal{
        justify-content: center;
        align-items: end;
    }
    .right-modal{
        top: 50%;
        right: 20px;
        transform: translate(0%, -50%);
        /* justify-content: end; */
    }
    .left-modal{
        justify-content: flex-start;
        align-items: end;
    }
    .left-modal .modal-static-container{
        margin: 0 0 24px 49px;
        padding: 4px 12px;
    }
    .light-outer-bg{
        background-color: transparent;
    }
    .dark-inner-bg .modal-static-container{
        background-color: rgba(0, 0, 0, 0.5);
    }
    .bottom-modal .modal-static-container{
        width: 100%;
        border-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .right-modal .modal-static-container{
        /* width: 100%; */
        border: none !important;
        border-radius: 8px;
    }
    .modal-overlay h3{
        margin-top: 0;
        margin-bottom: 28px;
    }
    .modal-static-container{
        background: white;
        padding: 24px 24px;
        border-radius: 6px;
        /* box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%); */
        box-shadow: 0 36px 15px 0 rgb(0 0 0 / 24%);
        font-size: 14px;
        transition: all .3s ease-in-out;
    }
    .modal-dynamic-content{
        height: 100%;
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
    .modal-enter-to {
        opacity: 1;
    }
    .modal-leave-to {
        opacity: 0;
    }
    .modal-enter-from .modal-static-container {
        /* -webkit-transform: scale(1.1); */
        /* transition: all .3s ease-in-out; */
        -webkit-transition-delay: 4.25s;
        transition-delay: 4.25s;
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
        /* transform: scale(1.1); */
    }
    .modal-enter-to .modal-static-container {
        /* -webkit-transform: scale(1.1); */
        transform: translateY(0);
        -webkit-transform: translateY(0);
        /* transform: scale(1.1); */
    }
    .form-group{
        display: grid;
        grid-template-columns: 2fr 10fr;
        gap: 12px;
        margin-bottom: 10px;
    }
    .form-center{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 10px;
    }
    .form-center button{
        border: none;
        padding: 12px 14px;
        border-radius: 4px;
    }
    label{
        font-size: 13px;
        color: darkgray;
    }
</style>
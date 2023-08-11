<template>  
    <div class="undo-countdown">
        <button @click="initiateUndo()" class=""><b>Undo</b></button>
        <span>{{ countdown }}</span>
        <div @click="closeModal('close', 'Modal cancelled')">X</div>
    </div>
</template>

<script>
import { useModalStore } from '../stores/modalStore'

export default {
    data() {
        return {
            countdown: 10, // Initial countdown value
            timer: null // Placeholder for the setInterval timer
        };
    },
    created() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            this.timer = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--;
                } else {
                    this.stopCountdown();
                }
            }, 1000);
        },
        stopCountdown() {
            clearInterval(this.timer);
        },
        initiateUndo() {

        },
        closeModal: function(event) {
            useModalStore().closeModal();
            console.log('Undo tried closing');
        },
    }
}
</script>

<style scoped>
    .undo-countdown *{
        color: white !important;
    }
    button{
        background-color: transparent;
        border: none;
        padding-right: 10px;
        margin: 10px 0;
    }
</style>
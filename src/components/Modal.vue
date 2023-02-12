<template>
    <transition  name="modal">
        <div class="modal-overlay" :class="{show: toggleModal}">
            <div class="modal-static-container">
                <div class="modal-dynamic-content">
                    <!-- <component :is=''></component> -->
                    <div class="confirm-dialog-box">
                        <h3>Confirm</h3>
                        <p>Are you sure you wanna proceed?</p>
                        <div class="confirm-button-container">
                            <button @click="$emit('close', 'Modal cancelled')">No</button>
                            <button>
                                <router-link to="/signedout">Yes</router-link>
                            </button>
                        </div>
                    </div>
                    <!-- Content goes in here -->
                </div>
            </div>
        </div>
    </transition>
    
</template>

<script>
export default {
    name: 'modal',
    emits: ['close']
}
</script>

<style scoped>
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
    }
    .modal-static-container{
        background: white;
        padding: 18px 24px;
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
        column-gap: 8px;
    }
    .confirm-button-container button{
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
    }

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
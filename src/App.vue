<script>
    import { RouterLink, RouterView } from 'vue-router';
    import { useModalStore } from './stores/modalStore'
    import { mapState } from 'pinia'
    import { defineAsyncComponent } from 'vue'   
    
    export default {
        name: 'App',
        components: {
            Modal: defineAsyncComponent(() => import('./components/Modal.vue')),
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState(useModalStore, {
                modalState: store => store.modal.toggleModal,
                modalType: store => store.modal.whichModal,
            })
        },
        methods: {
            closeModal: function(event) {
                useModalStore().closeModal(modalType)
            },
            // openModal(modalType) {
            //     useModalStore().openModal(modalType)
            //     console.log("App.vue:", modalData);
            // }
        },
    }
</script>

<template>
    <RouterView />
    <Modal v-show="modalState" @close="closeModal"/>
</template>
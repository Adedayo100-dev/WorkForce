<script>
    import { RouterLink, RouterView } from 'vue-router';
    import { useModalStore } from './stores/modalStore'
    import { mapState } from 'pinia'
    import { defineAsyncComponent } from 'vue'
    import SideNav from './components/SideNav.vue';
    import TopNavBar from './components/TopNavBar.vue';
    
    export default {
        name: 'App',
        components: {
            SideNav,
            TopNavBar,
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
                // this.$store.commit('closeModal')
                // console.log(event, this.modalType);
            },
            openModal(modalType) {
                useModalStore().openModal(modalType)
            }
            // openModal: function(modalType) {
            //     this.$store.commit('openModal', modalType)
            //     console.log(modalType," opened");
            //     console.log("this works!")
            // }
        },
        // created(){
        //     console.log(this.$store.state.modal.whichModal, 'created')
        // },
        // updated() {
        //     console.log('updated to', this.$store.state.modal.whichModal)
        // },
    }
</script>

<template>
    <div class="visible-layout">
        <TopNavBar />
        <div class="layout-chasis">
            <SideNav />
            <main>
                <!-- <p>
                {{ modalState }}
                </p> -->
                <RouterView />
            </main>
        </div>
    </div>
    <Modal v-show="modalState" @close="closeModal"/>
</template>
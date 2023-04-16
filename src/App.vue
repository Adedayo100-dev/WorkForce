<script>
    import { RouterLink, RouterView } from 'vue-router';
    import { mapState } from 'vuex'
    import { defineAsyncComponent } from 'vue'
    import SideNav from './components/SideNav.vue';
    import TopNavBar from './components/TopNavBar.vue';
    
    export default {
        name: 'App',
        components: {
            Modal: defineAsyncComponent(() => import('./components/Modal.vue')),
            SideNav,
            TopNavBar
        },
        data() {
            return {
                
            }
        },
        computed: mapState({
            modalState: 'toggleModal',
            modalType: state => state.whichModal,
        }),
        methods: {
            closeModal: function(event) {
                this.$store.commit('closeModal')
                console.log(event, this.modalType);
            },
            // openModal: function(modalType) {
            //     this.$store.commit('openModal', modalType)
            //     console.log(modalType," opened");
            //     console.log("this works!")
            // }
        },
        // created(){
        //     console.log(this.$store.state.whichModal, 'created')
        // },
        // updated() {
        //     console.log('updated to', this.$store.state.whichModal)
        // },
    }
</script>

<template>
    <div class="visible-layout">
        <TopNavBar />
        <div class="layout-chasis">
            <SideNav />
            <main>
                <RouterView />
            </main>
        </div>
    </div>
    <Modal v-show="modalState" @close="closeModal"/>
</template>
<script>
    import { RouterLink, RouterView } from 'vue-router';
    import { mapState } from 'vuex'
    import Modal from './components/Modal.vue';
    import SideNav from './components/SideNav.vue';
    import TopNavBar from './components/TopNavBar.vue';
    
    export default {
        name: 'App',
        components: {
            Modal, SideNav, TopNavBar
        },
        data() {
            return {
                
            }
        },
        computed: mapState({
            modalState: 'toggleModal',
            // modalType: 
        }),
        methods: {
            closeModal: function(event) {
                this.$store.commit('closeModal')
                console.log(event);
            },
            // openModal: function(modalType) {
            //     this.$store.commit('openModal', modalType)
            //     console.log(modalType," opened");
            //     console.log("this works!")
            // }
        }
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
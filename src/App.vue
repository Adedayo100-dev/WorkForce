<script>
    import { RouterLink, RouterView } from 'vue-router';
    import Modal from './components/Modal.vue';
    import SideNav from './components/SideNav.vue';
    import TopNavBar from './components/TopNavBar.vue';
    // import EventBus
    import {EventBus} from './EventBus.js'

    export default {
        name: 'App',
        components: {
            Modal, SideNav, TopNavBar
        },
        data() {
            return {
                toggleModal: true,
            }
        },
        created() {
            EventBus.on('openModal', openModal());
        },
        methods: {
            closeModal: function(event) {
                this.toggleModal = false;
                console.log(event);
            },
            openModal: function(modalType) {
                this.toggleModal = true;
                console.log(modalType," opened");
            }
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
    <Modal v-show="toggleModal" @close="closeModal"/>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Modal from './components/Modal.vue';
import SideNav from './components/SideNav.vue';
import TopNavBar from './components/TopNavBar.vue'


// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <TopNavBar />
  <div class="layout-chasis">
    <SideNav />
    <main>
      <RouterView />
    </main>
  </div>
  
  <Modal />
</template>
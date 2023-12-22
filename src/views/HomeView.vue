<script>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div>
    <h3>Home</h3>
    <!-- <TheWelcome /> -->
    <p>Begin to get things done</p>
    <router-link to="/auth/login" class="subscribe-button">Join Workforce Today!</router-link>
  </div>
</template>

<style>
.subscribe-button{
  border:none;
  padding: 14px 20px;
  border-radius: calc(43.33px / 2);
  background-color: rgba(232, 57, 0, 1);
  display: inline-block;
  color: white;
  /* font-size: 13.33px; */
}
</style>

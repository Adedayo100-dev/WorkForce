<template>
  <div class="notifications-box">
    <h3>Notifications</h3>
    <!-- <div v-for="notes in notifications" :key="notes.id">

    </div> -->
    <div class="notification-item">
      <h4>Check Messages</h4>
      <p>This is a notification</p>
    </div>
    <div class="notification-item">
      <h4>Check Messages</h4>
      <p>This is a notification</p>
    </div>
    <div class="notification-item">
      <h4>Check Messages</h4>
      <p>This is a notification</p>
    </div>
    <div class="notification-item">
      <h4>Check Messages</h4>
      <p>This is a notification</p>
    </div>
    <div class="notification-item">
      <h4>Check Messages</h4>
      <p>This is a notification</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.notification-item{
  background-color: #f7f7f7;
  padding: 0 24px;
  border: 1px solid #8C8F1C;
  border-left-width: 24px;
  /* border-radius: 8px; */
  font-size: 14px;
  color: #757575;
}
.notification-item h4{
  margin-bottom: 0;
}
.notification-item p{
  margin-bottom: 1.33em;
}
</style>
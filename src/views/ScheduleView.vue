<script>
import ScheduleItem from '../components/ScheduleItem.vue'
export default {
  components: {
    ScheduleItem
  },
  data() {
    return {
      schedule: [
        {title: "CEC Personnel", body: "I need to hear back from CEC personnel about my application that was forwarded to UPS Burligton", date: "Today"},
        {title: "Pay Phone bill- $122.67", body: "Pay the phone bill for Fido", date: "Apr 19"},
        {title: "Get TELEX after paying with form-A", body: "Pay the phone bill for Fido", date: "Jun 1"},
        {title: "Check Message", body: "This is a Notification", date: "Undefined"}
      ]
    }
  },
}
</script>

<template>
  <div class="notifications-box">
    <h3>{{$route.meta.title}}</h3>
    <!-- <div v-for="notes in notifications" :key="notes.id">

    </div> -->
    <div>
      <ScheduleItem v-for="(notification, index) in schedule" :key="notification.id" :title="notification.title" :body="notification.body" :date="notification.date" :idx="index"/>
    </div>

  </div>
</template>

<style>
.notification-item{
  padding: 1.33em;
  padding-right: 0;
  border: 0.5px solid rgb(196, 199, 204);
  border-left-width: 12px;
  border-radius: 8px;
  font-size: 14px;
  /* color: #757575; */
  margin-bottom: 9.31px;
}
.notification-item:hover{
  background-color: #f3f8ff;
}
.notification-item button{
  border: none;
  padding: 1px 8px;
  border-radius: 4px;
  background-color: #f4f4f6;
  color: grey;
}
.notification-item h4{
  margin: 0;
  /* letter-spacing: 1px; */
}
.notification-body{
  margin-right: 1.33em;
}
.notification-date{
  display: block;
  text-align: end;
  padding: 4px 1.33em 0 0;
  font-size: 12px;
  color:  grey;
}
.notification-options svg{
  width: 20px;
  height: 20px;
  pointer-events: none;
  display: block;
  fill: grey;
  margin: 0 10px;
}
</style>
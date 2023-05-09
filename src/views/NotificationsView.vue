<script>
import NotificationItem from '../components/NotificationItem.vue'
export default {
  components: {
    NotificationItem
  },
  data() {
    return {
      notifications: [
        {title: "Cancel Netflix", body: "I need to remove my billing information from there and monitor the bills on my credit card while saving up", date: "undefined"},
        {title: "Check Message", body: "This is a Notification", date: "undefined"},
        {title: "Pay Phone bill- $122.67", body: "Pay the phone bill for Fido", date: "Apr 19"},
        {title: "Get TELEX after paying with form-A", body: "Pay the phone bill for Fido", date: "Apr 19"}
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
      <NotificationItem v-for="(notification, index) in notifications" :key="notification.id" :title="notification.title" :body="notification.body" :date="notification.date" :idx="index"/>
    </div>

  </div>
</template>

<style>
.notification-item{
  padding: 1.33em;
  padding-right: 0;
  border: 1px solid #00419e;
  border-left-width: 12px;
  border-radius: 4px;
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
}
.notification-item h4{
  margin: 0;
  letter-spacing: 1px;
}
.notification-body{
  margin-right: 1.33em;
}
.notification-date{
  display: block;
  text-align: end;
  padding: 4px 1.33em 0 0;
  font-size: 12px;
}
</style>
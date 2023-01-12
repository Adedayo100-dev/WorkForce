<script>
import NotificationItem from '../components/NotificationItem.vue'
export default {
  components: {
    NotificationItem
  },
  data() {
    return {
      notifications: [
        {title: "Tax Filing", body: "File for taxes with my T4 from StaffPlus and Linxus Group. Loremipsum dolor sit amet rgr ged. File for taxes with my T4 from StaffPlus and Linxus Group. Loremipsum dolor sit amet rgr ged.File for taxes with my T4 from StaffPlus and Linxus Group. Loremipsum dolor sit amet rgr ged. File for taxes with my T4 from StaffPlus and Linxus Group. Loremipsum dolor sit amet rgr ged.", date: "01 Feb"},
        {title: "Coop Application", body: "Begin application for Coop", date: "27 Jan"},
        {title: "Cancel Netflix", body: "I need to remove my billing information from there and monitor the bills on my credit card while saving up", date: "undefined"},
        {title: "Check Message", body: "This is a Notification", date: "undefined"}
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
  border: 1px solid #ffc517;
  border-left-width: 12px;
  /* border-radius: 8px; */
  font-size: 14px;
  /* color: #757575; */
  margin-bottom: 9.31px;
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
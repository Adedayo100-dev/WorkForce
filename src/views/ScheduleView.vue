<script>
import ScheduleItem from '../components/ScheduleItem.vue'
import SubNavTab from '../components/SubNavTab.vue';

export default {
  components: {
    ScheduleItem, SubNavTab
  },
  data() {
    return {
      schedule: [
        {title: "Time-table Registration", body: "Begin registration for all courses", date: "Sep 1"},
        {title: "Pay Phone bill- $66.67", body: "Pay the phone bill for Fido", date: "Sep 1"},
        {title: "New Passport", body: "Go to Ottawa to get a new passport", date: "Sep 20"},
        {title: "Check What taxes I didn't file in 2022", body: "I noticed there is a limited number of pay stub in Linxus Group paystub folder.", date: "Undefined"},
        {title: "Apply for SmartServe Certificate", body: "Apply for SmartServe Certification to apply for jobs in Service assistance areas like Retirement Homes.", date: "Undefined"}
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
    <SubNavTab>
        <li>
          <router-link to="/schedule/new">New</router-link>
        </li>
        <li>
          <router-link to="/schedule/acknowledged">Acknowledged</router-link>
        </li>
        <li>
          <router-link to="/schedule/completed">Completed</router-link>
        </li>
        <!-- <li>
          <router-link to="/schedule/bought-items">Bought Items</router-link>
        </li>
        <li>
          <router-link to="/schedule/vault">Vault</router-link>
        </li> -->
      </SubNavTab>
      <br>
    <div class="margin-x">
      <ScheduleItem v-for="(notification, index) in schedule" :key="notification.id" :title="notification.title" :body="notification.body" :date="notification.date" :idx="index"/>
    </div>

  </div>
</template>

<style>
.notification-item{
  padding: 1.33em;
  padding-right: 0;
  border: 0.5px solid var(--light-grey-color);
  border-left-width: 12px;
  /* border-radius: 8px; */
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
  margin-bottom: 0;
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
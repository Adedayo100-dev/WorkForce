<template>
    <div class="tab-pane " id="tab-availability">
        <div class="add-shift_button-box justify-end">
            <AddButton @click="openModal('NewSchedule')">
                <span>  New Schedule</span>
            </AddButton>
        </div>
        <div class="margin-x" id="availability">
            
            <div class="monthly-availability">
                <div class="calendar-control">
                    <select name="years" id="">
                        <option value="2022">2022</option>
                        <option value="2023" selected>2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                    <select name="months" id="">
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul" selected>Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                    </select>
                </div>
                <table >
                    <thead>
                        <tr>
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="week in schedule" :key="week._id">
                            <template v-for="cee in Object.values(week)" :key="cee._id">
                                <td v-for="day in cee" :key="day._id" :class="[day.dayType, this.today.date == day.dayNum && this.today.month+1 == day.dayMonth.num ? 'present-day' : '']">
                                    <div class="day-number-box">
                                        <span :title="day.dayMonth.name + ' ' + day.dayNum + ' ,'+ day.dayYear">{{ day.dayNum }}</span>
                                    </div>
                                    <template v-for="event in day.events" :key="event._id">
                                        <div class="has-shift" :class="event.type" @click="say(event.short_Desc)">
                                            <span class="company-name" title="Seasons Retirement Community">{{ event.short_Desc }}</span>
                                            <!-- <span class="has-time">{{ event.time }}</span> -->
                                        </div>
                                        <span class="has-time">{{ event.time }}</span>
                                    </template>
                                    
                                    <!-- {{ day }} -->
                                    <!-- {{ JSON.stringify(day, null, 2) }} -->
                                    <!-- {{ Object.values(day) }} -->
                                </td>
                            </template>
                            
                        </tr>
        
                        <tr>
                            <td colspan="5">invalid</td>
                            <td class="work-active" colspan="2">active</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Color Code:</h4>

            <div>Active</div>

            <h4 class="">Availability</h4>

            <table>
                <tr>
                    <td>Monday</td>
                    <td>from 4 pm for 12hrs</td>
                </tr>
                <tr>
                    <td><b>Tuesday</b></td>
                    <td>night</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>from 3 pm for 8hrs</td>
                </tr>
                <tr>
                    <td><b>Thursday</b></td>
                    <td>All day</td>
                </tr>
                <tr>
                    <td><b>Friday</b></td>
                    <td>from 4 pm and <b>night</b></td>
                </tr>
                <tr>
                    <td><b>Saturday</b></td>
                    <td>day and <b>night</b></td>
                </tr>
                <tr>
                    <td><b>Sunday</b></td>
                    <td>day and <b>night</b></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AddButton from '../../components/AddButton.vue'
import { useModalStore } from '../../stores/modalStore'

export default {

    components:{
        AddButton
    },
    data() {
        return {
            schedule: [],
            today: {
                year : new Date().getFullYear(),
                month : new Date().getMonth(),
                day: new Date().getDay(),
                date: new Date().getDate(),
            },
        }
    },
    watch: {
        
    },
    methods: {
        fetchSchedule() {
            axios.get('http://localhost:3000/api/schedule')
            .then((res) => {
                this.schedule = res.data;
                console.log(res.data);        
            })
            .catch((err) => {
                console.error(err.message)
                this.errorMsg = 'error retrieving data';
            });
        },
        openModal(modalType) {
            useModalStore().openModal(modalType)
        },
        say(message){
            // alert(message)
            this.openModal()
        }  
    },
    created() {
        this.fetchSchedule();
        console.log(this.today);
    },
}
</script>

<style scoped>
.monthly-availability td{
    text-align: center;
    border-left: 1px solid rgb(238, 238, 238);
}
.monthly-availability td:first-of-type{
    border-left: none;
}
.calendar-control{
    display: flex;
    padding: 5px 10px;
    gap: 10px;
    justify-content: end;
}
.calendar-control select{
    border: none;
    background-color: transparent;
}
tbody tr{
    vertical-align: top;
}
tbody tr:last-of-type {
    border-bottom: none;
}
.work-active{
    background-color: rgba(0, 128, 0, 0.25);
}
.has-shift{
    background-color: #f4f4f6;
    border-left: 5px solid rgb(219 216 216);
    padding: 10px 10px;
    margin-top: 13px;
}
.company-name{
    padding: 3px 0;
    /* padding-bottom: 7.5px; */
    display: block;
}
.has-time{
    line-height: 1;
    display: block;
    padding-top: 7.5px;
    /* border-top: 1px solid rgb(238, 238, 238); */
}
.day-number-box{
    /* padding-bottom: 13px; */
    display: flex;
    justify-content: end;
}
.next-month .day-number-box span, .prev-month .day-number-box span{
    color: rgb(238, 238, 238) !important;
}
.is-work{
    border-left: 5px solid rgba(0, 191.25, 0, 0.25) !important;
}
.is-appointment{
    border-left: 5px solid rgba(191.25, 191.25, 0, 0.5) !important;
}
.present-day{
    /* background-color: rgba(255, 0, 1 0, 0.5); */
    position: relative;
}
.present-day::before {
    content:'';
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    right: 0;
    border-right: solid 15px green;
    border-bottom: solid 15px transparent;
    border-top: solid 0px transparent;
}
.sick-day{
    border-left: none !important;
    background-image: repeating-linear-gradient(135deg,orangered,orangered 7px,white 7px,white 14px,orangered 14px,orangered 21px,white 21px,white 28px) !important;
}
.sick-day .company-name{
    background-color: white !important;
}
</style>
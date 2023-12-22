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
                    <form action="finance/availability">
                        <select name="years" id="" v-model="yearMonthSelection.year">
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                        <select name="months" id="" v-model="yearMonthSelection.month">
                            <option value="0">Jan</option>
                            <option value="1">Feb</option>
                            <option value="2">Mar</option>
                            <option value="3">Apr</option>
                            <option value="4">May</option>
                            <option value="5">Jun</option>
                            <option value="6" selected>Jul</option>
                            <option value="7">Aug</option>
                            <option value="8">Sep</option>
                            <option value="9">Oct</option>
                            <option value="10">Nov</option>
                            <option value="11">Dec</option>
                        </select>
                    </form>
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
                            <!-- <template v-for="cee in week" :key="cee._id"> -->
                                <td v-for="day in week" :key="day._id" :class="[day.dayType, this.today.date == day.dayNum && this.today.month == day.dayMonth.num ? 'present-day' : '']">
                                    <div class="day-number-box">
                                        <span :title="day.dayMonth.short_name + ' ' + day.dayNum + ' ,'+ day.dayYear">{{ day.dayNum }}</span>
                                    </div>
                                    <template v-for="event in day.events" :key="event._id">
                                        <div class="has-shift" :class="event.type" @click="say(event.short_Desc)">
                                            <span class="company-name" title="Seasons Retirement Community">{{ event.short_Desc }}</span>
                                            <span class="has-time">{{ event.time }}</span>
                                        </div>
                                        <span class="has-time">{{ event.time }}</span>
                                    </template>
                                    
                                    <!-- {{ day }} -->
                                    <!-- {{ JSON.stringify(day, null, 2) }} -->
                                    <!-- {{ Object.values(day) }} -->
                                </td>
                            <!-- </template>   -->

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
import AddButton from '../../../components/AddButton.vue'
import { useModalStore } from '../../../stores/modalStore'

export default {
    components:{
        AddButton
    },
    data() {
        return {
            schedule: [],
            yearMonthSelection: {
                year: null,
                month: null
            },
            today: {
                year : new Date().getFullYear(),
                month : new Date().getMonth(),
                day: new Date().getDay(),
                date: new Date().getDate(),
            },
        }
    },
    computed: {

    },
    watch: {
        yearMonthSelection: {
            handler(newValue){
                this.$router.replace({ query: { year: newValue.year, month: newValue.month } });
                console.log(`Changed to ${newValue.year},${newValue.month}`)
                // fecth data again (polling)
                this.fetchSchedule();
            },
            deep: true,
            immediate: true
        }, 
    },
    methods: {
        fetchSchedule() {
            axios.get('http://localhost:3000/api/schedule',  { params: this.yearMonthSelection })
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
        // Check URL if it contains query data
        // Query looks like: ?year=2023&month=0
        var currentURLQuery = this.$route.query;

        if (Object.keys(currentURLQuery).length > 0){
            console.log(currentURLQuery);
            ({ year: this.yearMonthSelection.year, month: this.yearMonthSelection.month } = currentURLQuery);

        } else {
            /* If no Query present, Set Default date to today by 
            assigning today to yearMonthSelection using destructuring pattern */
            ({ year: this.yearMonthSelection.year, month: this.yearMonthSelection.month } = this.today);
            this.$router.replace({ query: { year: this.yearMonthSelection.year, month: this.yearMonthSelection.month } });
        }
        
        // Call the API
        this.fetchSchedule();
        console.log('creation finished');
        console.log(this.today.date);
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
    padding: 15px 0 15px;
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
    border-radius: 3px;
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
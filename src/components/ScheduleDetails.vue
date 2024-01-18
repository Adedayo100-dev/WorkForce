<script>
import axios from 'axios'

export default {
    name: 'ScheduleDetails',
    props: {
        modalBody:  String,
            // required: true
    },
    data() {
        return {
            scheduleDetail: {
                data:{},
                date:{}
            },
        }
    },
    methods: {
        async fetchScheduleDetail() {
            axios.get(`http://localhost:3000/api/schedule/${this.modalBody}`,  { params: this.scheduleDetail._id })
            .then((res) => {
                this.scheduleDetail = res.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err.message)
                // this.errorMsg = 'error retrieving data';
            });
        }
    },
    created() {
        this.fetchScheduleDetail();
    }
}
</script>
<template>
    <div class="schedule-details-container">
        <div class="schedule-header">
            <div>
                <span class="schedule-type">{{ scheduleDetail.data.type }}</span>
            </div>
            <div class="schedule-date">
                Mon 14 Feb, 2023
            </div>
        </div>
        <h4 class="shift-details-location">{{ scheduleDetail.data.short_desc }}</h4>
        <h4>826.25 <span class="small-currency">CAD</span></h4>
        <!-- <ul>
            <li class="dates-output">Mon 14 Feb, 2023 <span>9.5hrs</span></li>
            <li class="dates-output">Tue 15 Feb, 2023 <span>9.5hrs</span></li>
            <li class="dates-output">Wed 16 Feb, 2023 <span>9.5hrs</span></li>
            <li class="dates-output">Thur 17 Feb, 2023 <span>8.5hrs</span></li>
            <li class="dates-output">Fri 18 Feb, 2023 <span>8.5hrs</span></li>
        </ul> -->
        <p>Total hours: 45.5hrs</p>
        <p>Time: {{ scheduleDetail.date.start.time }} to {{ scheduleDetail.date.end.time }}</p>
        <p class="schedule-details-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, accusamus nulla! Laboriosam officiis molestias quidem atque, asperiores eveniet ducimus accusamus amet magni ea dicta, quaerat eos temporibus. Eum, eligendi voluptates!</p>
        <div>
            <button>Delete</button>
            <button>Update</button>
        </div>
    </div>
</template>



<style>
.schedule-header{
    display: flex;
    justify-content: space-between;
}
.schedule-type{
    text-transform: capitalize;
}
.schedule-date{
    color: gray;
    font-size: 12px;
}
.schedule-details-container{
    min-width: 360px;
}
.schedule-details-description{
    max-width: 376px; /* I might have to change this later to  */
}
</style>
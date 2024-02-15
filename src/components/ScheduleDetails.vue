<template>
    <div class="schedule-details-container">
        <div v-if="!editMode">        
            <div class="schedule-header">
                <div>
                    <span class="schedule-type">{{ scheduleDetail.data.type }}</span>
                </div>
                <div class="schedule-date">
                    Mon 14 Feb, 2023
                </div>
            </div>
            <div class="schedule-header-2">
                <div>
                    <span class="schedule-details-short_desc">{{ scheduleDetail.data.short_desc }}</span>
                </div>
                <div class="schedule-status-container"  :class="scheduleDetail.data.status">
                    <span class="schedule-status-message">{{scheduleDetail.data.status}}</span>
                </div>
            </div>
            <h4>826.25 <span class="small-currency">CAD</span></h4>
            <!-- <ul>
                <li class="dates-output">Mon 14 Feb, 2023 <span>9.5hrs</span></li>
                <li class="dates-output">Tue 15 Feb, 2023 <span>9.5hrs</span></li>
                <li class="dates-output">Wed 16 Feb, 2023 <span>9.5hrs</span></li>
                <li class="dates-output">Thur 17 Feb, 2023 <span>8.5hrs</span></li>
                <li class="dates-output">Fri 18 Feb, 2023 <span>8.5hrs</span></li>
            </ul> -->
            <p><span class="schedule-detail_label-title">Time: </span>{{ scheduleDetail.date.start.time }} to {{ scheduleDetail.date.end.time }}</p>
            <p><span class="schedule-detail_label-title">Total hours:</span> 45.5hrs</p>
            <p class="schedule-details-description">
                <span class="schedule-detail_label-title">Additional Info: </span>{{ scheduleDetail.data.info }}
            </p>
            <div>
                <span class="schedule-detail_label-title">Work, Stoney Creek, Part-time</span>
            </div>
        </div>
        <div v-else>
            <!-- Schedule Update Form -->
            <ScheduleUpdate/>
        </div>
        <!-- Controls -->
        <div class="schedule-buttons-container">
            <div class="confirmation-container">
                <span class="schedule-delete-confirm-text" v-show="confirmDelete">Are you sure you want to delete this item? </span>
            </div>
            <div>
                <div v-if="!confirmEdit">
                    <button class="schedule-button delete-button" @click="toggleScheDetailEdit()">Edit</button>
                    <button class="schedule-button update-button" @click="closeModal()">Close</button>
                </div>
                <div v-else>
                    <div v-if="confirmDelete">
                        <button class="schedule-button" @click="delScheduleDetail()">
                            <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="14px">
                                <polygon fill="grey" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
                            </svg>
                        </button>
                        <button class="schedule-button" @click="toggleScheduleDetailDel()">
                            <svg fill="grey" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 180.607 180.607" xml:space="preserve">
                                <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"/>
                            </svg>
                        </button>
                    </div>
                    <div v-else>
                        <div v-if="!editMode">
                            <button class="schedule-button" @click="toggleScheduleDetailDel()">Delete</button>
                            <button class="schedule-button" @click="updateScheDetail()">Update</button>
                        </div>
                        <div v-else>
                            <button class="schedule-button" @click="toggleScheDetailEdit()">Back</button>
                            <!-- <button class="schedule-button" @click="">Submit</button> -->
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { useModalStore } from '../stores/modalStore'
import ScheduleUpdate from '../components/ScheduleUpdate.vue'

export default {
    name: 'ScheduleDetails',
    components: {
        ScheduleUpdate,
    },
    props: {
        modalBody:  String,
            // required: true
    },
    data() {
        return {
            scheduleDetail: {
                data:{
                    short_desc: '',
                    type:'',
                    status: '',
                },
                date:{
                    start: {
                        time: ''
                    },
                    end: {
                        time: ''
                    }
                }
            },
            editMode: false,
            confirmEdit: false,
            confirmDelete: false
        }
    },
    watch: {
        modalBody(newValue, oldValue){
            console.log(`Changed from ${oldValue} to ${newValue}`)
            // fecth data again (polling)
            this.fetchScheduleDetail(newValue);
        }
    },
    methods: {
        async fetchScheduleDetail(id) {
            console.log(id);
            axios.get(`http://localhost:3000/api/schedule/${id}`)
            .then((res) => {
                this.scheduleDetail = res.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
        },
        toggleScheDetailEdit(){
            this.confirmEdit = !this.confirmEdit;
            this.editMode = false;
        },
        toggleScheduleDetailDel(){
            this.confirmDelete = !this.confirmDelete;
        },
        delScheduleDetail(){
            var id = this.modalBody
            axios.delete(`http://localhost:3000/api/schedule/${id}`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err.message);
            });
        },
        updateScheDetail(){
            this.editMode = !this.editMode;
        },
        closeModal() {
            useModalStore().closeModal();
        }
    },
    created() {
        this.fetchScheduleDetail();
    }
}
</script>

<style>
.schedule-header{
    display: flex;
    justify-content: space-between;
}
.schedule-header-2{
    display: flex;
    justify-content: space-between;
    margin-top: calc(1.33em / 2.5);
    margin-bottom: 1.33em;
}
.schedule-header-2 .schedule-details-short_desc{
    font-weight: bold;
}
.schedule-status-container{
    padding: 0 5px;
    line-height: 1;
    border-radius: 2px;
}
.schedule-status-message{
    font-size: 12px;
}
.In.view.schedule-status-container{
    background-color: rgba(128, 128, 128, 0.125);
}
.In.view .schedule-status-message{
    color: grey;
}
.Completed.schedule-status-container{
    background-color: rgba(0, 191.25, 0, 0.125);
}
.Completed .schedule-status-message{
    color: green;
}
.Cancelled.schedule-status-container{
    background-color: rgba(191.25, 0, 0, 0.125);
}
.Cancelled .schedule-status-message{
    color: red;
}

.schedule-type{
    text-transform: capitalize;
    font-size: 12px;
}
.schedule-date{
    color: gray;
    font-size: 12px;
}
.schedule-details-container{
    min-width: 360px;
}
.schedule-details-short_desc{
}
.schedule-details-description{
    max-width: 376px; /* I might have to change this later to  */
}
.schedule-detail_label-title{
    color: gray;
    font-size: 12px;
}
.confirmation-container{
    display: flex;
    align-items: center;
}
.schedule-delete-confirm-text{
    color: red;
    font-size: 12px;
    line-height: 1;
}
.schedule-buttons-container{
    margin-top: 1.33em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 4px;
}
.schedule-button{
    border: none;
    padding: 6px 12px;
    border-radius: 0.25rem;
    color: gray;
    font-size: 12px;
}
.delete-button{
    background-color: transparent;
}
.delete-button:hover{
    background-color: rgba(245, 245, 245, 0.75);
}
.update-button{
    background-color: var(--light-grey-color);
}
.update-button:hover{
    color: #404040;
}
</style>
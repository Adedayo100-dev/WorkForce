<template>
    <div class="tab-pane " id="tab-availability">
        <div class="add-shift_button-box justify-end">
            <AddButton @click="openModal('NewSchedule')">
                <span>  New Schedule</span>
            </AddButton>
        </div>
        <div class="margin-x" id="availability">
            
            <div class="weekly-availability">
                <table >
                    <caption>This Week</caption>
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
                        <tr>
                            <td>

                            </td>
                            <td>
                                <div class="has-shift">
                                    <span class="company-name">Seasons Retirement Community</span>
                                </div>
                                <span class="has-time">10:00 - 18:00</span>
                            </td>
                            <td>
                                <div class="has-shift">
                                    <span class="company-name">Seasons Retirement Community</span>
                                </div>
                                <span class="has-time">10:00 - 18:00</span>
                            </td>
                            <td>
                                <div class="has-shift">
                                    <span class="company-name">Seasons Retirement Community</span>
                                </div>
                                <span class="has-time">10:00 - 18:00</span>
                            </td>
                            <td></td>
                            <td>
                                <div class="has-shift">
                                    <span class="company-name">Seasons Retirement Community</span>
                                </div>
                                <span class="has-time">10:00 - 18:00</span>
                            </td>
                            <td>
                                <div class="has-shift">
                                    <span class="company-name">Seasons Retirement Community</span>
                                </div>
                                <span class="has-time">10:00 - 18:00</span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="5">invalid</td>
                            <td class="work-active" colspan="2">active</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
import AddButton from '../../components/AddButton.vue'
import { useModalStore } from '../../stores/modalStore'

export default {

    components:{
        AddButton
    },
    methods: {
        openModal(modalType) {
            useModalStore().openModal(modalType)
        }
    },
}
</script>

<style>
.weekly-availability td{
    text-align: center;
    border-left: 1px solid rgb(238, 238, 238);
}
/* .company-name{
    background-color: #f4f4f6;
} */
.work-active{
    background-color: rgba(0, 128, 0, 0.25);
}
.has-shift{
    background-color: #f4f4f6;
    border-left: 5px solid rgb(219 216 216) !important;
    padding: 13px 10px;
}
.has-time{
    line-height: 1;
    display: block;
    padding-top: 13px;
}
</style>
<template>
    <div class="new-employer">
        <h3>New Employer</h3>
        <div>
            <form @submit.prevent="createEmployer" id="addEmployer"  action="">
                <input type="text" v-model="employerValues.inputName" name="employerName" placeholder="Name" required>
                <div>
                    <label for="">Contact: </label>
                    <input type="email" name="" id="" placeholder="E-mail" minlength="6"> <span> or </span>
                    <input type="tel" name="" id="" placeholder="+X(XXX) XXX-XXXX" minlength="11" pattern="^\+[0-9]{1,3}\s?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}$">
                </div>
                <input type="checkbox" v-model="employerValues.inputContactStatus" name="employerContactStatus" id="employerContactStatus"> <label for="employerContactStatus">Contacted</label> <br>
                <input type="checkbox" v-model="employerValues.inputRegisterationStatus" name="employerRegisterationStatus" id="employerRegisterationStatus"> <label for="employerRegisterationStatus">Registered</label> <br>
                <input type="checkbox" v-model="employerValues.inputEmploymentStatus" name="employerEmploymentStatus" id="employerEmploymentStatus"> <label for="employerEmploymentStatus">Employed</label> <br>
                <div>
                    <input type="number" v-model="employerValues.inputPay.morningPay" name="employerPay1" step=".01" placeholder="Morning" min="0">
                    <input type="number" v-model="employerValues.inputPay.afternoonPay" name="employerPay2" step=".01"  placeholder="Afternoon" min="0">
                    <input type="number" v-model="employerValues.inputPay.nightPay" name="employerPay3" step=".01"  placeholder="Night" min="0">
                </div> <br>
                <div>
                    <div>
                        <label for="">Morning Start Time</label>
                        <input type="time" v-model="employerValues.inputTime.morning.inputStartTime" name="employerTime1">
                        <label for="">Stop Time</label>
                        <input type="time" v-model="employerValues.inputTime.morning.inputStopTime" name="employerTime2">
                    </div>
                    <div>
                        <label for="">Afternoon Start Time</label>
                        <input type="time" v-model="employerValues.inputTime.afternoon.inputStartTime" name="employerTime1">
                        <label for="">Stop Time</label>
                        <input type="time" v-model="employerValues.inputTime.afternoon.inputStopTime" name="employerTime2">
                    </div>
                    <div>
                        <label for="">Night Start Time</label>
                        <input type="time" v-model="employerValues.inputTime.night.inputStartTime" name="employerTime1">
                        <label for="">Stop Time</label>
                        <input type="time" v-model="employerValues.inputTime.night.inputStopTime" name="employerTime2">
                    </div>
                </div><br>
                <textarea v-model="employerValues.inputDescription" name="employerDesc" placeholder="Description" cols="30" rows="10"></textarea>
                <div class="confirm-button-container">
                    <FormSubmit>
                        <template  #button_name>Add</template>
                    </FormSubmit>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import FormSubmit from '../components/FormSubmit.vue'
    export default {
        components: {
            FormSubmit,
        },
        data() {
            return {
                employerValues:{
                    inputName: '',
                    inputContactStatus: false,
                    inputRegisterationStatus: false,
                    inputEmploymentStatus: false,
                    inputPay:{
                        morningPay: 0,
                        afternoonPay: 0,
                        nightPay: 0,
                    },
                    inputTime:{
                        morning:{
                            inputStartTime: '',
                            inputStopTime: '',
                        },
                        afternoon: {
                            inputStartTime: '',
                            inputStopTime: '',
                        },
                        night: {
                            inputStartTime: '',
                            inputStopTime: '',
                        }
                    },
                    inputDescription: '',
                },
            }
        },
        methods: {
            createEmployer(){
                console.log('Employer Form values', this.employerValues);
                axios.post('http://localhost:3000/api/employers', this.employerValues, {headers:{"Content-Type" : "application/json"}})
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            },
        },
    }
</script>

<style>

</style>
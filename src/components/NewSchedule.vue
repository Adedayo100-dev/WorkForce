<template>
    <div class="schedule-component">
        <h4>New Schedule</h4>
        <form @submit.prevent="createSchedule" action="">
            <div>
                <input type="text" name="" id="" class="width-full" placeholder="Name/Location">
            </div>
            <div id="from">
                <label for="from">From:</label><br>
                <input type="date" name="" id="">
                <input type="time" name="" id="">
            </div>
            <div id="to">
                <label for="to">To:</label><br>
                <input type="date" name="" id="">
                <input type="time" name="" id="">
            </div>
            <input type="checkbox" name="" id="recurring" v-model="formValues.inputRecurring"> <label for="recurring">Recurring</label><br>
            <br>
            <div class="confirm-button-container">
                <FormSubmit>
                    <template  #button_name>Save</template>
                </FormSubmit>
            </div>
        </form>
    </div>
</template>

<script>
import FormSubmit from '../components/FormSubmit.vue'

    export default {
        components: {
            FormSubmit,
    },
    data() {
        return{
            formValues:{
                inputRecurring: false,
                inputTime: {
                    startTime: '',
                    stopTime: ''
                },
                inputPay: null,
                inputPayStatus: false,
                inputDescription: '',
            }   
        }
    },
    methods: {
        createSchedule(){
            console.log('Schedule Form values', this.formValues);
            axios.post('http://localhost:3000/api/schedules', this.formValues, {headers:{"Content-Type" : "application/json"}})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        },
    },
}
</script>

<style>

</style>
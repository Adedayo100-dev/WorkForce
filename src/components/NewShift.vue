<template>
    <div class="new-shift">
        <h3>Add New Shift</h3>
        
        <form @submit.prevent="createShift" action="" id="addShift" class="">
            <div class="form-group">
                <label for="">Location:</label>
                <input type="text" v-model="formValues.inputLocation" name="shiftlocation" id=""  class="form-control_input" list="locName" placeholder="Location">
                <datalist id="locName">
                    <option value="Minova">Minova</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Ferrero">Ferrero</option>
                    <option value="Aspire">Aspire</option>
                    <option value="Mondelez">Mondelez</option>
                    <option value="Nuvate">Nuvate</option>
                </datalist>
            </div>
            <div class="form-group">
                <label for="">Date(S):</label>
                <div class="date_form-control">
                    <input v-model="formValues.inputTime.startTime" type="datetime-local" name="shiftstart" id=""  class="form-control_input width-full">
                    <button class="add-new-date">
                        +
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label for="">Date(E):</label>
                <div class="date_form-control">
                    <input v-model="formValues.inputTime.stopTime" type="datetime-local" name="shiftend" id=""  class="form-control_input width-full">
                    <button class="add-new-date">
                        +
                    </button>
                </div>
            </div>
            <!-- <div class="form-group">
                <label for="">Hour(s)</label>
                <input type="datetime-local" name="" id="">
            </div> -->
            <div class="form-group">
                <label for="">Pay:</label>
                <input v-model.number="formValues.inputPay" type="number" name="shiftpay" id=""  class="form-control_input" min="0" step=".01">
            </div>
            <div class="form-group">
                <label for="">Pay Status:</label>
                <div class="form-wrap">
                    <input v-model="formValues.inputPayStatus" type="checkbox" name="payStatus" id="payStatus">
                    <label for="payStatus">Paid</label>
                </div> 
            </div>
            <div class="form-group">
                <label for="">Description:</label>
                <textarea v-model="formValues.inputDescription" name="shiftdescription" id="" class="form-control_input"></textarea>
            </div>

            <!-- <input type="submit" value="submit"> -->
            <div class="confirm-button-container">
                <FormSubmit></FormSubmit>
            </div>
        </form>

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
        return{
            formValues:{
                inputLocation: '',
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
        createShift(){
            console.log('Form values', this.formValues);
            axios.post('http://localhost:3000/api/workslist', this.formValues, {headers:{"Content-Type" : "application/json"}})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
    },
}
</script>

<style>
/* #addShift{
    display: flex;
} */
.new-shift{
    /* margin-top: 60px; */
}
.form-group{
    display: grid;
    grid-template-columns: 2fr 10fr;
    gap: 12px;
    margin-bottom: 10px;
}
label{
    font-size: 13px;
    color: darkgray;
}
.new-shift .form-control_input{
    padding: 10px 12px;
    border: 1px solid rgb(238, 238, 238);
    resize: none;
    border-radius: 4px;
}
.new-shift .date_form-control{
    width:100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
}
/* .new-shift .add-shift_button{
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 40px;
} */
.new-shift .form-wrap{
    /* padding: 10px 0px; */
    font-size: 13px;
}
input[type=reset]{
    padding: 10px 40px;
    border: none;
    /* border: 1px solid rgb(238, 238, 238); */
    /* border-radius: 4px; */
    /* background: red; */
}
</style>
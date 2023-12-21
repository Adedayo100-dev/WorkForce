<template>
    <div class="new-shift">
        <h3>Add New Shift</h3>
        
        <form @submit.prevent="createShift" id="addShift" class="">
            <div class="form-group">
                <label for="">Company / Agency:</label>
                <input type="text" v-model="formValues.inputCompany" name="shiftlocation" id=""  class="form-control_input" list="locName" placeholder="Company">
                <datalist id="locName">
                    <option value="Minova">Minova</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Ferrero">Ferrero</option>
                    <option value="Aspire">Aspire</option>
                    <option value="Mondelez">Mondelez</option>
                    <option value="Nuvate">Nuvate</option>
                    <option value="Seasons+">Seasons+</option>
                </datalist>
                
            </div>
            <div class="form-group">
                <label for="">Location:</label>
                <input type="text" v-model="formValues.inputLocation" name="shiftlocation" id=""  class="form-control_input" list="locName" placeholder="Location">
                <datalist id="locName">
                    <option value="HamiltonON">Hamilton, ON</option>
                    <option value="StoneyCreekON">Stoney Creek, ON</option>
                    <option value="BurlingtonON">Burlington, ON</option>
                    <option value="DunvilleON">Dunville, ON</option>
                </datalist>
            </div>
            <div>
                <input type="checkbox" name="" id="" v-model="formValues.sameLocAndNameInfo">
                <span> &nbsp;Use the info above for all shift days added below</span>
            </div>

            <div v-for="(shift, index) in shifts" :key="index">
                <div>{{ shift.inputCompany }} {{ shift.inputLocation }}</div>
            </div>

            <div class="addNewDay-section">
                <div class="form-center">
                    <button @click.prevent="toggleNewDayFieldSet()" :class="{ 'opened-switch': showFieldset }" title="Add the details of each shift days"> <span class="when-closed">+ Add</span><span class="when-opened">- Close</span> New Day</button>
                </div>
                <template  v-if="showFieldset">
                    <div class="addNewDay-forms">
                        <div class="form-spread">
                            <input type="text" v-model="currentShift.inputCompany" class="form-control_input width-full" placeholder="Company">
                            <input type="text" v-model="currentShift.inputLocation" name="shiftlocation" id="" class="form-control_input width-full" list="locName" placeholder="Location">
                        </div>
                        <div class="form-spread">
                            <input v-model="currentShift.inputTime.startTime" type="datetime-local" name="shiftstart" id=""  class="form-control_input width-full">
                            <input v-model="currentShift.inputTime.stopTime" type="datetime-local" name="shiftend" id=""  class="form-control_input width-full">
                        </div>
                        <div class="form-spread">
                            <div class="input-group">
                                <div class="payStatusContainer">
                                    <input type="checkbox" v-model="currentShift.inputPayStatus" name="payStatus" id="payStatus">
                                </div>
                                <div class="width-full">
                                    <input v-model="currentShift.inputPay"  type="number" name="shiftpay" id="inputPayFormControl"  class="form-control_input" min="0" step=".01" placeholder="Pay">
                                </div>
                            </div>
                            <div class="width_fill-available">
                                <input type="text" class="form-control_input width_fill-available" v-model="currentShift.inputComment" placeholder="Comment">
                            </div>
                        </div>
                        <div class="form-spread">
                            <input type="submit"  @click="saveFieldSet(index)" class="" value="Save">
                        </div>
                    </div>
                </template>
            </div>
            
            <!-- <div class="form-group">
                <label for="">Hour(s)</label>
                <input type="datetime-local" name="" id="">
            </div> -->
            <div class="form-group">
                <label for="">Total Pay:</label>
                <div class="input-group">
                    <div class="payStatusContainer">
                        <input v-model="formValues.inputPayStatus" type="checkbox" name="payStatus" id="payStatus">
                    </div>
                    <div class="width-full">
                        <input v-model.number="formValues.inputPay" type="number" name="shiftpay" id="inputPayFormControl"  class="form-control_input" min="0" step=".01">
                    </div>
                </div>
            </div>
            <!-- <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
            <pre>{{ JSON.stringify(currentShift, null, 2) }}</pre> -->
            <div class="form-group">
                <label for="">Comment:</label>
                <textarea v-model="formValues.inputComment" name="shiftdescription" id="" class="form-control_input"></textarea>
            </div>

            <!-- <input type="submit" value="submit"> -->
            <div class="confirm-button-container">
                <FormSubmit>
                    <template  #button_name>Save</template>
                </FormSubmit>
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
                    inputCompany: '',
                    inputLocation: '',
                    sameLocAndNameInfo: false,
                    inputPay: 0,
                    inputPayStatus: true,
                    shifts: [], // Array to store shift objects
                    inputComment: '',
                }, 
                currentShift:{
                    inputCompany: '',
                    inputLocation: '',
                    inputTime: {
                        startTime: '',
                        stopTime: ''
                    },
                    inputPay: 0,
                    inputPayStatus: true,
                    inputComment: '',
                }, // Current shift object
                showFieldset: false,
                index: 0,
            }
        },
        methods: {
            toggleNewDayFieldSet(){
                if(this.showFieldset){

                }
                this.showFieldset = !this.showFieldset; //Toggle here
            },
            saveFieldSet(index){
                this.formValues.shifts[index] = { ...this.formValues.shifts[index], ...this.currentShift};
                this.showFieldset = false;
                this.index++
            },
            createShift(){
                console.log('Shift Form values', this.formValues);
                axios.post('http://localhost:3000/api/worksList', this.formValues, {headers:{"Content-Type" : "application/json"}})
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            },
        },
    }
</script>

<style>
/* #addShift{
    display: flex;
} */
.new-shift{
    /* margin-top: 60px; */
    overflow-y: scroll;
    max-height: 500px;
}

.new-shift .form-control_input{
    padding: 10px 12px;
    border: 1px solid rgba(0 0, 0, .1);
    resize: none;
    border-radius: 4px;
    background-color: transparent;
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
.addNewDay-section{
    padding: 10px 0;
}
.addNewDay-forms{
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.addNewDay-forms input[type=submit]{
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
}
.addNewDay-forms .form-spread{
    display: flex;
    gap: 4px;
}
.when-opened{
    display: none;
}
.opened-switch .when-closed{
    display: none;
}
.opened-switch .when-opened{
    display: inline;
}
.form-spread .input-group{
    width: -webkit-fill-available;
}
.input-group{
    display: flex;
    /* flex-direction: row; */
    border: 1px solid rgba(0 0, 0, .1);
    padding: 0;
    border-radius: 4px;
}
.input-group .form-control_input{
    border: none;
}
.input-group .payStatusContainer{
    display: flex;
    border-right: 1px solid rgba(0 0, 0, .1);
}
#payStatus{
    margin: 0 12px;
}
#inputPayFormControl{
    width: -webkit-fill-available;
}
</style>
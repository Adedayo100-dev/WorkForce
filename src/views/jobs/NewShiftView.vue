<template>
    <div class="new-shift">
        <form action="" id="addShift" class="">
            <div class="form-group">
                <label for="">Location:</label>
                <select v-model="inputLocation" name="shiftlocation" id="" class="form-control_input">
                    <option disabled value="">Location</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Ferrero">Ferrero</option>
                    <option value="Aspire">Aspire</option>
                    <option value="Mondelez">Mondelez</option>
                    <option value="Nuvate">Nuvate</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Date(s):</label>
                <div class="date_form-control">
                    <input v-model="inputDate" type="date" name="shiftdate" id=""  class="form-control_input width-full">
                    <button class="add-new-date">
                        +
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label for="">Pay:</label>
                <input v-model="inputPay" type="number" name="shiftpay" id=""  class="form-control_input" min="0" step=".01">
            </div>
            <div class="form-group">
                <label for="">Pay Status:</label>
                <div class="form-wrap">
                    <input v-model="inputPay" type="radio" name="paystatus" id="" value="unpaid"> <span>Unpaid</span> <br>
                    <input v-model="inputPay" type="radio" name="paystatus" id="" value="paid"> <span>Paid</span>
                </div> 
            </div>
            <div class="form-group">
                <label for="">Description:</label>
                <textarea name="shiftdescription" id="" class="form-control_input"></textarea>
            </div>
            <div class="buttons-split">
                <input type="reset" value="Cancel">
                <input type="submit" value="Confirm" class="add-shift_button">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
            inputLocation: '',
            inputDate: '',
            inputPay: ''
        }
    }
}
</script>

<style>
/* #addShift{
    display: flex;
} */
.new-shift{
    margin-top: 60px;
}
.form-group{
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 6px; */
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
}
.new-shift .date_form-control{
    width:100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
}
.new-shift .add-shift_button{
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 40px;
    background-color: #0a793b;
    color: white;
}
.new-shift .form-wrap{
    padding: 10px 0px;
    font-size: 13px;
}
.buttons-split{
    display: flex;
    gap: 12px;
}
input[type=reset]{
    width: 100%;
    padding: 10px 40px;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 4px;
    background: transparent;
}
</style>
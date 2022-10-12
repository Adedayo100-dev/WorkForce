<template>
    <div class="modal-overlay">
        <div class="modal-static-container">
            <div class="modal-dynamic-content">
                <h3>Add Shift</h3>
                <form action="" id="addShift" class="modal_add-shift">
                    <div class="form-group">
                        <label for="">Location</label>
                        <select v-model="inputLocation" name="" id="" class="modal_form-control_input">
                            <option disabled value="">Location</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Ferrero">Ferrero</option>
                            <option value="Aspire">Aspire</option>
                            <option value="Mondelez">Mondelez</option>
                            <option value="Nuvate">Nuvate</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Date</label>
                        <div class="modal_date_form-control">
                            <input v-model="inputDate" type="date" name="" id=""  class="modal_form-control_input width-full">
                            <button class="add-new-date">
                                +
                            </button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Pay</label>
                        <input v-model="inputPay" type="number" name="" id=""  class="modal_form-control_input" min="0" step=".01">
                    </div>
                    <div class="form-group">
                        <label for="">Description</label>
                        <textarea name="" id="" class="modal_form-control_input"></textarea>
                    </div>
                    <div class="buttons-split">
                        <input type="reset" value="Cancel">
                        <input type="submit" value="Confirm" class="modal_add-shift_button">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal'
}
</script>

<style>
    .modal-overlay.show{
        display: flex;
    }
.modal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.452);
    width: 100%;
    z-index: 100;
    height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;
    min-height: 500px;
}
.modal-overlay h3{
    margin-top: 0;
}
.modal-static-container{
    background: white;
    padding: 60px 180px;
    border-radius: 6px;
}
.modal_add-shift{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.form-group{
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.modal-overlay label{
    font-size: 14px;
}
.modal_form-control_input{
    padding: 10px 12px;
    border: 1px solid rgb(238, 238, 238);
    resize: none;
}
.modal_date_form-control{
    width:100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
}
.modal_add-shift_button{
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 40px;
    background-color: #018786;
    color: white;
}
.buttons-split{
    display: flex;
    gap: 12px;
}
input[type=reset]{
    padding: 10px 40px;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 4px;
    background: transparent;
}
</style>
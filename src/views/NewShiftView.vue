<template>
    <div class="new-shift">
        <form action="" id="addShift" class="add-shift">
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
</template>

<script>
export default {

}
</script>

<style>

</style>
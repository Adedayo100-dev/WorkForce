<template>
    <div class="new-transaction">
        <h3>Add New Transaction</h3>
        <div>
            <form @submit.prevent="createTransaction" id="addTransaction"  action="">
                <input type="number" v-model="transactionValues.inputAmount" name="transacAmount" placeholder="Amount">
                <input type="number" v-model="transactionValues.inputRate" name="transacRate" placeholder="Rate"> <br>
                <input type="date" v-model="transactionValues.inputDate" name="transacDate">
                <input type="text" v-model="transactionValues.inputMedium" name="transacMedium" placeholder="Medium"> <br>
                <input type="description" v-model="transactionValues.inputDescription" name="transacDesc" placeholder="Desc">
                <div class="confirm-button-container">
                    <FormSubmit></FormSubmit>
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
                transactionValues:{
                    // inputTransacName: null,
                    inputAmount: null,
                    inputRate: null,
                    inputDate: null,
                    inputMedium: '',
                    inputDescription: '',
                },
            }
        },
        methods: {
            createTransaction(){
                console.log('Transaction Form values', this.transactionValues);
                axios.post('http://localhost:3000/api/transactions', this.transactionValues, {headers:{"Content-Type" : "application/json"}})
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            },
        },
    }
</script>

<style>

</style>
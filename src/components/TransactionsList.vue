<template>
    <div class="transaction-list">
        <div>
            <table>
                <tr v-for="item in transactions" :key="item.id">
                    <td class="num-output">{{$formatNum(item.amount)}}</td>
                    <td><pre> * </pre></td>
                    <td class="num-output">{{item.rate}} ₦/CAD</td>
                    <td><pre> = </pre></td>
                    <td class="num-output">{{$formatNum(item.amount * item.rate)}}</td>
                </tr>
                <tr>
                    <!-- <td colspan="5">--------------------------------</td> -->
                    <td colspan="5"><div class="hr"></div></td>
                    
                </tr>
                <tr class="transaction-sum">
                    <td class="num-output">{{$formatNum(dollarPaid) }}</td>
                    <td><pre> * </pre></td>
                    <td>529.712(mean)</td>
                    <td><pre> = </pre></td>
                    <td class="num-output">{{$formatNum(this.nairaPaid)}}</td>
                    <!-- <td class="num-output"></td> -->
                </tr>
            </table>
        </div>
        <br>
        <div>
            <form @submit.prevent="createTransaction" id="addTransaction"  action="">
                <input type="number" v-model="transactionValues.inputAmount" name="transacAmount" placeholder="Amount">
                <input type="number" v-model="transactionValues.inputRate" name="transacRate" placeholder="Rate">
                <input type="date" v-model="transactionValues.inputDate" name="transacDate">
                <input type="text" v-model="transactionValues.inputMedium" name="transacMedium" placeholder="Medium">
                <input type="description" v-model="transactionValues.inputDescription" name="transacDesc" placeholder="Desc">
                <!-- <input type="submit" class="green-confirm-button border-rad-4" value="Submit"> -->
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            transactionValues:{
                inputAmount: null,
                inputRate: null,
                inputDate: null,
                inputMedium: '',
                inputDescription: '',
            } 
        }
    },
    props: {
        transactions: {
            type: Array
        },
        nairaPaid: {
            type: Number,
            required: true,
        },
    },
    computed: {
        dollarPaid(){
            let sum = 0;
            for (const entry of Object.values(this.transactions)) {
                sum += entry.amount;
            }
            return sum;
        },
    },
    methods: {
        createTransaction(){
            console.log('Transaction Form values', this.transactionValues);
            axios.post('http://localhost:3000/api/transactions', this.transactionValues, {headers:{"Content-Type" : "application/json"}})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
    },
    // updated(){
    //     console.log(this.nairaPaid);
    // },
}
</script>

<style>
.transaction-list table{
    border: none;
    width: auto;
    
}
.transaction-list td, .transaction-sum td{
    padding: 0;
    font-size: 14px;
}
.num-output{
    text-align: end;
}
div.hr{
    width: 100%;
    border-top: 1px dashed black;
    margin: 8px 0;
}
</style>
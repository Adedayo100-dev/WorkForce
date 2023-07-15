<script>
    import axios from 'axios'
    import AddButton from '../../components/AddButton.vue'
    import IncomeCalculator from '../../components/IncomeCalculator.vue'
    import { useModalStore } from '../../stores/modalStore'


    export default {
        name: 'transactions',
        components: {
            AddButton, IncomeCalculator
        },
        data() {
            return {
                transactions: {},
                nairaTotal: 2000000,
            }
        },
        created() {
            axios.get('http://localhost:3000/api/transactions')
            .then((res) => {
                this.transactions = res.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message)
            });
        
        },
        computed: {
            // nairaPaid(){
            //     const transactionArrays = Object.values(this.transactions)
            //     const sums = transactionArrays.map(transactions => {
            //         return transactions.reduce((total, transaction) => {
            //             return total + (transaction.amount* transaction.rate)
            //         }, 0)
            //     })

            //     return sums
            // },
            // dollarPaid(){
            //     const transactionArrays = Object.values(this.transactions)
            //     const sums = transactionArrays.map(transactions => {
            //         return transactions.reduce((total, transaction) => {
            //             return total + transaction.amount
            //         }, 0)
            //     })

            //     return sums
            // },
            // paidPercentage(){
            //     return (this.nairaPaid / this.nairaTotal*100).toFixed(2);
            // }
        },
        methods: {
            openModal(modalType) {
                useModalStore().openModal(modalType)
            }
        },
        mounted() {
            console.log(this.transactions);
        },
    }
</script>

<template>
    <div class="add-shift_button-box justify-end">
        <AddButton @click="openModal('NewTransaction')">
            <span>  Add Transaction</span>
        </AddButton>
    </div>
    <div class="transactions-main margin-x">
        <div v-for="(item, index) in transactions" :key="index">
            <div class="transaction-list">    
                <h4>Towards {{ item.transactionsMeta.name }}</h4>
                <div class="transactions-binder">
                    <div>
                        <table>
                            <tr v-for="content in item.transactionsData" :key="content.id">
                                <td class="num-output">{{$formatNumFloat(content.amount)}}</td>
                                <td><pre> * </pre></td>
                                <td class="num-output">{{content.rate}} ₦/CAD</td>
                                <td><pre> = </pre></td>
                                <td class="num-output">{{$formatNumFloat (content.amount * content.rate)}}</td>
                            </tr>
                            <tr>
                                <td colspan="5"><div class="hr"></div></td>
            
                            </tr>
                            <tr class="transaction-sum">
                            <td class="num-output">{{$formatNum(item.transactionsMeta.totalDollarPaid)}}</td>
                                <td><pre> * </pre></td>
                                <td>{{ $formatNumFloat(item.transactionsMeta.totalNairaPaid / item.transactionsMeta.totalDollarPaid)}} ₦/CAD</td>
                                <td><pre> = </pre></td>
                                <td class="num-output">{{$formatNum(item.transactionsMeta.totalNairaPaid)}}</td>
                            </tr>
                        </table>
                    <span> Goal: ₦{{$formatNum(item.transactionsMeta.nairaGoal)}}</span>
                    </div>
                    <div class="paid-percentage-box">
                        <h3>{{item.transactionsMeta.paidPercentage}}%</h3>
                        <span>paid</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div class="calc margin-x">
        <div class="contribution">
            <div class="first-calc-box">
                <form oninput="x.value='₦'+(parseInt(a.value)*parseInt(b.value)).toLocaleString('en-US')">
                    <div class="func-container">
                        <span>Percentages: </span>
                        <div class="calc-container">
                            <input type="number" name="" id="a" :value="totalPay / 10" placeholder="$">
                            <pre> * </pre>
                            <input type="number" name="" id="b" :value="exchangeRate" placeholder="Rate">
                            <pre> = </pre>
                            <output name="x" for="a  b"></output>
                        </div>
                    </div>
                </form>
                <br>
                <form oninput="y.value='₦'+(parseInt(c.value)*parseInt(d.value)).toLocaleString('en-US')">
                    <div class="func-container">
                        <span>Send Home: </span>
                        <div class="calc-container">
                            <input type="number" name="" id="c" placeholder="$">
                            <pre> * </pre>
                            <input type="number" name="" id="d" :value="exchangeRate" placeholder="Currency Rate">
                            <pre> = </pre>
                            <output name="y" for="c d"></output>
                        </div>
                    </div>
                </form>
            </div>
            <hr class="">
            <div class="second-calc-box">
                <p>
                    {{$formatNum(75459384)}}
                </p>
            </div>
        </div>
        <IncomeCalculator/>
    </div>
</template>



<style scoped>
.transactions-main{

}
pre{
    font-size: var(--table-font-size);
    margin: 0;
    display: inline-flex;
    align-items: center;
}
.transactions-binder {
    display: flex;
    gap: 28px;
}
.transaction-list p{
    margin: 0.5em 0;
}
.transaction-list p:last-of-type{
    margin: 0;
}
.transaction-sum p{
    margin: 0;
}
.paid-percentage-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100px;
    height: 100px;
    border: 1px dashed gray;
    border-radius: 50%;
}
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
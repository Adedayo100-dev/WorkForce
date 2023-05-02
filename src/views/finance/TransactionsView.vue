<script>
    import axios from 'axios'
    import EditSquareIcon from '../../components/icons/IconEditSquare.vue'

    export default {
        name: 'transactions',
        components: {
            EditSquareIcon,
        },
        data() {
            return {
                transactions: [],
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
            nairaPaid(){
                let sum = 0;
                for (const entry of Object.values(this.transactions)) {
                    sum += (entry.amount * entry.rate);
                }
                return sum;
            },
            dollarPaid(){
                let sum = 0;
                for (const entry of Object.values(this.transactions)) {
                    sum += entry.amount;
                }
                return sum;
            },
            paidPercentage(){
                return (this.nairaPaid / this.nairaTotal*100).toFixed(2);
            }
        },
        methods: {
            openModal(modalType) {
                this.$store.commit('openModal', modalType);
                // console.log(modalType, 'Modal-Opened');
            }
        }
    }
</script>

<template>
    <div class="add-shift_button-box justify-end">
        <button class="add-shift_button green-confirm-button" @click="openModal('NewTransaction')">
            <EditSquareIcon />
            <span>  Add Transaction</span>
        </button>
    </div>
    <br>
    <div class="transaction-list">    
        <h4>Towards Debt</h4>
        <div class="transactions-binder">
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
                        <td colspan="5"><div class="hr"></div></td>
                        
                    </tr>
                    <tr class="transaction-sum">
                        <td class="num-output">{{$formatNum(dollarPaid) }}</td>
                        <td><pre> * </pre></td>
                        <td>529.712(mean)</td>
                        <td><pre> = </pre></td>
                        <td class="num-output">{{$formatNum(this.nairaPaid)}}</td>
                    </tr>
                </table>
            </div>
            <div class="paid-percentage-box">
                <h3>{{paidPercentage}}%</h3>
                <span>paid</span>
            </div>
        </div>
    </div>
    <div class="transaction-list">    
        <h4>Towards School Fees</h4>
        <div class="transactions-binder">
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
                        <td colspan="5"><div class="hr"></div></td>
                        
                    </tr>
                    <tr class="transaction-sum">
                        <td class="num-output">{{$formatNum(dollarPaid) }}</td>
                        <td><pre> * </pre></td>
                        <td>529.712(mean)</td>
                        <td><pre> = </pre></td>
                        <td class="num-output">{{$formatNum(this.nairaPaid)}}</td>
                    </tr>
                </table>
            </div>
            <div class="paid-percentage-box">
                <h3>{{paidPercentage}}%</h3>
                <span>paid</span>
            </div>
        </div>
    </div>
</template>



<style scoped>
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
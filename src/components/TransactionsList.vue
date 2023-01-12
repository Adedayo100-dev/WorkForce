<script>
import FormatNumMixin from '../mixins/toLocaleString.js'

export default {
    data() {
        return {
            
        }
    },
    props: {
        transactions: {
            type: Array
        }
    },
    mixins: [FormatNumMixin],
}
</script>

<template>
    <div class="transaction-list">
        <div>
            <table>
                <tr v-for="item in transactions" :key="item.id">
                    <td class="num-output">{{formatNum(item.amount)}}</td>
                    <td><pre> * </pre></td>
                    <td class="num-output">{{item.rate}}</td>
                    <td><pre> = </pre></td>
                    <td class="num-output">{{formatNum(item.amount * item.rate)}}</td>
                </tr>
                <tr>
                    <td colspan="5">------------------------</td>
                </tr>
                <tr class="transaction-sum">
                    <td class="num-output">1200</td>
                    <td><pre> * </pre></td>
                    <td>---</td>
                    <td><pre> = </pre></td>
                    <td class="num-output">{{formatNum(598000)}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

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
</style>
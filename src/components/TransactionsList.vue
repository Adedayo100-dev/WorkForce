<script>
import FormatNumMixin from '../mixins/toLocaleString.js'

export default {
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
        <div  v-for="(transact, index) in transactions" :key="transact.id" :amount="transact.amount" :rate="transact.rate" :idx="index">
            <p>
                {{amount}} * {{rate}} = ok
            </p>
        </div>
        <p>
            200 * 540 = {{formatNum(108000)}}
        </p>
        <p>
            1000 * 490 = {{formatNum(490000)}} <br>
            -----------------------
        </p>
    </div>
    <div class="transaction-sum">
        <p>
            1200 * --- = {{formatNum(598000)}}
        </p>
    </div>
</template>

<style>

</style>
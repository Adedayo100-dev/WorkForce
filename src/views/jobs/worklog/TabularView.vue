<script>
import WorkLogItem from '../../../components/WorkLogItem.vue'
import UnseeIcon from '../../../components/icons/IconUnview.vue'


export default {
    components: {
        WorkLogItem, UnseeIcon
    },
    props: {
        worksList: {
            type: Array,
            required: true,
        }, 
        totalShifts: {
            type: Number,
            required: true,
        }, 
        totalPay: {
            type: Number,
            required: true,
        }
    },
}
</script>

<template>
    <div class="work-log-list-container">
        <table>
            <thead>
                <tr>
                    <td>Location</td>
                    <td>Date</td>
                    <td>Hours</td>
                    <td class="pay-header">
                        <div class="">
                            <span>(CAD) Pay</span>
                            <UnseeIcon />
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody>
                <WorkLogItem v-for="(work, index) in worksList" :key="work.id" :loc="work.loc" :dates="work.dates" :hours="work.hours" :pay="work.pay" :payStatus="work.payStatus" :idx="index"/>
                <tr id="totalShifts">
                    <td>
                        <p>Total</p>
                    </td>
                    <td class="dates-output">{{totalShifts}} entries</td>
                    <td></td>
                    <td class="text-bold pay-output text-black">
                        <span>{{$formatNum(totalPay)}}</span>
                    </td>
                    <!-- <td colspan="3" style="color: #757575;">This is the total sum of all work done from May, 2022 to present......</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>

</style>
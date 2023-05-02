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
        <UnseeIcon />
        <WorkLogItem v-for="(work, index) in worksList.slice().reverse()" :key="work._id" :loc="work.loc" :time="work.time" :description="work.description" :pay="work.pay" :payStatus="work.payStatus" :idx="index"/>
        <div class="shifts-list-item" id="totalShifts">
            <div class="visible">
                <div class="work-logo_image-container">
                    <p>Total</p>
                </div>
                <div class="dates-output">{{totalShifts}} entries</div>
                <div class="hours-output"></div>
                <div class="text-bold pay-output text-black">
                    <span>{{$formatNum(totalPay)}}</span>
                </div>
                <!-- <td colspan="3" style="color: #757575;">This is the total sum of all work done from May, 2022 to present......</td> -->
            </div>
            
        </div>
    </div>
</template>

<style>

</style>
<script>
import WorkLogItem from '../../../components/WorkLogItem.vue'


export default {
    components: {
        WorkLogItem,
    },
    data() {
        return {
            
        }
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
    methods: {
        handleDeletion(idx) {
            this.consoleNum = idx;
            this.worksList.splice(idx, 1)
        }
    },
}
</script>

<template>
    <div class="work-log-list-container">
        <!-- Flex Header -->
        <div class="display-option container-fluid css-bt7gsy ml-none ml-sm-xxl border-x-none">
            <div class="display-option-row py-xsm px-std css-mmep5j css-10la47u">
                <div>
                    <div class="css-i8rtc8">Company / Agency</div>
                    <div class="d-block d-sm-none css-znfehe">Location | Duration</div>
                    <div class="d-none d-sm-block css-znfehe">Location</div>
                </div>
                <div>
                    <div class="css-i8rtc8 css-c7ebe2">Total Pay</div>
                    <div class="css-znfehe css-c7ebe2">Morning | Afternoon | Night</div>
                </div>
                <div class="d-none d-sm-block">
                    <div class="css-i8rtc8">Duration</div>
                </div>
                <div class="d-none d-sm-block">
                    <div class="css-i8rtc8">Date</div>
                    <div class="css-znfehe css-c7ebe2">Time of Day</div>
                </div>
            </div>
        </div>
        <div class="bank">
            <WorkLogItem v-for="(work, index) in worksList" :key="work._id" :id="work._id" :loc="work.loc" :time="work.time" :description="work.description" :pay="work.pay" :payStatus="work.payStatus" :idx="index" @deleteById="handleDeletion"/>
            
            <div class="display-option-row py-xsm px-std css-mmep5j css-10la47u">
                <div>
                    <!-- <div class="css-szkv6d">Total</div> -->
                    <!-- <div class="css-kx45yu">Hamilton, ON<span class="d-block-inline d-sm-none">&nbsp;| 5 years</span></div> -->
                </div>
                <div>
                    <div class="css-szkv6d css-c7ebe2">
                        <div class="css-kx45yu css-c7ebe2">Total</div>
                        <span>${{$formatNum(totalPay)}}</span>
                    </div>
                    <div class="css-kx45yu css-c7ebe2">
                        <!-- <span class="shift-pay">$21.10 | </span>
                        <span class="shift-pay">$18.60 | </span>
                        <span class="shift-pay">$19.50 </span> -->
                    </div>
                    
                </div>
                <div class="d-none d-sm-block">
                    <div class="css-kx45yu css-c7ebe2">No. of entries</div>
                    <div class="css-szkv6d">
                        {{ totalShifts }} 
                        <!-- <span class="css-gwog64">entries</span> -->
                    </div>
                    <div>
                        <!-- {{ time.duration }} -->
                    </div>
                </div>
                <div>
                    <div class="shift-time">
                        <!-- <span>{{time.startDate}}</span> -->
                    </div>
                </div>
            </div>
            
            <!-- <div class="shifts-list-item" id="totalShifts">
                <div class="visible">
                    <div class="work-logo_image-container">
                        <p>Total</p>
                    </div>
                    <div class="dates-output">{{totalShifts}} entries</div>
                    <div class="hours-output"></div>
                    <div class="text-bold pay-output text-black">
                        <span>{{$formatNum(totalPay)}}</span>
                    </div>
                    <td colspan="3" style="color: #757575;">This is the total sum of all work done from May, 2022 to present......</td>
                </div>
                
            </div> -->
    </div>

    </div>
</template>

<style>
@import "../../..//assets/flex.css";

</style>
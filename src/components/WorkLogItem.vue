<script>
    import AmazonIcon from '../components/icons/IconAmazon.vue'
    import VDotsIcon from '../components/icons/IconVDots.vue'
    import EditIcon from '../components/icons/IconEdit.vue'
    
    export default {
        components: {
            AmazonIcon, VDotsIcon, EditIcon
        },
        props: {
            key: [String, Number],
            loc: {
                type: String, 
                // required: true
            },
            time: { 
                type: Object,
                // required: true
            },
            pay: {
                type: Number,
                // required: true
            },
            payStatus: {
                type: Boolean,
                // required: true
            },
            description: {
                type: String,
                // required: true
            }, 
            idx: {
                type: Number,
                // required: true
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            openModal(modalType) {
                this.$store.commit('openModal', modalType);
                // console.log(modalType, 'Modal-Opened');
            },
            delWorkItem(id) {
                console.log(id);
            }
        },
    }
</script>

<template>
    <tr @click="openModal('WorkDetails')">
        <td>
            <div>
                <div class="work-logo_image-container">
                    <div v-if="loc ==='Amazon'">
                        <!-- <AmazonIcon /> -->
                        <p>{{loc}}</p>
                    </div>
                    <div v-else-if="loc ==='Olivieri Foods'">
                        <p>{{loc}}</p>
                    </div>
                    <div v-else>
                        <p>{{loc}}</p>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div class="dates-output">
                <span class="works-dates-list">{{ time.startDate }}</span>
            </div>
        </td>
        <td>
            <div class="hours-output">
                <span class="works-hours-list">{{ time.duration }}</span>
            </div>
        </td>
        <td class="pay-output" :class="[payStatus? 'paid' : 'unpaid']"> 
            <span>{{$formatNum(pay)}}</span> 
        </td>
        <!-- <td @click="delWorkItem(idx)">DELETE</td>
        <td @click="editWorkItem(idx)">
            <EditIcon />
        </td> -->
    </tr>



</template>


<style>
    .d-flex{
        display: flex;
    }
    .align-center{
        align-items: center;
    }
    .width-full{
        width: 100%;
    }
    .dates-output{
        color: #757575;
    }
    .hours-output{
        color: #202124;
    }
    .pay-output{
        text-align: end;
    }
    /* td.pay-output span::after {
        content: url(/src/assets/Merlin2525_Paid_Business_Stamp_2.svg);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } */
    .works-dates-list, .works-hours-list{
        font-size: var(--table-font-size);
        display: block;
    }
    .vdots-icon-container{
        background-color: white;
        padding: 5px;
        border-radius: 50%;
    }
    .vdots-icon-container:hover{
        background-color: #ccc;
    }
    .view-details{
        padding: 20px 0 0;
        font-size: 14px;
    }
</style>
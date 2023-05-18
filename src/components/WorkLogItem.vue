<script>
    import AmazonIcon from '../components/icons/IconAmazon.vue'
    import VDotsIcon from '../components/icons/IconVDots.vue'
    import DeleteIcon from '../components/icons/IconDelete.vue'
    import EditIcon from '../components/icons/IconEditSquare.vue'
    
    export default {
        components: {
            AmazonIcon, VDotsIcon, DeleteIcon, EditIcon
        },
        props: {
            key: {
                type: String,
                // required: true
            },
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
                detailsExpand: false,
            }
        },
        methods: {
            openModal(modalType) {
                this.$store.commit('openModal', modalType);
                // console.log(modalType, 'Modal-Opened');
            },
            initDelWorkItem(id) {
                console.log(id);
            }
        },
    }
</script>

<template>
    <div class="shifts-list-item" @click="detailsExpand = !detailsExpand">
        <div class="visible">
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
        <div class="dates-output">
            <span class="works-dates-list">{{ time.startDate }}</span>
        </div>
        <div class="hours-output">
            <span class="works-hours-list">{{ time.duration }}</span>
        </div>
        <div class="pay-output" :class="[payStatus? 'paid' : 'unpaid']"> 
            <span>{{$formatNum(pay)}}</span> 
        </div>
        </div>
        <template  v-if="detailsExpand">
            <div class="hidden details-expand">
                <p>{{ description }}</p>
                <p class="start-time_render"><span>Start Timestamp: </span>{{ time.startDate }} {{ time.startTime }}</p>
                <p class="stop-time_render"><span>Stop Timestamp: </span>{{ time.endDate }} {{ time.endTime }}</p>
                <p>{{ key }}</p>
                <div class="action-buttons_box">
                    <button class="shift-edit_button" @click="editWorkItem(idx)"><EditIcon /> Edit</button>
                    <button class="shift-delete_button" @click="initDelWorkItem(key)"><DeleteIcon/> Delete</button>
                </div>
                
            </div>
        </template>
    </div>
</template>


<style>
    .shifts-list-item{
        border-top: 1px solid rgb(238, 238, 238);
        /* height: 44px; */
    }
    /* .shifts-list-item:first-child{
        border-radius: 8px 8px 0 0;
    } */
    .shifts-list-item:not(:last-child){
        margin-bottom: -1px;
    }
    /* .shifts-list-item:last-child{
        border-radius: 0 0 8px 8px;
    } */
    .shifts-list-item .visible{
        display: flex;
        /* justify-content: space-between; */
        grid-column-start: 1;
        grid-row-start: 1;
        transition: margin .3s ease-in-out, border-radius .1s ease-in-out .2s;
        padding: 13px 10px;
    }
    .shifts-list-item:not(:last-child) .visible:hover{
        background-color: #eaf3ff;
    }
    .work-logo_image-container{
        height: 100%;
        display: flex;
        flex: 0 0 calc(35% - 32px);
        align-items: center;
    }
    .work-logo_image-container p{
        margin: 0;
    }
    .shifts-list-item .hidden{
        padding: 13px 10px 26px;
    }
    .dates-output{
        color: #757575;
        font-size: var(--table-font-size);
        flex: 5 0 0;
    }
    .hours-output{
        color: #202124;
        font-size: var(--table-font-size);
        flex: 4 0 0;
    }
    .pay-output{
        text-align: end;
        font-size: var(--table-font-size);
        flex: 4 0 0;
    }
    .action-buttons_box{
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 8px;
    }
    .shift-delete_button, .shift-edit_button{
        background-color: transparent;
        color: grey;
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .shift-delete_button:hover, .shift-edit_button:hover{
        background-color: rgb(235, 235, 235);
    }
    .shift-edit_button svg{
        fill: grey;
    }
    .shift-delete_button svg{
        fill: grey;
    }
    /* td.pay-output span::after {
        content: url(/src/assets/Merlin2525_Paid_Business_Stamp_2.svg);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } */
    .works-dates-list, .works-hours-list{
        display: block;
    }
    .view-details{
        padding: 20px 0 0;
        font-size: 14px;
    }
    .details-expand .start-time_render, .details-expand .stop-time_render{
        color: #757575;
    }
</style>
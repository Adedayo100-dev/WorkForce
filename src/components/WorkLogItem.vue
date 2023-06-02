<script>
    import AmazonIcon from '../components/icons/IconAmazon.vue'
    import DeleteIcon from '../components/icons/IconDelete.vue'
    import EditIcon from '../components/icons/IconEditSquare.vue'
    
    export default {
        components: {
            AmazonIcon, DeleteIcon, EditIcon
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
    <div>
        <div class="display-option-row py-xsm px-std css-mmep5j" @click="detailsExpand = !detailsExpand">
            <div>
                <div class="css-szkv6d">{{loc}}</div>
                <div class="css-kx45yu">Hamilton, ON<span class="d-block-inline d-sm-none">&nbsp;| 5 years</span></div>
            </div>
            <div>
                <div class="css-szkv6d css-c7ebe2" :class="[payStatus? 'paid' : 'unpaid']">
                    <span>${{$formatNum(pay)}}</span>
                </div>
                <div class="css-kx45yu css-c7ebe2 css-dark-1">
                    <span class="shift-pay">$210 | </span>
                    <span class="shift-pay">$170 | </span>
                    <span class="shift-pay">$18.60</span>
                </div>
                
            </div>
            <div class="d-none d-sm-block">
                <div class="css-szkv6d">{{ time.duration.hours }} <span class="css-gwog64">hrs</span> {{ time.duration.minutes }}<span class="css-gwog64"> mins</span></div>
                <div>
                    <!-- {{ time.duration }} -->
                </div>
            </div>
            <div>
                <div class="shift-time">
                    <span>{{time.startDate}}</span>
                </div>
            </div>
        </div>
        <template  v-if="detailsExpand">
            <div class="hidden details-expand py-xsm px-std border-bottom" >
                <p>{{ description }}</p>
                <div>
                    <p class="start-time_render css-kx45yu"><span>Begins: </span>{{ time.startDate }} {{ time.startTime }}</p>
                    <p class="stop-time_render css-kx45yu"><span>Ends: </span>{{ time.endDate }} {{ time.endTime }}</p>
                </div>
                <!-- <p>{{ key }}</p> -->
                <div class="action-buttons_box">
                    <button class="shift-edit_button" @click="editWorkItem(idx)" title="Update All"><EditIcon width="14px" height="14px"/> Update</button>
                    <button class="shift-delete_button" @click="initDelWorkItem(key)" title="Delete All"><DeleteIcon width="14px" height="14px"/> Delete</button>
                </div>
                
            </div>
        </template>
    </div>

    <!-- <div class="shifts-list-item">
        <div class="visible">
            <div class="work-logo_image-container">
                <div v-if="loc ==='Amazon'">
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
        <div class="pay-output"> 
            <span>{{$formatNum(pay)}}</span> 
        </div>
        </div>
        
    </div> -->
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
        background-color: rgb(245 245 245);
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
        /* color: #757575; */
    }
</style>
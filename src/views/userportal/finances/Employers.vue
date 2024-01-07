<template>
    <div class="tab-pane" id="tab-all">
        <h4 class="section-title font-weight-500">Employers</h4>            

        <div class="add-shift_button-box justify-end">
            <FilterButton @click="openModal('NewFilter')"/>
            <AddButton @click="openModal('NewEmployer')">
                <span>New Entry</span>
            </AddButton>
        </div> 

        <!-- <input v-model="queryParameters" type="text"> -->
        <p>{{ this.$route.query }}</p>
             
        <div class="display-option container-fluid css-bt7gsy ml-none ml-sm-xxl border-x-none">
            <div class="display-option-row py-xsm px-std css-mmep5j css-10la47u">
                <div>
                    <div class="css-i8rtc8">Company / Agency</div>
                    <div class="d-block d-sm-none css-znfehe">Location | Total Experience</div>
                    <div class="d-none d-sm-block css-znfehe">Location</div>
                </div>
                <div>
                    <div class="css-i8rtc8 css-c7ebe2">Total Pay</div>
                    <div class="css-znfehe css-c7ebe2">Morning | Afternoon | Night</div>
                </div>
                <div class="d-none d-sm-block">
                    <div class="css-i8rtc8">Contacted <span>|</span> Registered <span>|</span> Employed</div>
                </div>
                <div class="d-none d-sm-block">
                    <div class="css-i8rtc8">Rotation</div>
                    <div class="css-znfehe css-c7ebe2">Morning | Afternoon | Night</div>
                </div>
            </div>
        </div>
        <div class="bank">            
            <div v-for="employer in employers.slice().reverse()"  :key="employer.id" class="display-option-row py-xsm px-std css-mmep5j">
                <div>
                    <div class="css-szkv6d">{{employer.name}}</div>
                    <div class="css-kx45yu">Hamilton, ON<span class="d-block-inline d-sm-none">&nbsp;| 5 years</span></div>
                </div>
                <div>
                    <div class="css-szkv6d css-c7ebe2">
                        <span>${{ employer.pay.afternoon }}</span><span class="css-gwog64">&nbsp;/hr</span>
                    </div>
                    <div class="css-kx45yu css-c7ebe2">
                        <span class="shift-pay">${{ employer.pay.morning }} | </span>
                        <span class="shift-pay">${{ employer.pay.afternoon }} | </span>
                        <span class="shift-pay">${{ employer.pay.night }} </span>
                    </div>
                    
                </div>
                <div class="d-none d-sm-block">
                    <div class="css-szkv6d">5 <span class="css-gwog64">years</span></div>
                    <div>
                        <VerifiedIcon :class="{ success: employer.contacted }"/>
                        <VerifiedIcon :class="{ success: employer.registered }"/>
                        <VerifiedIcon :class="{ success: employer.employed }"/>
                    </div>
                </div>
                <div>
                    <div class="shift-time" v-for="item in employer.time" :key="item.id">
                        <span>{{ item.startTime }} - {{ item.stopTime }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MessageDangerIcon from '../../../components/icons/IconMessageDanger.vue'
import VerifiedIcon from '../../../components/icons/IconVerified.vue'
import FilterButton from '../../../components/FilterButton.vue'
import AddButton from '../../../components/AddButton.vue'
import { useModalStore } from '../../../stores/modalStore'
import { useRouteStore } from '../../../stores/routeStore'
import socket from '../../../../socket'

export default {
    name: 'Employers',
    components: {
        MessageDangerIcon, FilterButton, AddButton, VerifiedIcon
    },
    data() {
        return {
            employers: [], // placeholder for the WorksList Data
            currentRoute: '',
            queryParameters: '', // Access query parameters from the URI
            // a: 'ok'
        }
    },
    methods: {
        openModal(modalType) {
            useModalStore().openModal(modalType)
            // console.log(modalType, 'Modal-Opened');
        },
        fetchEmployers() {
            axios.get('http://localhost:3000/api/employers', { params: this.queryParameters })
            .then((res) => {
                this.employers = res.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err.message)
            });
        }
    },
    watch: {
        queryParameters: {
            handler(newValue){
                console.log(newValue);
            },
            deep: true
        },
        // queryParameters(newValue){
        //     console.log(newValue)
        // }
    },
    created() {
        this.fetchEmployers();
        this.currentRoute = this.$route.path;
        useRouteStore().updatePath(this.currentRoute);

        // console.log(this.queryParameters);
    },
    setup() {
        socket.on('employer-db-change', (data) => {
            console.log(data.operationType);
            // this.fetchEmployers();
        });
    },
}
</script>

<style scoped>
@import "../../../assets/flex.css";
    
</style>
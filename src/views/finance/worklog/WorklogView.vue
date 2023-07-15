<script>
import AddButton from '../../../components/AddButton.vue'
import TableIcon from '../../../components/icons/IconTable.vue'
import GraphIcon from '../../../components/icons/IconGraph.vue'
import FilterButton from '../../../components/FilterButton.vue'
import axios from 'axios'
import { useModalStore } from '../../../stores/modalStore'

export default {
    components: {
        AddButton, TableIcon, GraphIcon, FilterButton
    },
    props: ['title'],
    data() {
        return {
            worksList: [],
            transactions: [],
            // nairaPaid: 822000,
            nairaTotal: 2000000,
            dollarTotal: 2500,
            exchangeRate: 560,
            errorMsg: '',
            currentRoute: '',
        }
    },
    computed: {
        
        totalPay() {
            return parseFloat(this.worksList.reduce((acc, item) => acc + item.pay, 0).toFixed(2));
        },
        totalShifts() {
            return this.worksList.length;
            // var numDates = 0;
            // this.worksList.forEach(
            //     function(a,b) {
            //         numDates += a.time.startDate.length;
            //     }
            // );
            // return numDates;
        }
    },
    methods: {
        fetchWorks(){
            const queryParameters = this.$route.query; // Access query parameters from the URI

            axios.get('http://localhost:3000/api/worksList', { params: queryParameters })
            .then((res) => {
                this.worksList = res.data;
                console.log(res.data);        
            })
            .catch((err) => {
                console.error(err.message)
                this.errorMsg = 'error retrieving data';
            });
        },
        openModal(modalType) {
            useModalStore().openModal(modalType)
        }
    },
    created() {
        this.fetchWorks();
        this.currentRoute = this.$route.path;
    }
}
</script>

<template>
    <div class="work-log-box">
        <div class="title-top">
            <!-- ul used to be here -->
            <div class="add-shift_button-box justify-end">
                <ul class="link-tab-group">
                    <li>
                        <router-link to="/finance/worklog/tabular" class="tab-link" title="Tabular">
                            <TableIcon width="20px" height="20px"/>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/finance/worklog/graphical" class="tab-link" title="Graphical">
                            <GraphIcon width="20px" height="20px"/>
                        </router-link>
                    </li>
                </ul>
                <FilterButton  @click="openModal('NewFilter')"/>
                <AddButton  @click="openModal('NewShift')">
                    <span>New Entry</span>
                </AddButton>
            </div>
        </div>
        <div class="work-log" id="workLog">
            <div>
                <!-- Render Views Here -->
                <div v-if="worksList[0]">
                    <router-view :worksList="worksList" :totalShifts="totalShifts" :totalPay="totalPay">
                    </router-view>
                </div>

                <div v-else class="d-center my-100">
                    <div>
                        <div class="text-center">
                            <p>There isn't any data to display at the moment</p>
                        </div>
                        <div class="text-center">
                            <p>Click the Add Shift Button to add a shift</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    /* .transactions-binder{
        display: flex;
        gap: 28px;
    } */
    
</style>
<script>
import AddButton from '../../../components/AddButton.vue'
import IncomeCalculator from '../../../components/IncomeCalculator.vue'
import UnseeIcon from '../../../components/icons/IconUnview.vue'
import TableIcon from '../../../components/icons/IconTable.vue'
import GraphIcon from '../../../components/icons/IconGraph.vue'
import FilterButton from '../../../components/FilterButton.vue'
import axios from 'axios'


export default {
    components: {
        AddButton, IncomeCalculator, TableIcon, GraphIcon, FilterButton, UnseeIcon
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
            errorMsg: ''
        }
    },
    created() {
        axios.get('http://localhost:3000/api/worksList')
            .then((res) => {
                this.worksList = res.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message)
                this.errorMsg = 'error retrieving data';
            });
        
    },
    // beforeMount() {
    //     if (this.worksList = {}) {
    //         console.log("Workslist is active but empty")
    //     }
    //     else{
    //         console.log(typeof this.worksList);
    //     }
    // },
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
        openModal(modalType) {
            this.$store.commit('openModal', modalType);
            // console.log(modalType, 'Modal-Opened');
        }
    },
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
                            <TableIcon/>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/finance/worklog/graphical" class="tab-link" title="Graphical">
                            <GraphIcon/>
                        </router-link>
                    </li>
                </ul>
                <FilterButton/>
                <AddButton  @click="openModal('NewShift')">
                    <span> Add Shift</span>
                </AddButton>
            </div>
            <div class="work-log-filter-box">
                <div class="entries_input_container">
                    <input type="checkbox" name="" id="">
                    <small>Show </small>
                    <input type="number" class="entries_input" value="99" > <!-- Toggle disabled-->
                    <small> entries</small>
                </div>

                <form action="/search" class="filter_input-group">
                    <input type="search" placeholder="Search">
                    <div class="select-box">
                        <div class="vertical-divider"></div>
                        <select name="browser">
                            <option value="all">All</option>
                            <option value="minova">Minova</option>
                            <option value="amazon">Amazon</option>
                            <option value="lcbo">LCBO</option>
                            <option value="pro-bell">PRO-BELL</option>
                            <option value="mondelez">Mondelez</option>
                            <option value="ferrero">Ferrero</option>
                            <option value="aspire">Aspire</option>
                            <option value="upseat">Upseat</option>
                        </select>
                    </div>
                    
                </form>
                <div class="work-log-flank-right">
                    <router-link to="#totalShifts">&#8645;</router-link>
                    <UnseeIcon />

                </div>
            </div>
        </div>
        <div class="work-log" id="workLog">
            <div>
                <!-- Render Views Here -->
                <router-view :worksList="worksList" :totalShifts="totalShifts" :totalPay="totalPay">

                </router-view>

                <div class="tithe">
                    <div class="contribution">
                        <div class="first-tithe-box">
                            <form oninput="x.value='₦'+(parseInt(a.value)*parseInt(b.value)).toLocaleString('en-US')">
                                <div class="func-container">
                                    <span>Percentages: </span>
                                    <div class="calc-container">
                                        <input type="number" name="" id="a" :value="totalPay / 10" placeholder="$">
                                        <pre> * </pre>
                                        <input type="number" name="" id="b" :value="exchangeRate" placeholder="Rate">
                                        <pre> = </pre>
                                        <output name="x" for="a  b"></output>
                                    </div>
                                </div>
                            </form>
                            <br>
                            <form oninput="y.value='₦'+(parseInt(c.value)*parseInt(d.value)).toLocaleString('en-US')">
                                <div class="func-container">
                                    <span>Send Home: </span>
                                    <div class="calc-container">
                                        <input type="number" name="" id="c" placeholder="$">
                                        <pre> * </pre>
                                        <input type="number" name="" id="d" :value="exchangeRate" placeholder="Currency Rate">
                                        <pre> = </pre>
                                        <output name="y" for="c d"></output>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <hr class="">
                        <div class="second-tithe-box">
                            <p>
                                {{$formatNum(75459384)}}
                            </p>
                        </div>
                    </div>
                    <IncomeCalculator/>
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
    .select-box{
        position: relative;
        display: inline-block;
    }
    .vertical-divider{
        border-left: 1px solid #ebebeb;
        position: absolute;
        top: 8px;
        bottom: 8px;
        z-index: 3;
    }
</style>
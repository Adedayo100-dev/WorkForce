<script>
import FilterIcon from '../../../components/icons/IconFilter.vue'
import FormatNumMixin from '../../../mixins/toLocaleString.js'

export default {
    components: {
        FilterIcon
    },
    props: ['title'],
    data() {
        return {
            worksList: [],
            nairaPaid: 598000,
            nairaTotal: 2000000,
            exchangeRate: 645, 
        }
    },
    mounted() {
        fetch('http://localhost:3000/api/worksList')
            .then(res => res.json())
            .then(data => this.worksList = data)
            .catch(err => console.log(err.message));
    },
    computed: {
        totalPay() {
            return this.worksList.reduce((acc, item) => acc + item.pay, 0).toFixed(2);
        },
        totalShifts() {
            var numDates = 0;
            this.worksList.forEach(
                function(a,b) {
                    numDates += a.dates.length;
                }
            );
            return numDates;
        },
        paidPercentage(){
            return this.nairaPaid / this.nairaTotal*100;
        }
    },
    methods: {
        
    },
    mixins: [FormatNumMixin],
}
</script>

<template>
    <div class="work-log-box">
        <div class="title-top">
            <ul class="link-tab-group">
                <li>
                    <router-link to="/jobs/worklog/tabular" class="tab-link">Tabular</router-link>
                </li>
                <li>
                    <router-link to="/jobs/worklog/graphical" class="tab-link">Graphical</router-link>
                </li>
            </ul>
            <div class="add-shift_button-box justify-end">
                <button class="filter_button">
                    Filter <FilterIcon />
                </button>
                <button class="add-shift_button">
                    <router-link to="/jobs/newshift">+  Add <span class="responsive-toggle">Work</span> Shift</router-link>
                </button>
            </div>
            <div class="work-log-filter-box">
                <form action="worklog/search">
                    <input type="search" placeholder="Search">
                </form>
                <div class="work-log-flank-right">
                    <router-link to="#totalShifts">&#8645;</router-link>
                </div>
            </div>
        </div>
        <div class="work-log" id="workLog">
            <div>
                <!-- Render Views Here -->
                <router-view :worksList="worksList" :totalShifts="totalShifts" :totalPay="totalPay">

                </router-view>

                <div class="tithe">
                    <div class="first-tithe-box">
                        <form oninput="x.value='₦'+(parseInt(a.value)*parseInt(b.value)).toLocaleString('en-US')">
                            <div class="func-container">
                                <span>Tithe: </span>
                                <div class="calc-container">
                                    <input type="number" name="" id="a" :value="totalPay / 10" placeholder="$">
                                    <pre> * </pre>
                                    <input type="number" name="" id="b" :value="exchangeRate" placeholder="Currency Rate">
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
                        <br>
                        <div>
                            <div>
                                <div class="transaction-list">
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
                            </div>
                            <br>
                            <div>
                                <span>Remaining: </span>
                                <p>₦2000000 - ₦598000 = ₦1402000</p>
                                <p>₦1402000 / 545 = $2572.48</p>
                            </div>
                        </div>
                    </div>
                    <hr class="">
                    <div class="second-tithe-box">
                        <div class="paid-percentage-box">
                            <h3>{{paidPercentage}}%</h3>
                            <span>paid</span>
                        </div>
                        <p>
                            {{formatNum(75459384)}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
   
</style>
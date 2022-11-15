<script>
import FilterIcon from '../../../components/icons/IconFilter.vue'

export default {
    components: {
        FilterIcon
    },
    props: ['title'],
    data() {
        return {
            worksList: [],  
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
        }
    }
}
</script>

<template>
    <div class="work-log-box">
        <div class="title-top">
            <router-link to="/jobs/worklog/tabular">Tabular</router-link>
            <router-link to="/jobs/worklog/graphical">Graphical</router-link>
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
                    <span>{{totalPay * 0.1}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
   
</style>
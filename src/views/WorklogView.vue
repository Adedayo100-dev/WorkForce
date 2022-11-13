<script>
import WorkLogItem from '../components/WorkLogItem.vue'
import FilterIcon from '../components/icons/IconFilter.vue'
import UnseeIcon from '../components/icons/IconUnview.vue'


export default {
    components: {
        WorkLogItem, FilterIcon, UnseeIcon
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
            return this.worksList.reduce((acc, item) => acc + item.pay, 0).toFixed(3);
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
    },
}
</script>

<template>
    <div class="work-log-box">
        <div class="title-top">
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
                
                <div class="work-log-list-container">
                    <table>
                        <thead>
                            <tr>
                                <td>Location</td>
                                <td>Date</td>
                                <td class="pay-header">
                                    <div class="">
                                        <span>(CAD) Pay</span>
                                        <UnseeIcon />
                                    </div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <WorkLogItem v-for="(work, index) in worksList" :key="work.id" :loc="work.loc" :dates="work.dates" :pay="work.pay" :payStatus="work.payStatus" :idx="index"/>
                            <tr id="totalShifts">
                                <td>
                                    <p>Total</p>
                                </td>
                                <td class="dates-output">{{totalShifts}} shifts</td>
                                <td class="text-bold pay-output">
                                    <span>{{totalPay}}</span>
                                </td>
                                <!-- <td colspan="3" style="color: #757575;">This is the total sum of all work done from May, 2022 to present......</td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- <div class="add-shift_button-box justify-center mt-40 mb-40">
                    <button class="add-shift_button">+ Add Work Shift</button>
                </div> -->
                <!-- <div class="work-shifts-total-box">
                    <form action="" id="addShift">
                        <select v-model="inputLocation" name="" id="" class="work-log_form-control_input">
                            <option disabled value="">Location</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Ferrero">Ferrero</option>
                            <option value="Aspire">Aspire</option>
                            <option value="Mondelez">Mondelez</option>
                            <option value="Upseat">Upseat</option>
                        </select>
                        <div class="date_form-control">
                            <input v-model="inputDate" type="date" name="" id=""  class="work-log_form-control_input">
                            <button class="add-new-date">
                                +
                            </button>
                        </div>
                        <input v-model="inputPay" type="number" inputmode="decimal" name="" id="" style="width: 90px" placeholder="pay($)"  class="work-log_form-control_input">
                        <input type="submit" value="Add" class="add-shift_button">
                    </form>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style>
   
</style>
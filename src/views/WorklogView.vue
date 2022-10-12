<script>
import WorkLogItem from '../components/WorkLogItem.vue'
import FilterIcon from '../components/icons/IconFilter.vue'
import UnseeIcon from '../components/icons/IconUnview.vue'


export default {
    components: {
        WorkLogItem, FilterIcon, UnseeIcon
    },
    data() {
        return {
            worksList: [
                {id: '1', loc: 'LCBO & PRO-BELL', dates: ['Feb 17, 2022 - Apr, 2022'], pay: 2027.63, payStatus: true},
                {id: '3', loc: 'Olivieri', dates: ['Thur May 5, 2022'], pay: 112.32, payStatus: true},
                {id: '4', loc: 'Amazon', dates: ['Fri May 6, 2022', 'Sat May 7, 2022'], pay: 231.68, payStatus: true},
                {id: '5', loc: 'Original Foods', dates: ['Wed May 11 2022'], pay: 231.68, payStatus: true},
                {id: '7', loc: 'Amazon', dates: ['Fri May 13, 2022', 'Sat May 14, 2022'], pay: 267.16, payStatus: true},
                {id: '8', loc: 'Original Foods', dates: ['Mon May 16, 2022', 'Wed 18, 2022'], pay: 204, payStatus: true},
                {id: '9', loc: 'Amazon', dates: ['Fri May 20, 2022', 'Sat May 21, 2022'], pay: 259.74, payStatus: true},
                {id: '10', loc: 'Amazon', dates: ['Fri May 27, 2022', 'Sat May 28, 2022'], pay: 321.41, payStatus: true},
                {id: '11', loc: 'Original Foods', dates: ['Tue May 31, 2022'], pay: 104, payStatus: true},
                {id: '12', loc: 'Amazon', dates: ['Fri June 3, 2022', 'Sat June 4, 2022'], pay: 263.98, payStatus: true},
                {id: '13', loc: 'Amazon', dates: ['Fri June 10 2022', 'Fri June 11, 2022'], pay: 265.58, payStatus: true},
                {id: '14', loc: 'Amazon', dates: ['Fri June 17 2022', 'Fri June 18, 2022'], pay: 262.71, payStatus: true},
                {id: '15', loc: 'Amazon', dates: ['Sat June 25, 2022'], pay: 131.12, payStatus: true},
                {id: '16', loc: 'Mondelez/Ferrero', dates: ['Mon June 27, 2022 (Mon)', 'Tue June 28, 2022 (Mon)', 'Wed June 29, 2022 (Mon)', 'Thur June 30, 2022 (Fer)'], pay: 713.25 , payStatus: true},
                {id: '17', loc: 'Mondelez', dates: ['Sat July 2, 2022'], pay: 183.25, payStatus: true},
                {id: '18', loc: 'Mondelez/Ferrero', dates: ['Sun July 3, 2022', 'Tue July 5, 2022'], pay: 368.75, payStatus: true},
                {id: '19', loc: 'Ferrero', dates: ['Sat July 9, 2022'], pay: 163.25, payStatus: true},
                {id: '20', loc: 'Mondelez', dates: ['Sun July 10, 2022'], pay: 183.25, payStatus: true},
                {id: '21', loc: 'Amazon', dates: ['Sat July 16, 2022'], pay: 135.11, payStatus: true},
                {id: '22', loc: 'Aspire', dates: ['Mon July 18, 2022'], pay: 170, payStatus: true},
                {id: '23', loc: 'Amazon', dates: ['Fri July 22, 2022', 'Sat July 23, 2022'], pay: 265.58, payStatus: true},
                {id: '24', loc: 'Amazon', dates: ['Fri July 29, 2022'], pay: 133.03, payStatus: true},
                {id: '25', loc: 'Ferrero', dates: ['Wed August 3, 2022'], pay: 163.25, payStatus: true},
                {id: '26', loc: 'Amazon', dates: ['Fri August 5, 2022', 'Sat August 6, 2022'], pay: 265.89, payStatus: true},
                {id: '27', loc: 'Amazon', dates: ['Fri August 19, 2022', 'Sat August 20, 2022'], pay: 272.41, payStatus: true},
                {id: '28', loc: 'GFL', dates: ['Fri August 24'], pay: 149.87, payStatus: true},
                {id: '29', loc: 'Amazon', dates: ['Fri August 26, 2022', 'Sat August 27, 2022'], pay: 266.37, payStatus: true},
                {id: '30', loc: 'Nuvate', dates: ['Wed August 31, 2022', 'Thur September 1, 2022', 'Fri September 2, 2022'], pay: 376.82, payStatus: true},
                {id: '31', loc: 'Amazon', dates: ['Fri September 2, 2022', 'Sat September 3, 2022'], pay: 260.32, payStatus: true},
                {id: '32', loc: 'Nuvate', dates: ['Tue September 6'], pay: 137.35, payStatus: true},
                {id: '33', loc: 'Amazon', dates: ['Fri September 9, 2022', 'Sat September 10, 2022'], pay: 305.46, payStatus: true},
                {id: '34', loc: 'Amazon', dates: ['Fri September 16, 2022', 'Sat September 17, 2022'], pay: 266.05, payStatus: true},
                {id: '35', loc: 'Amazon', dates: ['Fri September 23, 2022', 'Sat September 24, 2022'], pay: 266.05, payStatus: true},
                {id: '36', loc: 'Amazon', dates: ['Sat 01 September, 2022'], pay: 130.6, payStatus: true},
                {id: '37', loc: 'Amazon', dates: ['Sat 07 September, 2022'], pay: 131.1, payStatus: false},
                {id: '38', loc: 'Aspire', dates: ['Wed 12 September, 2022', 'Thur 13 September, 2022'], pay: 340, payStatus: false},
                {id: '39', loc: 'Amazon', dates: ['Fri 14 September, 2022', 'Sat 15 September, 2022'], pay: 265, payStatus: false}
                // {id: '37', loc: 'Amazon', dates: ['Sat 01 September, 2022'], pay: , payStatus: true},
            ],
            inputLocation: '',
            inputDate: '',
            inputPay: ''
        }
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
            <h3>Working Log book</h3>
            <div class="add-shift_button-box justify-end">
                <button class="filter_button">
                    Filter <FilterIcon />
                </button>
                <button class="add-shift_button">+  Add Work Shift</button>
            </div>
            <div class="work-log-filter-box">
                <form action="">
                    <input type="text" placeholder="Search">
                </form>
                <div>
                    
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
                            <tr>
                                <td>Total</td>
                                <td class="dates-output">{{totalShifts}} shifts</td>
                                <td class="total-pay-output pay-output">
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
                <div class="work-shifts-total-box">
                    <form action="" id="addShift">
                        <select v-model="inputLocation" name="" id="" class="work-log_form-control_input">
                            <option disabled value="">Location</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Ferrero">Ferrero</option>
                            <option value="Aspire">Aspire</option>
                            <option value="Mondelez">Mondelez</option>
                            <option value="Nuvate">Nuvate</option>
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
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .title-top{
        /* padding: 10px 0 0px; */
        background-color: white;
        position: sticky;
        top: 0;
    }
    thead td{
        font-size: 14px;
    }
    .pay-header{
        text-align: end;
    }
    .pay-header>div{
        display: flex;
        justify-content: end;
        column-gap: 8px;
    }
    tbody{
        font-size: 14px;
        overflow-y: scroll;
        height: 500px;
    }
    .add-shift_button-box{
        display: flex;
    }
    .mt-40{
        margin-top: 40px;
    }
    .mb-40{
        margin-bottom: 40px;
    }
    .justify-center{
        justify-content: center;
    }
    .justify-end{
        justify-content: end;
    }
    .add-shift_button{
        background-color: #018786;
        color: white;
    }
    .add-shift_button:hover{
        background-color: #016362;
        color: white;
    }
    .filter_button, .add-shift_button{
        border: none;
        border-radius: 4px;
        padding: 10px 30px;
        margin-left: 10px;
    }
    .filter_button{
        border: 1px solid rgb(235, 235, 235);
        color: #262626;
        background-color: rgb(250,250,250);
        display: inline-flex;
        gap: 5px;
    }
    .filter_button:hover{

    }
    .work-log-filter-box{
        display: flex;
        padding: 12px 0px;
    }
    .total-pay-output{
        font-weight: bold;
    }
    .work-log-filter-box input{
        padding: 8px 10px;
        border: 1px solid rgb(235, 235, 235);
        outline: none;
    }
    .work-shifts-total-box{
        padding-top: 12px;
    }
    #addShift{
        display: flex;
        justify-content: space-between;
    }
    .work-log_form-control_input{
        padding: 0 12px;
        border: 1px solid rgb(238, 238, 238);
    }
    .date_form-control{
        display: flex;
        gap: 10px;
    }
    .add-new-date{
        border: 1px solid rgb(235, 235, 235);
        border-radius: 4px;
        padding: 10px 12px;
    }
</style>
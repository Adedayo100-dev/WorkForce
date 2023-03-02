<script>
// import FormatNumMixin from '../mixins/toLocaleString.js'

export default {
    name: 'IncomeCalculator',
    data() {
        return {
            regPay: 19,
            hoursWorked: '',
        }
    },
    computed: {
        regHours(){
            if (this.hoursWorked > 40) {
                return 40;
            } else if(this.hoursWorked <= 40) {
                return this.hoursWorked;
            }
        },
        overTimePay(){
            return this.regPay * 1.5;
        },
        overTimeHours(){
            if (this.hoursWorked > 40) {
                return parseFloat((this.hoursWorked - 40).toFixed(2));
            } else if(this.hoursWorked <= 40) {
                return 0;
            }
        },
        regIncome(){
            return parseFloat((this.regHours * this.regPay).toFixed(2));
        },
        overTimeIncome(){
            return parseFloat((this.overTimeHours * this.overTimePay).toFixed(2));
        },
        workIncome(){
            return this.regIncome + this.overTimeIncome;
        },
        vacationPay(){
            return parseFloat((this.workIncome * 0.04).toFixed(2));
        },
        grossIncome(){
            return this.regIncome + this.overTimeIncome + this.vacationPay;
        },
        cppCalc(){
            if (this.hoursWorked > 42) {
                return parseFloat((this.grossIncome * 0.055695).toFixed(2));
            } else if(this.hoursWorked <= 42) {
                return parseFloat((this.grossIncome * 0.055695).toFixed(2));
            }
        },
        totalDeductions(){
            return parseFloat((this.grossIncome - this.netIncome).toFixed(2));
        },
        netIncome(){
            if (this.hoursWorked > 43) {
                return parseFloat(((this.grossIncome * 0.643576) + 145.881).toFixed(2));
            } else if(this.hoursWorked <= 43) {
                return parseFloat(((this.grossIncome * 0.738687) + 53.4623).toFixed(2));
            }
            
        }
    },
    // mixins: [FormatNumMixin],
}
</script>

<template>
    <div class="income-calc">
        <div class="func-container">
            <span>Income: </span>
            <div class="calc-container">
                <input type="number" v-model="hoursWorked" placeholder="hrs">
            </div>
        </div>
        <br>
        <table style="border:none; max-width: 524px;">
            <thead></thead>
            <tbody>
                <tr>
                    <td>Regular</td>
                    <td>{{ regHours }} hrs</td>
                    <td>${{ regPay }}</td>
                    <td>${{ regIncome }}</td>
                </tr>
                <tr>
                    <td>Over Time</td>
                    <td>{{overTimeHours}} hrs</td>
                    <td>${{ overTimePay }}</td>
                    <td>${{ overTimeIncome }}</td>
                </tr>
                <tr class="border-width-3">
                    <td>Vacation Pay</td>
                    <td>-</td>
                    <td>${{ vacationPay }}</td>
                    <td>${{ vacationPay }}</td>
                </tr>
                <tr class="text-bold">
                    <td>Gross Income</td>
                    <td colspan="3" class="text-end">${{ $formatNum(grossIncome) }}</td>
                    
                </tr>
                <tr>
                    <td>Federal Tax</td>
                    <td colspan="2"></td>
                    <td class="">-${{ federalTax }}</td>
                </tr>
                <tr>
                    <td>CPP</td>
                    <td colspan="2"></td>
                    <td class="">-${{ cppCalc }}</td>
                </tr>
                <tr>
                    <td>EI Deductions</td>
                    <td colspan="2"></td>
                    <td class="">-${{ eI }}</td>
                </tr>
                <tr class="border-width-3">
                    <td>Total Deductions</td>
                    <td colspan="2"></td>
                    <td class="">-${{ totalDeductions }}</td>
                </tr>
                <tr class="text-bold border-none">
                    <td>Net Income</td>
                    <td colspan="3" class="text-end">${{ $formatNum(netIncome) }}</td>
                </tr>
            </tbody>
        </table> 

        <span>Probable Income: {{ netIncome }}</span>      
    </div>
</template>

<style>

</style>
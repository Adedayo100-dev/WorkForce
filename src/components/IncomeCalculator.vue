<script>

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
        netIncome(){
            return this.regIncome + this.overTimeIncome + this.vacationPay;
        },
        federalTax() {
            return 0;
        },
        cppCalc(){
            if (this.hoursWorked > 42) {
                return parseFloat((this.netIncome * 0.055695).toFixed(2));
            } else if(this.hoursWorked <= 42) {
                return parseFloat((this.netIncome * 0.055695).toFixed(2));
            }
        },
        eI() {
            return parseFloat((this.netIncome * 0.0163).toFixed(2));
        },
        totalDeductions(){
            return parseFloat((this.netIncome - this.grossIncome).toFixed(2));
        },
        grossIncome(){
            var g = this.netIncome;
            if (g < 610) { // this.hoursWorked > 43
                return parseFloat(((g * 0.643576) + 145.881).toFixed(2));
            } else if(g >= 610 && g < 1018.6964) { // this.hoursWorked <= 43
                return parseFloat(((g * 0.713397) + 73.0862).toFixed(2));
            } else if(g >= 1018.6964 && g < 1060){
                return parseFloat(((g * 0.643939) + 145.502).toFixed(2)); // (0.697985, 85.6702)
            } else if(g >= 1060){
                return parseFloat(((g * 0.642560379) + 146.9457319).toFixed(2)); // (0.697985, 85.6702)
            }
            
        }
    }
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
                    <td>Overtime</td>
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
                    <td colspan="3" class="text-end">${{ $formatNum(netIncome) }}</td>
                    
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
                    <td colspan="3" class="text-end">${{ $formatNum(grossIncome) }}</td>
                </tr>
            </tbody>
        </table> 

        <span>Probable Income: {{ grossIncome }}</span>      
    </div>
</template>

<style>

</style>
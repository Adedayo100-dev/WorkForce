<template>
    <div class="tab-pane " id="tab-availability">
        <h4>Availability</h4>
        <div id="availability">
            <table>
                <tr>
                    <td>Monday</td>
                    <td>from 4 pm for 12hrs</td>
                </tr>
                <tr>
                    <td><b>Tuesday</b></td>
                    <td>night</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>from 3 pm for 8hrs</td>
                </tr>
                <tr>
                    <td><b>Thursday</b></td>
                    <td>All day</td>
                </tr>
                <tr>
                    <td><b>Friday</b></td>
                    <td>from 4 pm and <b>night</b></td>
                </tr>
                <tr>
                    <td><b>Saturday</b></td>
                    <td>day and <b>night</b></td>
                </tr>
                <tr>
                    <td><b>Sunday</b></td>
                    <td>day and <b>night</b></td>
                </tr>
            </table>

            <br>
            <div class="weekly-availability">
                <table >
                    <thead>
                        <tr>
                            <td class="company-name">Day/Company</td>
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="company-name">Kelly</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="company-name">is2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="company-name">Service Master</td>
                            <td colspan="5">invalid</td>
                            <td class="work-active" colspan="2">active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.weekly-availability td{
    text-align: center;
    border-left: 1px solid rgb(238, 238, 238);
}
.company-name{
    background-color: #f4f4f6;
}
.work-active{
    background-color: rgba(0, 128, 0, 0.25);
}
</style>
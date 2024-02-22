<template>
    <div class="allplans-box">
        <h3>All Tasks</h3>
        <ul>
            <li>Activate KOHO card</li>         
            <li>Do CCNA Exam ~$458 - $464</li>
            <li>Apply for jobs</li>
            <li>
                After I get a job:
                <ul>
                    <li>Continue building my skills</li>
                    <li>Register fro driving school (online classes) - $693.95</li>
                    <li></li>
                </ul>
            </li>
            <li>Buy a Toyota car (venza)</li>
            <li>
                <input v-model="newPlanItem" placeholder="New Item" class="plan-list_input"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
ul{
    list-style-type: initial;
    padding-left: 40px;
}
</style>
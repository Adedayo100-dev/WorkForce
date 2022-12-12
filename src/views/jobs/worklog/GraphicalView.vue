<template>
    <div>
        <svg class="render-canva"></svg>
    </div>
</template>

<script>
import 'https://d3js.org/d3.v7.min.js';


export default {
    props: {
        worksList: {
            type: Array
        }, 
        totalShifts: {
            type: Number
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <svg class="render-canva"></svg>
    </div>
</template>

<script>
import 'https://d3js.org/d3.v7.min.js';

const div = d3.select('svg.render-canva');

div.append('circle')
    .attr('cx', '50%')
    .attr('cy', '50%')
    .attr('r', 20)
    .style('fill', 'green');

// div.selectAll()
//     .data(rides)
//     .enter()
//     .update()
//     .exit()

console.log("Hello, How are you!");

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
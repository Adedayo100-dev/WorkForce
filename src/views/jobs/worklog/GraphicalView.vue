<script>
// mychart.js
// import { Highcharts } from 'highcharts/modules/exporting';
// Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);
// import 'https://code.highcharts.com/highcharts.js'
// import 'https://code.highcharts.com/modules/exporting.js'
// import 'https://code.highcharts.com/modules/export-data.js'
// import 'https://code.highcharts.com/modules/accessibility.js'
// import 'https://code.highcharts.com/es-modules/Series/Line/LineSeries.js';
// import 'https://code.highcharts.com/es-modules/Series/Column/ColumnSeries.js';
// var Highcharts = require('highcharts');  

// Example to create a simple column chart in a div#container:
// const myChart = new Chart('container');
// const mySeries = new PieSeries();
// mySeries.init(myChart, { data: [1, 2, 3] });
// import Highcharts from 'highcharts'
// import Chart from 'highcharts/es-modules/Core/Chart/Chart.js';
// import PieSeries from 'highcharts/es-modules/Series/Pie/PieSeries.js';

// Chart(Highcharts);
// PieSeries(Highcharts);

// Highcharts.chart('container', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: 'Browser market shares in May, 2020',
//         align: 'left'
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//             }
//         }
//     },
//     series: [{
//         name: 'Brands',
//         colorByPoint: true,
//         data: [{
//             name: 'Chrome',
//             y: 70.67,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Edge',
//             y: 14.77
//         },  {
//             name: 'Firefox',
//             y: 4.86
//         }, {
//             name: 'Safari',
//             y: 2.63
//         }, {
//             name: 'Internet Explorer',
//             y: 1.53
//         },  {
//             name: 'Opera',
//             y: 1.40
//         }, {
//             name: 'Sogou Explorer',
//             y: 0.84
//         }, {
//             name: 'QQ',
//             y: 0.51
//         }, {
//             name: 'Other',
//             y: 2.6
//         }]
//     }]
// });

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

<template>
    <div>
        <div class="render-canvas" id='container'></div>
    </div>
</template>



<style>

</style>
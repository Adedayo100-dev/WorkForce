<script>
// mychart.js
import { Highcharts } from 'highcharts/modules/exporting';
import 'https://code.highcharts.com/highcharts.js'
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
import Chart from 'https://code.highcharts.com/es-modules/Core/Chart/Chart.js';
// import LineSeries from 'https://code.highcharts.com/es-modules/Series/Line/LineSeries.js';
// import ColumnSeries from 'https://code.highcharts.com/es-modules/Series/Column/ColumnSeries.js';
import PieSeries from 'https://code.highcharts.com/es-modules/Series/Pie/PieSeries.js';
// var Highcharts = require('highcharts');  

// Example to create a simple column chart in a div#container:
// const myChart = new Chart('container');
// const mySeries = new PieSeries();
// mySeries.init(myChart, { data: [1, 2, 3] });

Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 70.67,
            sliced: true,
            selected: true
        }, {
            name: 'Edge',
            y: 14.77
        },  {
            name: 'Firefox',
            y: 4.86
        }, {
            name: 'Safari',
            y: 2.63
        }, {
            name: 'Internet Explorer',
            y: 1.53
        },  {
            name: 'Opera',
            y: 1.40
        }, {
            name: 'Sogou Explorer',
            y: 0.84
        }, {
            name: 'QQ',
            y: 0.51
        }, {
            name: 'Other',
            y: 2.6
        }]
    }]
});

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
        <div class="container" id='container'></div>
    </div>
</template>



<style>

</style>
<script>
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'


// Example to create a simple column chart in a div#container:
// const myChart = new Chart('container');
// const mySeries = new PieSeries();
// mySeries.init(myChart, { data: [1, 2, 3] });

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
    name: 'GraphicalView',
    components: {
        HighchartsVue
    },
    props: {
        worksList: {
            type: Array
        }, 
        totalShifts: {
            type: Number
        }
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'My Chart'
                },
                series: [
                    {
                        name: 'My Series',
                        data: [1, 2, 3, 4, 5]
                    }
                ]
            }
        }
    },
    mounted() {
        Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
        })
    }
}
</script>

<template>
    <highcharts :options="chartOptions" />
    <!-- <div>
        <div class="render-canvas" id='container'></div>
    </div> -->
</template>



<style>

</style>
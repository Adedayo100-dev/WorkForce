<script>
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import {Chart} from 'highcharts-vue'
// import exportingInit from 'highcharts/modules/exporting'
// import PieSeries from 'highcharts/es-modules/Series/Pie/PieSeries.js';
// import LineSeries from 'highcharts/es-modules/Series/Line/LineSeries.js';
// import ColumnSeries from 'highcharts/es-modules/Series/Column/ColumnSeries.js';
// import DataLabel from 'highcharts/es-modules/Core/Series/DataLabel.js';
// import PieDataLabel from 'highcharts/es-modules/Series/Pie/PieDataLabel.js';


// exportingInit(Highcharts)


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
        Highcharts, highcharts: Chart
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
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                // series: [{
                //     data: [1,2,3] // sample data
                // }],
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
            }
        }
    },
    // mounted() {
    //     Highcharts.setOptions({
    //         lang: {
    //             thousandsSep: ','
    //         }
    //     })
    // }
}
</script>

<template>
    <!-- <div id="container" class="container"></div> -->
    <highcharts class="hc" :options="chartOptions" ref="chart" />
</template>

<style>

</style>
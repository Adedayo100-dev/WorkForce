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
        highcharts: Chart //HighCharts (component registration) was removed.
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
                    zoomType: "x",
                    type: 'line'
                },
                // xAxis: {
                //     type: "datetime"
                // },
                title: {
                    text: 'Browser market shares in May, 2020',
                    align: 'center',
                    verticalAlign: 'bottom'
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
                    histogram: {
                        accessibility: {
                            point: {
                                valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                            }
                        }
                    },
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 0
                    },
                    // pie: {
                    //     allowPointSelect: true,
                    //     cursor: 'pointer',
                    //     dataLabels: {
                    //         enabled: true,
                    //         format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    //     }
                    // }
                },
                series: [{
                    name: 'Weeks',
                    colorByPoint: true,
                    data: [{
                        name: 'Chrome',
                        y: 816.71,
                        // sliced: true,
                        // selected: true
                    }, {
                        name: 'Edge',
                        y: 821.48
                    },  {
                        name: 'Firefox',
                        y: 815.37
                    }, {
                        name: 'Safari',
                        y: 632.94
                    }, {
                        name: 'Internet Explorer',
                        y: 677.83
                    },  {
                        name: 'Opera',
                        y: 826.25
                    }
                    // ,{
                    //     name: 'Sogou Explorer',
                    //     y: 0.84
                    // }, {
                    //     name: 'QQ',
                    //     y: 0.51
                    // }, {
                    //     name: 'Other',
                    //     y: 2.6
                    // }
                    ]
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
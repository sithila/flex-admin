'use strict';
angular
    .module('app.core')
    .controller('chartController', function($scope) {
        //Set page title and description
     
            var data = [
                ["1", 1000],
                ["2", 3000],
                ["3", 5040],
                ["4", 3200],
            ];
            var data2 = [
                ["1", 300],
                ["2", 3000],
                ["3", 4500],
                ["4", 2000],
            ];
            
            var data3 = [
                ["1", 1000],
                ["2", 3000],
                ["3", 5040],
                ["4", 3200],
                ["5", 3200],
            ];
            var data4 = [
                ["1", 300],
                ["2", 3000],
                ["3", 4500],
                ["4", 2000],
                ["5", 3200],
            ];
            
            var datapie = [
                {label: "One",  data: 50, color: '#e1ab0b'},
                {label: "Two",  data: 65, color: '#fe0000'},
                {label: "Three",  data: 23, color: '#93b40f'}
            ];


            $.plot("#market-risk-chart", [{
                label: "OS",
                data: data,
                grow: { growings:[ { stepMode: "maximum" } ] },
                color:'#5CB85C'

            }, {
                label: "Limit",
                data: data2,
                grow: { growings:[ { stepMode: "maximum", stepDirection: "down" }] },
                color:'#5BC0DE'

            }], {
                series: {
                    grow: { active: true, duration: 2000  },
                    bars: {
                        show: true,
                        barWidth: 0.05,
                        order: 1,
                        fill:1,
                        align: "center"
                    }
                },
                legend: {
                    show: true,
                    //container: $("#legend")
                  },
                tooltip: true,    
                defaultTheme: false,
                xaxis: {
                    mode: "categories",
                    ticks: [
                        [0, "Bond"],
                        [1, "MM"],
                        [2, "Derivative"],
                        [3, "Commodities"],
                    ],
                    tickLength: 1,

                },
                grid: { 
                        borderWidth: {top: 0, right: 0, bottom: 0, left: 0},
                        hoverable: true,
                        clickable: true
                    },
                yAxis: {
                    allowDecimals: false,
                }
            });
            
            

            $.plot($("#pie-chart"), datapie, { 
                series: {
                     pie: {
                         show: true,
                         label: {
                             show: true,
                             formatter: function(label,point){
                                 return(point.percent.toFixed(2) + '%');

                             }
                         }
                    }
                },        
                legend: {show: true}
            });

            
            $.plot("#fix-income-chart", [{
                label: "Avg Pruchase Price",
                data: data3,
                grow: { growings:[ { stepMode: "maximum" } ] },
                color:'#5CB85C'

            }, {
                label: "Market Price",
                data: data4,
                grow: { growings:[ { stepMode: "maximum", stepDirection: "down" }] },
                color:'#5BC0DE'

            }], {
                series: {
                    grow: { active: true, duration: 2000  },
                    lines: {
                        show: true,
                        fill: true
                    },
                    stack: true,
                    points: {
                        show: false
                    }
                },
                legend: {
                    show: true,
                    //container: $("#legend")
                  },
                tooltip: true,    
                defaultTheme: false,
                xaxis: {
                    mode: "categories",
                    ticks: [
                        [0, "LKR Bonds 1 1/2 Years"],
                        [1, "LKR Bonds 2 Years"],
                        [2, "LKR Bonds 3 Years"],
                        [3, "USD Bonds"],
                        [4, "Other Bonds"],
                    ],
                    tickLength: 1,

                },
                grid: { 
                        borderWidth: {top: 0, right: 0, bottom: 0, left: 0},
                        hoverable: true,
                        clickable: true
                    },
                yAxis: {
                    allowDecimals: false,
                }
            });
            
      
        
    });

 queue()
      .defer(d3.json, "assets/data/london_road_casualties.json")
      .await(makeGraphs);
     
      
function makeGraphs(error, casualtyData) {
    var ndx = crossfilter(casualtyData);
    
    
    
    // Top section number displays
    show_display_severity_percent(ndx, "Serious", "#percentage-incidents-serious");
    show_display_severity_percent(ndx, "Fatal", "#percentage-incidents-fatal");
    // Pie and donut section
    show_percentage_male_female(ndx);
    show_casualties_by_age(ndx);
    show_percentage_casualty_class(ndx);
    // Bar chart of incidents by area
    show_incidents_per_area(ndx);
    // Row chart of vehicles involved
    show_vehicles_involved(ndx);
    
    show_line_chart(ndx);
    
    dc.renderAll();
    
}    

//  Top section number dispalys - One set of code for both seperate % severity displays

function show_display_severity_percent(ndx, severity, element) {            
    var severityPercent = ndx.groupAll().reduce(
        function(p, v) {
            p.total++;
            if (v.severity_of_casualty === severity) {
                p.severity_count++;
            }
            return p;
        },
        function(p, v) {
            p.total--;
            if (v.severity_of_casualty === severity) {
                p.severity_count--;
            }
            return p;
        },
        function() {
            return { total: 0, severity_count: 0 };
        }
    );

    dc.numberDisplay(element)
        .formatNumber(d3.format('%'))
        .valueAccessor(function(d) {
            if (d.severity_count == 0) {
                return 0;
            }
            else {
                return (d.severity_count / d.total);
            }
        })
        .group(severityPercent);
}

//  Pie chart to show males vs females casualties

function show_percentage_male_female(ndx) {
    var pieColours = d3.scale.ordinal()
        .range([ '#113B92', '#0a5de0']);
    
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();
    
    dc.pieChart("#male_female_casualties")
        .height(300) 
        .radius(140)
        .transitionDuration(1000)
        .useViewBoxResizing(true)
        .dimension(dim)
        .group(group)
        .colorAccessor(function(d) {
                return d.key;
            })
        .colors(pieColours)
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                return d.data.key + ': ' + Math.round((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
            });
        });
    
}

//  Pie chart of number of casualties in each age range
function show_casualties_by_age(ndx) {
    
        var pieColours = d3.scale.ordinal()
        .range([ '#CBCBCB', '#B3DAF1', '#84A5B8', '#2070B0', '#113B92', '#0a5de0' ]);
    
        var ageDim = ndx.dimension(function(d) {
        switch (true) {
            case (d.age < 26):
                return 'Aged 13-25';
            case (d.age < 39):
                return 'Aged 26-38';
            case (d.age < 51):
                return 'Aged 39-50';
            case (d.age < 64):
                return 'Aged 51-63';
            case (d.age < 76):
                return 'Aged over 64'; 
            case (d.age == 'unknown'):
                return 'Unknown';    
           }
        });
    
    var ageGroup = ageDim.group();
    
    
    dc.pieChart("#casualties_age_range")
        .height(350) 
        .radius(130)
        .transitionDuration(1000)
        .useViewBoxResizing(true)
        .innerRadius(50)
        .dimension(ageDim)
        .group(ageGroup)
        .externalLabels(18)
        .drawPaths(true)
        .colors(pieColours)
        .on('pretransition', function(chart) {
           chart.selectAll('text.pie-slice').text(function(d) {
              return d.data.key + ': ' + Math.round((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
        });
    });

}    

//  Pie chart showing percentage of casualties in each class
function show_percentage_casualty_class(ndx) {
    var pieColours = d3.scale.ordinal()
        .range(['#0a5de0', '#113B92', '#2070B0']);
    
    var dim = ndx.dimension(dc.pluck('casualty_class'));
    var group = dim.group();
    
    dc.pieChart("#casualty_class_percentage")
        .height(300) 
        .radius(140)
        .transitionDuration(1000)
        .useViewBoxResizing(true)
        .dimension(dim)
        .group(group)
        .colorAccessor(function(d) {
                return d.key;
            })
        .colors(pieColours)
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                return d.data.key + ': ' + Math.round((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
            });
        });
}



//  Bar chart to show number of incidents within bouroughs of London
function show_incidents_per_area(ndx) {
      var barColours = d3.scale.ordinal()
        .range([ '#2070B0' , '#113B92']);
      
      var dim = ndx.dimension(dc.pluck('local_authority'));
      var group = dim.group();
      
      dc.barChart("#incidents_per_area")
          .width(1500)
          .height(800)
          .margins({top:30, right: 60, bottom: 120, left: 50})
          .useViewBoxResizing(true) 
          .dimension(dim)
          .group(group)
          .transitionDuration(1000)
          .clipPadding(20)
          .renderLabel(true)
          .x(d3.scale.ordinal())
          .xUnits(dc.units.ordinal)
          .elasticY(true)
          .colorAccessor(function(d) {
                return d.key;
            })
          .colors(barColours)
          .yAxisLabel("No. of incidents")
          .xAxisLabel("Local Authority")
          .yAxis().ticks(30);
}

//  Composite line chart of hour of day incidents occur

function show_line_chart(ndx) {
       
       var hour_dim = ndx.dimension(dc.pluck('hour_of_day'));
       
       var minHour = hour_dim.bottom(1)[0].hour_of_day;
       var maxHour = hour_dim.top(1)[0].hour_of_day;
       
       var mondayIncidents = hour_dim.group().reduceSum(function (d) {
                if (d.day_of_week === 'Monday') {
                    return +d.hour_of_day;
                } else {
                    return 0;
                }
            });
        var tuesdayIncidents = hour_dim.group().reduceSum(function (d) {
                if (d.day_of_week === 'Tuesday') {
                    return +d.hour_of_day;
                } else {
                    return 0;
                }
            });
        var wednesdayIncidents = hour_dim.group().reduceSum(function (d) {
                if (d.day_of_week === 'Wednesday') {
                    return +d.hour_of_day;
                } else {
                    return 0;
                }
            });
        var thursdayIncidents = hour_dim.group().reduceSum(function (d) {
                if (d.day_of_week === 'Thursday') {
                    return +d.hour_of_day;
                } else {
                    return 0;
                }
            }); 
        var fridayIncidents = hour_dim.group().reduceSum(function (d) {
                if (d.day_of_week === 'Friday') {
                    return +d.hour_of_day;
                } else {
                    return 0;
                }
            }); 
        var saturdayIncidents = hour_dim.group().reduceSum(function (d) {
                if (d.day_of_week === 'Saturday') {
                    return +d.hour_of_day;
                } else {
                    return 0;
                }
            }); 
        var sundayIncidents = hour_dim.group().reduceSum(function (d) {
                if (d.day_of_week === 'Sunday') {
                    return +d.hour_of_day;
                } else {
                    return 0;
                }
            });
    
        var compositeChart = dc.compositeChart('#comp_chart');
        compositeChart
            .width(1500)
            .height(600)
            .margins({top:30, right: 80, bottom: 50, left: 50})
            .useViewBoxResizing(true)
            .dimension(hour_dim)
            .x(d3.scale.linear().domain([minHour, maxHour]))
            .yAxisLabel("No of incidents")
            .xAxisLabel("Hour of the day")
            .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
            .renderHorizontalGridLines(true)
            .compose([
                dc.lineChart(compositeChart)
                    .colors('#0a5de0')
                    .group(mondayIncidents, 'Monday'),
                dc.lineChart(compositeChart)
                    .colors('#113B92')
                    .group(tuesdayIncidents, 'Tuesday'),
                dc.lineChart(compositeChart)
                    .colors('#6A7275')
                    .group(wednesdayIncidents, 'Wednesday'),
                dc.lineChart(compositeChart)
                    .colors('#fb040f')
                    .group(thursdayIncidents, 'Thursday'),
                dc.lineChart(compositeChart)
                    .colors('#f8b104')
                    .group(fridayIncidents, 'Friday'), 
                dc.lineChart(compositeChart)
                    .colors('#33a532')
                    .group(saturdayIncidents, 'Saturday'), 
                dc.lineChart(compositeChart)
                    .colors('black')
                    .group(sundayIncidents, 'Sunday'),    
            ])
            .brushOn(false)
            .render();
        
    }

//  Row chart of vehicles involved
function show_vehicles_involved(ndx) {
    var rowColours = d3.scale.ordinal()
        .range(['#B3DAF1', '#84A5B8', '#a6a6a7']);
        
    var dim = ndx.dimension(dc.pluck('vehicle_type'));
    var group = dim.group();
    
    dc.rowChart('#vehicle_type') 
        .width(1500)
        .height(700)
        .useViewBoxResizing(true)
        .transitionDuration(1000)
        .x(d3.scale.ordinal())
        .elasticX(true)
        .cap(15)
        .colors(rowColours)
        .dimension(dim)
        .group(group)
        .renderLabel(true);
        
}

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
    
    show_hours_per_day(ndx);
    
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
        .range([ '#113B92', '#0666f9']);
    
    var dim = ndx.dimension(dc.pluck('sex'))
    var group = dim.group();
    
    dc.pieChart("#male_female_casualties")
        .height(300) 
        .radius(140)
        .transitionDuration(500)
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
        .range([ '#CBCBCB', '#B3DAF1', '#84A5B8' ]);
    
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
        .height(400) 
        .radius(140)
        .transitionDuration(500)
        .innerRadius(50)
        .dimension(ageDim)
        .group(ageGroup)
        .externalLabels(30)
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
        .range(['#0666f9', '#113B92', '#2070B0']);
    
    var dim = ndx.dimension(dc.pluck('casualty_class'))
    var group = dim.group();
    
    dc.pieChart("#casualty_class_percentage")
        .height(300) 
        .radius(140)
        .transitionDuration(500)
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
      var dim = ndx.dimension(dc.pluck('local_authority'));
      var group = dim.group();
      
      dc.barChart("#incidents_per_area")
          .width(1500)
          .height(800)
          .margins({top:30, right: 50, bottom: 130, left: 50})
          .useViewBoxResizing(true) 
          .dimension(dim)
          .group(group)
          .transitionDuration(500)
          .renderLabel(true)
          .x(d3.scale.ordinal())
          .xUnits(dc.units.ordinal)
          .elasticY(true)
          .colors('#113B92')
          .yAxisLabel("No. of incidents")
          .xAxisLabel("Local Authority")
          .yAxis().ticks(30);
}

//  Row chart of vehicles involved
function show_vehicles_involved(ndx) {
    var dim = ndx.dimension(dc.pluck('vehicle_type'));
    var group = dim.group();
    
    dc.rowChart('#vehicle_type') 
        .width(1500)
        .height(500)
        .useViewBoxResizing(true)
        .x(d3.scale.ordinal())
        .elasticX(true)
        .dimension(dim)
        .group(group)
        .renderLabel(true);
}


//  Scatter chart
function show_hours_per_day(ndx) {
    
    var hourDim = ndx.dimension(dc.pluck('hour_of_day'));
    
    var dayHourGroup = hourDim.group();
    
    
    dc.scatterPlot('#hour_scatter_plot')
              .width(800)
              .height(500)
              .x(d3.scale.ordinal())
              .brushOn(false)
              .symbolSize(8)
              .clipPadding(10)
              .yAxisLabel('Hour of day')
              .dimension(hourDim)
              .group(dayHourGroup)
              .margins({top: 10, right: 50, bottom: 75, left: 75 });
}


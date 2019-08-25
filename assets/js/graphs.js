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
    show_day_of_week_most_incidents_occur(ndx);
    // Bar chart of incidents by area
    show_incidents_per_area(ndx);
    // Row chart of vehicles involved
    show_vehicles_involved(ndx);
    
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
    var dim = ndx.dimension(dc.pluck('sex'))
    var group = dim.group();
    
    dc.pieChart("#male_female_casualties")
    .height(300) 
    .radius(120)
    .transitionDuration(500)
    .dimension(dim)
    .group(group);
}

//  Donut chart to show day of week most incidents occur
function show_day_of_week_most_incidents_occur(ndx) {
    var dim = ndx.dimension(dc.pluck('day_of_week'))
    var group = dim.group();
    
    dc.pieChart("#incidents_day_of_week")
    .height(300) 
    .radius(150)
    .innerRadius(50)
    .transitionDuration(500)
    .dimension(dim)
    .group(group)
    //  Code snippet copy and pasted from https://github.com/dc-js/dc.js/blob/master/web/examples/pie.html
    .on('pretransition', function(chart) {
        chart.selectAll('text.pie-slice').text(function(d) {
            return d.data.key + ': ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
        });
    });
    //  Code snippet copy and pasted from https://github.com/dc-js/dc.js/blob/master/web/examples/pie.html
}


//  Bar chart to show number of incidents within bouroughs of London
function show_incidents_per_area(ndx) {
      var dim = ndx.dimension(dc.pluck('local_authority'));
      var group = dim.group();
      
      dc.barChart("#incidents_per_area")
          .width(1100)
          .height(600)
          .margins({top:30, right: 50, bottom: 80, left: 50})
          .dimension(dim)
          .group(group)
          .transitionDuration(500)
          .renderlet(function (chart) {
            chart.selectAll("g.x text")
                .attr('transform', "rotate(-80)");
           })
          .renderLabel(true)
          .x(d3.scale.ordinal())
          .xUnits(dc.units.ordinal)
          .elasticY(true)
          .yAxisLabel("No. of incidents")
          .xAxisLabel("Local Authority")
          .yAxis().ticks(30);
}

//  Row chart of vehicles involved
function show_vehicles_involved(ndx) {
    var dim = ndx.dimension(dc.pluck('vehicle_type'));
    var group = dim.group();
    
    dc.rowChart('#vehicle_type') 
        .width(500)
        .height(500)
        .x(d3.scale.ordinal())
        .elasticX(true)
        .dimension(dim)
        .group(group);
}

//  Pie chart of number of casualties in each age range
function show_casualties_by_age(ndx) {
    var dim = ndx.dimension(dc.pluck('age'));
    var ageGroup = ageDim(function(v) {
        if(v < 13) return '0-12';
        else if(v < 26) return '13-25';
        else if(v < 39) return '26-38';
        else if(v < 51) return '39-50';
        else if(v < 64) return '51-63';
        else if(v < 76) return '64-75';
        else if(v < 88) return '76-87';
        else if(v < 100) return '88-99';
        else return 'unknown';
    });
}
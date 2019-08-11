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
    show_day_of_week_most_incidents_occur(ndx)
    // Bar chart of incidents by area
    show_incidents_per_area(ndx);
    
    
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
        .formatNumber(d3.format('.2%'))
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
    .radius(120)
    .innerRadius(50)
    .transitionDuration(500)
    .dimension(dim)
    .group(group);
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




 queue()
      .defer(d3.json, "assets/data/london_road_casualties.json")
      .await(makeGraphs);
     
      
function makeGraphs(error, casualtyData) {
    var ndx = crossfilter(casualtyData);
    // Top section number displays
    show_display_severity_percent(ndx, "Serious", "#percentage-incidents-serious");
    show_display_severity_percent(ndx, "Fatal", "#percentage-incidents-fatal");
    show_incidents_per_area(ndx);
    show_fatal_vs_serious_severity(ndx);
    
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


function show_incidents_per_area(ndx) {
      var dim = ndx.dimension(dc.pluck('local_authority'));
      var group = dim.group();
      
      dc.barChart("#incidents_per_area")
          .width(1200)
          .height(600)
          .margins({top:10, right: 50, bottom: 30, left: 50})
          .dimension(dim)
          .group(group)
          .transitionDuration(500)
          .x(d3.scale.ordinal())
          .xUnits(dc.units.ordinal)
          .elasticY(true)
          .xAxisLabel("Local Authority")
          .yAxis().ticks(30);
          
}

function show_fatal_vs_serious_severity(ndx) {
    var dim = ndx.dimension(dc.pluck('severity_of_casualty'))
    var group = dim.group();
    
    dc.pieChart("#fatal_serious_incidents")
    .height(300) 
    .radius(90)
    .transitionDuration(500)
    .dimension(dim)
    .group(group);
}


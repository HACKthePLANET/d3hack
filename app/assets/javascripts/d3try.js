	var series = [4, 8, 15, 16, 23, 42];

	var chart = d3.select("body").append("div").attr("class", "chart");

	chart.selectAll("div")
		 .data(series)
		 .enter().append("div")
		 .style("width", function(elt) { return elt * 10 + "px"; })
		 .text(function(elt) { return elt; });

var theApp16 = angular.module('theApp16', []);
theApp16.controller('viewsCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

var theurl = $stateParams.id;
//$scope.months = moment().format("MM");
//$scope.years = moment().format("YYYY");
$scope.months = '09';
$scope.years = 2020;

$scope.change = function() {
    $scope.getviews($scope.months, $scope.years)
}

$scope.getmedia = function() {
    Account.getProfile().then(function(response) {
        $scope.theview = response.data.live;
        $scope.nombre = response.data.nombre;
        $scope.thecanal = response.data.channel;
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;   
        $scope.youtuber = response.data.youtuber;        
    });
    Account.getPrograma(theurl).then(function(response) {
        $scope.elprograma = response.data.name;
    });
};
$scope.getmedia();

$scope.getviews = function(themonth, theyear) {
    Account.getViews(theurl, themonth, theyear).then(function(response) {
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
            makethegraph(response.data);
        })        
    };
$scope.getviews($scope.months,$scope.years)


var makethegraph = function(data) {
    $scope.fechas = data;
    $scope.year = data[0].year;
    $scope.canal = data[0].canal;
    if (data[0].month == "01"){
        $scope.month = "Enero"
    }
    if (data[0].month == "02"){
        $scope.month = "Febrero"
    }
    if (data[0].month == "03"){
        $scope.month = "Marzo"
    }  
    if (data[0].month == "04"){
        $scope.month = "Abril"
    }
    if (data[0].month == "05"){
        $scope.month = "Mayo"
    }
    if (data[0].month == "06"){
        $scope.month = "Junio"
    }
    if (data[0].month == "07"){
        $scope.month = "Julio"
    }
    if (data[0].month == "08"){
        $scope.month = "Agosto"
    }
    if (data[0].month == "09"){
        $scope.month = "Septiembre"
    }
    if (data[0].month == "10"){
        $scope.month = "Octubre"
    }
    if (data[0].month == "11"){
        $scope.month = "Noviembre"
    }
    if (data[0].month == "12"){
        $scope.month = "Diciembre"
    }  
var views = [];
var dates = [];
var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var colors = d3.scaleOrdinal(d3.schemeCategory20c);
var tooltip = d3.select('body')
    .append('div')
    .style('position', 'absolute')
    .style('padding', '0 10px')
    .style('background', 'white')
    .style('opacity', 0);
 var thenedown = [];
for (var i = 0; i<30; i++) {
    if (data[i] == undefined ) {
    } else {
    thenedown.push(data[i].view)
    }
}
var totview = 0;
for (var i = 0; i<thenedown.length; i++) {
  totview += parseInt(thenedown[i]);
}
$scope.toview = totview;
var len = data.length;
for (var i = 0; i<len; i++) {
    for (var j = 0; j<len - i -1; j++) {
        if ( data[j].date > data[j + 1].date ){
            var temp = data[j];
            data[j] = data[j+1];
            data[ j + 1 ] = temp;
        }
    }
}
var maxi;
function getMaxOfArray() {
   maxi = Math.max.apply(null, thenedown);
}
getMaxOfArray()
  x.domain(data.map(function(d) { return moment(d.date).format("DD"); }));
  y.domain([0, maxi]);
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks())
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(moment(d.date).format("DD")); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.view); })
      .on('mouseover', function(d) {
        tooltip.transition().duration(200)
            .style('opacity', .9)
        tooltip.html(
          '<div style="font-size: 1.3rem; font-weight: bold">' + 
          d.view + '</div>'
        )
        .style('left', (d3.event.pageX - 35) + 'px')
        .style('top', (d3.event.pageY - 30) + 'px')
})
      .on('mouseout', function(d) {
      tooltip.html('')
})
.transition()
    .attr("height", function(d) { return height - y(d.view); })
    .attr("fill", function(d,i) { return colors(i); } )
  .delay(function(d, i) {
    return i * 30;
  })
  .duration(00)
g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("minutes");
}
});



var theApp23 = angular.module('theApp23', []);
theApp23.controller('playsCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {
var theurl = $stateParams.id;
var themonth = "10";

$scope.change = function() {
  console.log($scope.months)
  $scope.getviews($scope.months)


}

$scope.getmedia = function() {
    Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;      
         theurl = response.data.live;
        });

  };
$scope.getmedia();


$scope.getviews = function(themont) {
  //console.log(theurl);
     Account.getPlays(theurl,themont).then(function(response) {
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
          console.log(response.data);
          makethegraph(response.data);
        })
        .catch(function(response) {
        });
  };
$scope.getviews(themonth)




var makethegraph = function(data) {
  $scope.year = data[0].year;
  $scope.canal = data[0].canal;

  if (data[0].month == "11"){
    //console.log("October")
    $scope.month = "Noviembre"

  }

  if (data[0].month == "10"){
    //console.log("October")
    $scope.month = "October"

  }
    if (data[0].month == "09"){
        //console.log("September")
      $scope.month = "September"

  }


  //console.log(data)
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


// d3.json("data", function(d) {


// var data = [];

// for (var i = 0; i<23; i++) {

//   console.log(d[i]);

//    data.push(d[i]);
// }


var colors = d3.scaleOrdinal(d3.schemeCategory20c);

var tooltip = d3.select('body')
.append('div')
.style('position', 'absolute')
.style('padding', '0 10px')
.style('background', 'white')
.style('opacity', 0);

 var thenedown = [];
//console.log(data)
for (var i = 0; i<30; i++) {

if (data[i] == undefined ) {
  console.log('yea')
    //data[i].view = 0 
  // console.log(data[i].view)
   //thenedown.push(data[i].view)
} else {
   // console.log('m')
   //console.log(data[i].view)
  thenedown.push(data[i].plays)

}

}
var totview = 0;

  //  sum += parseInt(nums[i]);

for (var i = 0; i<thenedown.length; i++) {


  totview += parseInt(thenedown[i]);
  //console.log(totview);

}

$scope.toview = totview;
//console.log(totview);


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

//console.log(maxi);


  x.domain(data.map(function(d) { return moment(d.date).format("DD"); }));
  y.domain([0, maxi]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks())



//console.log(data)
  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(moment(d.date).format("DD")); })
      .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.plays); })



      .on('mouseover', function(d) {
        tooltip.transition().duration(200)
        .style('opacity', .9)
        tooltip.html(
          '<div style="font-size: 1.3rem; font-weight: bold">' + 
          d.plays + '</div>'
        )
        .style('left', (d3.event.pageX - 35) + 'px')
        .style('top', (d3.event.pageY - 30) + 'px')

})
      .on('mouseout', function(d) {
      tooltip.html('')
})
.transition()
    .attr("height", function(d) { return height - y(d.plays); })
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




// });






























}



 
});





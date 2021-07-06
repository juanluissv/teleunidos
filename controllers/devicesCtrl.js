var theApp20 = angular.module('theApp20', []);
theApp20.controller('devicesCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {
var theurl = $stateParams.id;
var themonth = "10";
//console.log(moment().format("MM"));

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
  console.log(theurl);
     Account.getDevices(theurl,themont).then(function(response) {
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
          //console.log(response.data);
          makethegraph(response.data);
        })
        .catch(function(response) {
        });
  };
$scope.getviews(themonth)




var makethegraph = function(data) {
console.log(data)
  $scope.year = data[0].year;
  $scope.canal = data[0].canal;
  $scope.date = moment(data[0].date).format("DD");

  if (data[0].month == "11"){
    $scope.month = "Noviembre"
  }

  if (data[0].month == "10"){
    $scope.month = "October"
  }

  if (data[0].month == "09"){
    $scope.month = "September"
  }





var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(d3.schemeCategory20c);


var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.watched; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 180)
    .innerRadius(radius - 40);



var totview = 0;

  //  sum += parseInt(nums[i]);

for (var i = 0; i<data.length; i++) {


  totview += parseInt(data[i].watched);
  //console.log(totview);

}

$scope.toview = totview;
//console.log(totview);









var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");


arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) { return color(d.data.watched); })



arc.append("text")
    .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
    .attr("dy", "0.35em")

    .transition()
    .text(function(d) { return d.data.device + ': ' + d.data.watched })
    .attr('fill', 'white')
    .delay(function(d, i) {
        return i * 300;
    })
    .duration(1000)


















}



 
});





var theApp30 = angular.module('theApp30', []);
theApp30.controller('edadesCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {
var themonth = moment().format("MM");
//console.log(moment().format("MM"));

$scope.change = function() {
  //console.log($scope.months)
  $scope.getviews($scope.months)


}

$scope.getviews = function(themont) {
    Account.getUsers().then(function(response) {
        //console.log(response.data)
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
          makethegraph(response.data);
        })
  };
$scope.getviews(themonth)




var makethegraph = function(data) {

  // $scope.year = data[0].year;
  // $scope.canal = data[0].canal;
  // $scope.date = moment(data[0].date).format("DD");

  // if (data[0].month == "11"){
  //   $scope.month = "Noviembre"
  // }

  // if (data[0].month == "10"){
  //   $scope.month = "October"
  // }

  // if (data[0].month == "09"){
  //   $scope.month = "September"
  // }



//console.log(data);

var totales = 0;
var edad;
var homb;
var hemb;

//console.log(moment().subtract(7, 'years').format("YYYY")); 

var ano = moment().format("YYYY");
// edad = ano - 1986;
// //console.log(edad);

var bucket1 = 0;
var bucket2 = 0;
var bucket3 = 0;
var bucket4 = 0;

var edad1;
var edad2;
var edad3;
var edad4;


//15-29
//30-50
//50-70
//70-90



for (var i = 0; i<data.length; i++) { 
edad = ano - data[i].birthDate;
console.log(edad)
totales = totales + 1;
if (edad >= 15 && edad <=30){
  bucket1 = bucket1 + 1;
}

if (edad >= 30 && edad <=50){
  bucket2 = bucket2 + 1;
}

if (edad >= 50 && edad <= 70){
  bucket3 = bucket3 + 1;
}

if (edad >= 70 && edad <= 90){
  bucket4 = bucket4 + 1;
}


 
}

var edad1 = ((bucket1/totales)*100);
edad1 = Math.floor(edad1 * 100) / 100;

var edad2 = ((bucket2/totales)*100);
edad2 = Math.floor(edad2 * 100) / 100;

var edad3 = ((bucket3/totales)*100);
edad3 = Math.floor(edad3 * 100) / 100;

var edad4 = ((bucket4/totales)*100);
edad4 = Math.floor(edad4 * 100) / 100;


//15-29
//30-50
//50-70
//70-90

console.log('bucket1: ' + edad1);
console.log('bucket2: ' +  edad2);
console.log('bucket3: ' + edad3);
console.log('bucket4: ' + edad4);
console.log('totales: ' +  totales);

$scope.toview = totales;

$scope.edad1 = edad1 + '%';
$scope.edad2 = edad2 + '%';
$scope.edad3 = edad3 + '%';
$scope.edad4 = edad4 + '%';


var data2 =[
  {
    "canal": "15-29",
    "totalview" : edad1
  },
  {
    "canal": "30-50",
    "totalview" : edad2
  },
  {
    "canal": "50-70",
    "totalview" : edad3
  }, 
  {
     "canal": "70-90",
    "totalview" : edad4
  }
]




var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(d3.schemeCategory20c);


var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.totalview; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 180)
    .innerRadius(radius - 40);



var arc = g.selectAll(".arc")
    .data(pie(data2))
    .enter().append("g")
    .attr("class", "arc");


arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) { return color(d.data.totalview); })



arc.append("text")
    .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
    .attr("dy", "0.0000005em")

    .transition()
    .text(function(d) { return d.data.canal })
    .attr('fill', 'white')
    .delay(function(d, i) {
        return i * 300;
    })
    .duration(1000)



















}



 
});





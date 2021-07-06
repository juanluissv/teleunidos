var theApp28 = angular.module('theApp28', []);
theApp28.controller('usersCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

var themonth = moment().format("MM");
$scope.change = function() {
    $scope.getviews($scope.months)
}

$scope.getuser = function() {
    Account.getProfile().then(function(response) {
        $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;   
        $scope.nombre = response.data.nombre;
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;    
        $scope.youtuber = response.data.youtuber;
    });
};
$scope.getuser();

$scope.getviews = function(themont) {
    Account.getUsers().then(function(response) {
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
        makethegraph(response.data);
        makethegraph2(response.data);          
        })
  };
$scope.getviews(themonth)


var makethegraph = function(data) {
var width = 800;
var height= 400;
var radius = 350;
var totales = 0;
var male = 0;
var female = 0;

for (var i = 0; i<data.length; i++) { 
    totales = totales +1 
    if (data[i].gender == "Male") {
        male = male + 1;
    }
    if (data[i].gender == "Female") {
        female = female + 1;
    }
}
var homb = ((male/totales)*100);
homb = Math.floor(homb * 100) / 100;
var hemb = ((female/totales)*100);
hemb =  Math.ceil(hemb * 100) / 100;
$scope.toview = totales;
$scope.masculino = homb + '%';
$scope.femenino = hemb + '%';

var data2 =[
  {
    "canal": "masculino",
    "totalview" : homb
  },
  {
    "canal": "femenino",
    "totalview" : hemb
  }
]

var svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var color = d3.scaleOrdinal(["#0B877D", "#17BAB8"]);

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
    .text(function(d) { return d.data.canal + ': ' + d.data.totalview + '%'})
    .attr('fill', 'white')
    .delay(function(d, i) {
        return i * 300;
    })
    .duration(1000)
};

var makethegraph2 = function(data) {
var width = 800,
    height= 400,
    radius = 350;

var totales = 0;
var edad;
var homb;
var hemb;

var ano = moment().format("YYYY");
var bucket1 = 0;
var bucket2 = 0;
var bucket3 = 0;
var bucket4 = 0;
var edad1;
var edad2;
var edad3;
var edad4;

for (var i = 0; i<data.length; i++) { 
    edad = ano - data[i].birthDate;
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

var svg = d3.select('#chart2').append('svg')
    .attr('width', width)
    .attr('height', height)
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
    .text(function(d) { return d.data.canal})
    .attr('fill', 'white')
    .delay(function(d, i) {
        return i * 300;
    })
    .duration(1000)
}
 
});

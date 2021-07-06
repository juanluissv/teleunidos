var theApp17 = angular.module('theApp17', []);
theApp17.controller('dashCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

var themonth = "10";
 $scope.getPrograma = function() {
      Account.getProgramas()
        .then(function(response) {
          $scope.programas = response.data;
        });
    };
$scope.getPrograma();

var theurl;
$scope.getviews = function() {
      Account.getProfile().then(function(response) {
        $scope.nombre = response.data.nombre;
        $scope.thecanal = response.data.channel;
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;
        $scope.youtuber = response.data.youtuber;
        $scope.theview = response.data.live;
        theurl = response.data.live;        
    });
  };
$scope.getviews();

var themonth = moment().format("MM");
$scope.getviews = function(themont) {
    Account.getUsers().then(function(response) {
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
          makethegraph(response.data);
        })
  };
$scope.getviews(themonth)


var makethegraph = function(data) {
var width = 600;
var height= 350;
var radius = 250;
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
    "canal": "male",
    "totalview" : homb
  },
  {
    "canal": "female",
    "totalview" : hemb
  }
]


var svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(["#FBBA42", "#56B9D0"]);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.totalview; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 150)
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

});





var theApp32 = angular.module('theApp32', []);
theApp32.controller('pagosCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

var themonth = "8";
$scope.months = moment().format("MM");
$scope.years = moment().format("YYYY");
$scope.thecanal = $stateParams.id;

var thechhanel;
var totalusers = 0;

$scope.getviewss = function(themont, theyear) {
     Account.getviewstotal(themont, theyear).then(function(response) {
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
          makethegraph(response.data);
        })
        .catch(function(response) {
        });
  };
$scope.getviewss($scope.months,$scope.years)



$scope.getviews = function(themont) {
           Account.getProfile().then(function(response) {
          //console.log(response.data);
        $scope.thecanal = $stateParams.id;
          thechhanel = response.data.channel;
          $scope.canal = $stateParams.id;
      $scope.terminos = response.data.terminos;
      $scope.productor = response.data.productor;
          $scope.theview = response.data.live;
      $scope.youtuber = response.data.youtuber;

        })
        .catch(function(response) {
        });
  };
$scope.getviews();




$scope.change = function() {
  $scope.getviewss($scope.months, $scope.years)
}



$scope.thecanal = $stateParams.id;



var makethegraph = function(data) {
Account.getUsers().then(function(response) {
  console.log(response)
  console.log(response.data.length)
  //var totusers = 0;
    totusers = 0;
    // for (var i = 0; i<response.data.length; i++) { 
    //     totusers = totusers + 1;
    //     }
        
$scope.totuseres = totusers;

var totales = 0;
var totview = 0;
var thischannel = 0;

for (var i = 0; i<data.length; i++) {
    totales += parseInt(data[i].totalview);
  if (data[i].canal === $scope.thecanal) {
    thischannel = Number(data[i].totalview) + thischannel
    //thischannel = data[i].totalview
  } else {
    totview += parseInt(data[i].totalview);
  }
}
$scope.mychannel = thischannel;
$scope.toview = totales;
//console.log(totview);
//console.log(thischannel);
//console.log(totales)

var myshare = ((thischannel/totales)*100);
myshare = Math.floor(myshare * 100) / 100;

var totshare = ((totview/totales)*100);
totshare = Math.ceil(totshare * 100) / 100;

//console.log(totalusers);


var data2 = [
  {
   "canal": "otros",
   "totalview" :  totshare
  },
  {
    "canal": thechhanel,
    "totalview": myshare
  }

]


//console.log(data2);





  $scope.year = data[0].year;
  $scope.date = moment(data[0].date).format("DD");

    if (data[0].month == "01"){
    $scope.month = "Enero"
  }  if (data[0].month == "02"){
    $scope.month = "Febrero"
  }  if (data[0].month == "03"){
    $scope.month = "Marzo"
  }  if (data[0].month == "04"){
    $scope.month = "Abril"
  }  if (data[0].month == "05"){
    $scope.month = "Mayo"
  }  if (data[0].month == "06"){
    $scope.month = "Junio"
  }  if (data[0].month == "07"){
    $scope.month = "Julio"
  }  if (data[0].month == "08"){
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
    .attr("dy", "0.35em")

    .transition()
    .text(function(d) { return d.data.canal + ': ' + d.data.totalview + '%'})
    .attr('fill', 'white')
    .delay(function(d, i) {
        return i * 300;
    })
    .duration(1000)






  var totalRoyalti = ((totusers * 10) * 0.4)
console.log('totalRoyalti ' + totalRoyalti);
var thisshare = (thischannel/totales);
console.log('thisshare ' + thisshare);
var myroyalti = (totalRoyalti*thisshare)
console.log('myroyalti ' + myroyalti)
myroyalti = Math.floor(myroyalti * 100) / 100;
console.log(myroyalti);
$scope.myroyalti = myroyalti;

})







}



 
});





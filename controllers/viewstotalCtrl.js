var theApp27 = angular.module('theApp27', []);
theApp27.controller('viewsTotalCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

$scope.thecanal = $stateParams.id;
//$scope.months = moment().format("MM");
$scope.months = '09';
$scope.years = "2020"
var thechhanel;
$scope.thecanal = $stateParams.id;

$scope.getviews = function(themont, theyear) {
     Account.getviewstotal(themont, theyear).then(function(response) {
        var svg = d3.select("svg");
        svg.selectAll("*").remove();
        makethegraph(response.data);
    })
};
$scope.getviews($scope.months,$scope.years)

$scope.change = function() {
  $scope.getviews($scope.months, $scope.years)
}

var makethegraph = function(data) {
    Account.getProfile().then(function(response) {
        $scope.youtuber = response.data.youtuber;
        $scope.nombre = response.data.nombre;
        thechhanel = response.data.channel;
        $scope.canal = thechhanel;
        $scope.theview = response.data.live;
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;
        var totales = 0;
        var totview = 0;
        var thischannel = 0;
        $scope.consultorio;
        $scope.videos;
        $scope.noticias;
        $scope.fermentados;
        $scope.geopolitica;
        $scope.plataforma;
        $scope.informa;
        $scope.remind;
        $scope.encuentro;
        $scope.poptime;


        for (var i = 0; i<data.length; i++) {
            totales += parseInt(data[i].totalview);
            if (data[i].canal === $scope.thecanal) {
            if (data[i].mediaid == "LyON9x3D") {
                $scope.consultorio = data[i].totalview;
            }
            if (data[i].mediaid == "gXBa7AZD") {
                $scope.videos = data[i].totalview;
            }    
            if (data[i].mediaid == "BlE5n0Fy") {
                $scope.noticias = data[i].totalview;
            }    
            if (data[i].mediaid == "03I06oNn") {
                $scope.fermentados = data[i].totalview;
            }    
            if (data[i].mediaid == "5iqCUArm") {
                $scope.geopolitica = data[i].totalview;
            }    
            if (data[i].mediaid == "qQ5Fr1mn") {
                $scope.plataforma = data[i].totalview;
            }    
            if (data[i].mediaid == "MbTfPGxc") {
                $scope.informa = data[i].totalview;
            }    
            if (data[i].mediaid == "FPapq1k8") {
                $scope.remind = data[i].totalview;
            }    
            if (data[i].mediaid == "pXJWiS8T") {
                $scope.encuentro = data[i].totalview;
            }    
            if (data[i].mediaid == "RqUwolce") {
                $scope.poptime = data[i].totalview;
            }    
            thischannel = Number(data[i].totalview) + thischannel
            } else {
                totview += parseInt(data[i].totalview);
            }
        }
        $scope.mychannel = thischannel;
        $scope.toview = totales;
        var myshare = ((thischannel/totales)*100);
        myshare = Math.floor(myshare * 100) / 100;
        var totshare = ((totview/totales)*100);
        totshare = Math.ceil(totshare * 100) / 100;

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

        $scope.year = data[0].year;
        $scope.date = moment(data[0].date).format("DD");

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
    });
}

});


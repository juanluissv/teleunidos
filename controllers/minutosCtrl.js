var theApp38 = angular.module('theApp38', []);
theApp38.controller('minutosCtrl', function($http, $stateParams, $scope, $auth, toastr, Account) {

var theurl;
$scope.theprogram = $stateParams.id;
$scope.getviews = function() {
    Account.getProfile().then(function(response) {
        $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;  
        $scope.nombre = response.data.nombre;  
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;          
        theurl = response.data.live;
        $scope.youtuber = response.data.youtuber;
    });
};
$scope.getviews();


$scope.getPrograma = function() {
    Account.getProgramas($scope.theprogram).then(function(response) {
        $scope.programas = response.data;
    })        
};
$scope.getPrograma();


});

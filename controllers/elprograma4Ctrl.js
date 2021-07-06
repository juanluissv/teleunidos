var theApp54 = angular.module('theApp54',  ['jtt_youtube']);
theApp54.controller('elprograma4Ctrl', function($http, Account, $stateParams, toastr, youtubeFactory, $http, $scope, uploadService, $log) {

var theurl = 'gXBa7AZD'; 
var point;
$scope.getviews = function() {
    Account.getProfile().then(function(response) {
        $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;
        $scope.nombre = response.data.nombre;
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;
        $scope.youtuber = response.data.youtuber;
    });
    Account.getVideoLink(theurl).then(function(response) {
      point = response.data[0].point;
    })
};
$scope.getviews();

$scope.subir = function() {
  uploadService.subirvid($scope.video.video, $scope.video.title, theurl);
  toastr.info('Cambios Guardados');
};
 
});


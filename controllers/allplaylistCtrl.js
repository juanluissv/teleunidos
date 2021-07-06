var theApp13 = angular.module('theApp13', []);
theApp13.controller('allplaylistCtrl', function(Account, $stateParams, $http, $scope, uploadService, $log) {


var newfunction = function(){
  Account.getAllPlaylist().then(function(response) {
    //console.log(response);
    //$scope.playlist = response.data;
  });

}

newfunction();


var thefunction = function(){
  Account.getAllPlaylistt().then(function(response) {
    console.log(response);
    $scope.playlist = response.data;
  });

}

thefunction();



var secondfunction = function(){
  Account.getAllPlaylist2().then(function(response) {
    //console.log(response);
    //$scope.playlist2 = response.data;
  });

}

secondfunction();









 
});


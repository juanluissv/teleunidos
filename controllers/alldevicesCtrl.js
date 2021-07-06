var theApp21 = angular.module('theApp21', []);
theApp21.controller('alldevicesCtrl', function(Account, $stateParams, $http, $scope, uploadService, $log) {


var newfunction = function(){
  Account.getallviews().then(function(response) {
    console.log(response);
    $scope.playlist = response.data;
  });

}

newfunction();




// var secondfunction = function(){
//   Account.getAllPlaylist2().then(function(response) {
//     console.log(response);
//     $scope.playlist2 = response.data;
//   });

// }

// secondfunction();









 
});


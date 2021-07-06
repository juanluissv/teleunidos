var theApp19 = angular.module('theApp19', []);
theApp19.controller('allviewsCtrl', function(Account, $stateParams, $http, $scope, uploadService, $log) {


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


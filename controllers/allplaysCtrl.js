var theApp25 = angular.module('theApp25', []);
theApp25.controller('allplaysCtrl', function(Account, $stateParams, $http, $scope, uploadService, $log) {


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


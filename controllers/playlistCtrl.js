var theApp10 = angular.module('theApp10', []);
theApp10.controller('playlistCtrl', function($location, $http, $scope, $auth, toastr, Account) {








  $scope.createplaylist = function() {

    console.log($scope.playlist);
    Account.createPlaylist($scope.playlist)
      .then(function() {
        toastr.info('playlist has been created');
        })
        .catch(function(response) {
        });
  };


 //  $scope.getplaylist = function() {
 //     Account.getPlaylist().then(function(response) {
 //          console.log(response);
 //        })
 //        .catch(function(response) {
 //        });
 //  };

 // $scope.getplaylist();


console.log('hi');


  });

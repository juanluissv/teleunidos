var theApp12 = angular.module('theApp12', []);
theApp12.controller('programas2Ctrl', function($location, $http, $scope, $auth, toastr, Account) {


  $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
          console.log($scope.user);
        })
        .catch(function(response) {
         // toastr.error(response.data.message, response.status);
        });
    };
    $scope.getProfile();





    $scope.programa;

    var theplaylist = ['2kRkdseU', '9sL1NXsH', 'lYCek6JZ', 'tsFQLdlv']


  $scope.createprograma = function() {
    //$scope.programa.playlist = theplaylist[1];

    console.log($scope.programa);
    Account.savePrograma2($scope.programa)
      .then(function() {
        toastr.info('Porgrama has been created');
        console.log('created');
        $location.path('/misprogramas');
        })
        .catch(function(response) {
        });
  };






console.log('hi');


  });

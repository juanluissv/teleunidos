var theApp4 = angular.module('theApp4', []);
theApp4.controller('programasCtrl', function($location, $http, $scope, $auth, toastr, Account) {




  $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
                $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;

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
    Account.savePrograma($scope.programa)
      .then(function(response) {
        toastr.info('Programa Creado');
        console.log(response);
        $location.path('/misprogramas');
        })
        .catch(function(response) {
         toastr.error(response.data.message);
        });
  };






console.log('hi');


  });

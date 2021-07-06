var theApp51 = angular.module('theApp51', []);
theApp51.controller('acuerdoCtrl', function($http, $scope, $auth, toastr, Account) {



    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          console.log(response.data.channel)
          $scope.user = response.data;
      $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;
        $scope.legal = response.data.legal;
      $scope.terminos = response.data.terminos;
      $scope.productor = response.data.productor;
              $scope.lafecha = response.data.fecha

        })
        .catch(function(response) {
         // toastr.error(response.data.message, response.status);
        });
    };
    

    $scope.getProfile();
  });

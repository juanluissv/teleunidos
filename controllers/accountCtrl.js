var theApp7 = angular.module('theApp7', []);
theApp7.controller('accountCtrl', function($scope, $location, $auth, toastr) {
    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function(response) {
          //$auth.setToken(response);
      console.log(response);
          $location.path('/contacto');
          toastr.info('You have successfully created a new account');
        })
        .catch(function(response) {
         toastr.error(response.data.message);
        });

    };
  });
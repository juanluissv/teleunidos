var theApp44 = angular.module('theApp44', []);
theApp44.controller('resetCtrl', function($http,  $stateParams, $scope, $location, $auth, toastr, Account) {


     $scope.theurl = $stateParams.id;

    $scope.updateProfile = function() {
      Account.resetProfile($scope.user.password, $scope.theurl)
        .then(function(response) {
          console.log(response)
          $location.path('/login');
          toastr.success(response.data.message);
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
     

  });

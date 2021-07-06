var theApp8 = angular.module('theApp8', []);
theApp8.controller('ProfileCtrl', function($http, $scope, $auth, toastr, Account) {
  
    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
            $scope.user = response.data;
            $scope.theview = response.data.live;
            $scope.thecanal = response.data.channel;
            $scope.nombre = response.data.nombre;
            $scope.terminos = response.data.terminos;
            $scope.productor = response.data.productor;
            $scope.youtuber = response.data.youtuber;
        }) 
    };
    $scope.updateProfile = function() {
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.info('Profile has been updated');
        })
    };
    $scope.getProfile();


  });

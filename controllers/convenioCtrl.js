var theApp50 = angular.module('theApp50', []);
theApp50.controller('convenioCtrl', function($http, $location, $scope, $auth, toastr, Account) {



    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          console.log(response.data.channel)
          $scope.user = response.data;
      $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;
      $scope.terminos = response.data.terminos;
      $scope.productor = response.data.productor;
              console.log($scope.terminos)
        $scope.lafecha = moment().format('DD/MM/YYYY')
        console.log(moment().format('DD/MM/YYYY'));

        })
        .catch(function(response) {
         // toastr.error(response.data.message, response.status);
        });
    };
    

    $scope.getProfile();



    $scope.updateProfile = function() {
      console.log('si')
      $scope.user.terminos = true;
      $scope.user.fecha = moment().format('DD/MM/YYYY');
      console.log($scope.user)

      Account.updateProfile($scope.user)
        .then(function() {
        $location.path('/acuerdo');

        })

    };








  });

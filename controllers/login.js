var theApp9 = angular.module('theApp9', []);
theApp9.controller('LoginCtrl', function($http, $scope, $location, $auth, toastr) {

var thedatos = function() {
    $scope.user = {
        "user_email": "producciones@tvx.com.sv",
        "user_pass": "canaltvx"
    }
}
thedatos();

$scope.login = function() {
    $auth.login($scope.user).then(function() {
        toastr.info('You have successfully signed in');
        $location.path('/dash');
    })
    .catch(function(error) {
        toastr.error(error.data.message, error.status);
    });
};
$scope.login()

});

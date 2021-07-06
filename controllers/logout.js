angular.module('myApp').controller('LogoutCtrl', function($location, $auth, toastr) {
  $auth.logout()
    .then(function() {
      $location.path('/login');
  });
});
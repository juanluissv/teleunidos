var theApp31 = angular.module('theApp31', []);
theApp31.controller('broadcastCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

var themonth = moment().format("MM");
var theurl;

$scope.getviews = function() {
    Account.getProfile().then(function(response) {
    	$scope.theview = response.data.live;
         theurl = response.data.live;
        });

  };
$scope.getviews();



 
});





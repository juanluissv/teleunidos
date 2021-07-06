var theApp41 = angular.module('theApp41', []);
theApp41.controller('miscampanasCtrl', function($http, $stateParams, $scope, $auth, toastr, Account) {

$scope.canal =  $stateParams.id;
$scope.getviews = function() {
    Account.getProfile().then(function(response) {
        $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;  
        $scope.thecanal2 = response.data.channel2;  
        $scope.nombre = response.data.nombre;
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;    
        $scope.youtuber = response.data.youtuber;
        theurl = response.data.live;
        });
    };
$scope.getviews();

var results = [];
$scope.getCampanas = function() {
    Account.getCampanas($scope.canal).then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
          	$http.get('https://cdn.jwplayer.com/v2/media/' + response.data[i].mediakey, {
    			skipAuthorization: true
  			}).then(function(response) {
  	    		results.push(response.data.playlist[0])
  	    		if (results.length >= 1) {
  	    		    asignrest(results)
  	    		}
  			});
        };
    })
};
$scope.getCampanas();


var asignrest = function(results){
	$scope.resultados = results
}

});

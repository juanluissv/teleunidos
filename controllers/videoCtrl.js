var theApp3 = angular.module('theApp3', []);
theApp3.controller('videoController', function(Account, $location, $stateParams, $http, $scope, uploadService, $log) {

var theId = $stateParams.id;
var thefile
var myid;
var theI = $stateParams.i;
$scope.mediaid = $stateParams.id;
$scope.elurl = $stateParams.i;

$scope.getviews = function() {
    Account.getProfile().then(function(response) {
        $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;
        $scope.nombre = response.data.nombre;
        $scope.terminos = response.data.terminos;
        $scope.productor = response.data.productor;
        $scope.youtuber = response.data.youtuber;
    });
};
$scope.getviews();

$http.get('https://cdn.jwplayer.com/v2/media/' + theId, {
    skipAuthorization: true
    }).then(function(response) {
        $scope.titulos = (parseInt(response.data.playlist[0].title) + 1)  
        if ((theI == "gXBa7AZD") || (theI == "BlE5n0Fy")){
        $scope.titulos = response.data.playlist[0].title
        }
        thefile = response.data.playlist[0].sources[0].file
        var playfun = function () {           
            $scope.thisvideo = thefile;
            jwplayer("myElement6").setup({
                file: thefile,
                "height": "20%",
                "width": "93%",
                "autostart": true,
                "androidhls": true,
                "mute": false,
                "volume": 100,
                "primary": "html5"
            });
        }
        playfun();
    });
});
 
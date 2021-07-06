var theApp42 = angular.module('theApp42', []);
theApp42.controller('campanaCtrl', function($http, $scope, $stateParams, $auth, toastr, Account) {

var theurl = $stateParams.id;
$scope.thetag = $stateParams.id;
var campaingid;
var themonth = "05";
var totview = 0;
var totclicks = 0;
var presupuesto;
rates = [];
var rate = 0;
var thestring;

$scope.getviews = function() {
    Account.getProfile().then(function(response) {
        $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel; 
        $scope.terminos = response.data.terminos;
        $scope.nombre = response.data.nombre;
        $scope.productor = response.data.productor;     
    });
};
$scope.getviews();

$scope.getCampana = function() {
    Account.getCampana(theurl).then(function(response) {
        $scope.campana = response.data;
        campaingid = response.data[0].campaignid;
        presupuesto = response.data[0].presupuesto;
        $scope.myimpressions = 0;
        $scope.myclicks = 0;
        $scope.costclicks = 0;
        $scope.cpm = 0;
        Account.updateMongo(response.data[0].fechaInicial, response.data[0].fechaFinal, response.data[0].campaignid).then(function(myresponse) {
            $scope.myimpressions = myresponse.data.summary.impressions;
            $scope.myclicks = myresponse.data.summary.clicks;          
            if (myresponse.data.summary.impressions  === 0) {
                $scope.cpm = 0;
            } else {
                $scope.cpm = ((presupuesto/myresponse.data.summary.impressions)).toFixed(2);
            }
            if (myresponse.data.summary.impressions  === 0) {
                $scope.rate = 0;
            } else {
                $scope.rate = ((myresponse.data.summary.clicks/myresponse.data.summary.impressions)*100).toFixed(2);
            }
            if (myresponse.data.summary.clicks  === 0) {
                $scope.costclicks = 0;
            } else {
                $scope.costclicks = (response.data[0].presupuesto/myresponse.data.summary.clicks).toFixed(2)
            }
        })    
        playfun(response.data[0].mediakey)
    })
};
$scope.getCampana();

var playfun = function (theId) {
   var thestring2 = "https://cdn.jwplayer.com/manifests/" + theId + ".m3u8";    
    jwplayer("myElement6").setup({
        file: thestring2,
        "height": "20%",
        "width": "93%",
        "autostart": true,
        "androidhls": true,
        "repeat": true,
        "mute": false,
        "volume": 100,
        "primary": "html5"
  });
  jwplayer("myElement6").setVolume(100);
}

});

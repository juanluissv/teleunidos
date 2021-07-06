var theApp47 = angular.module('theApp47', []);
theApp47.controller('video2Controller', function(Account, $location, $stateParams, $http, $scope, uploadService, $log) {

      var theId = $stateParams.id;
      //$log.info(theId);
$scope.getviews = function() {
    Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
      $scope.thecanal = response.data.channel;
        });

  };
$scope.getviews();


$http.get('https://cdn.jwplayer.com/v2/media/' + theId, {
    skipAuthorization: true
    }).then(function(response) {
      console.log(response.data)
      $scope.titulos = response.data;
});





var playfun = function () {
  console.log('hello');


var thestring = "https://cdn.jwplayer.com/videos/" + theId + "-2L3XhZ4A.mp4";
  //console.log(thestring);

jwplayer("myElement6").setup({
    file: thestring,
 "height": "20%",
  "width": "93%",
  "autostart": true,
  "androidhls": true,
  "mute": false,
  "volume": 100,
  "primary": "html5"
});

jwplayer("myElement6").setMute(true);
jwplayer("myElement6").setVolume(0);

}

playfun();


$scope.deletevid = function() {
  //var delarr = [];
  //console.log(theurl);
  // $http.get('https://cdn.jwplayer.com/v2/playlists/' + theurl, {
  //   skipAuthorization: true
  // }).then(function(response) {
    console.log(theId);
    // for (var i = 0; i < 10; i++) {
    //   delarr[i] = response.data.playlist[i].mediaid;
    // //console.log(data.data.items[i].id.videoId);
    //   };
     //console.log(delarr);
    //console.log(response.data.playlist[0].mediaid);
    uploadService.deletevid(theId);
        $location.path('/misprogramas');


 // });

};


    $scope.goBack = function () {
      $log.info('back');
      window.history.back()
    };


 
  });
 


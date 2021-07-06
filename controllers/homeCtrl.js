var theApp33 = angular.module('theApp33', []);
theApp33.controller('homeCtrl', function($scope,$anchorScroll,  $location) {



$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }

  

var playfun = function () {
var thestring = "https://ak9.picdn.net/shutterstock/videos/1009767899/preview/stock-footage-morning-sun-hyperlapse-of-biscayne-boulvard-with-traffic-jam-miami-florida-usa.webm";
jwplayer("myElement6").setup({
    file: thestring,
 "height": "100%",
  "width": "100%",
  "autostart": true,
  "androidhls": true,
  "controls": false,
  "repeat": true,
  "mute": true,
  "volume": 100,
  "primary": "html5"
});

}

playfun();






  });

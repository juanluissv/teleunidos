var theApp15 = angular.module('theApp15', []);
theApp15.controller('testCtrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

// var playfun = function () {

// jwplayer("myElement3").setup({
//  file: "https://dcunilive34-lh.akamaihd.net/i/dclive_1@632284/index_150_av-p.m3u8",
//  "height": "70%",
//   "width": "70%",
//   "autostart": true,
//   "androidhls": true,
//   "mute": false,
//   "volume": 100,
//   "primary": "html5"
// });

// jwplayer("myElement3").setMute(false);
// jwplayer("myElement3").setVolume(100);

// }

// playfun()

<!-- 
// <script src="//player.dacast.com/js/player.js" id="107405_c_467181" player="jw7" jwurl="3pIPoEOplhk2LVb7gT4p3TuKEm+OgmDe37r316XClNI=" class="dacast-video"></script> -->



      window.addEventListener("load", function(){
          var CONTENT_ID = "107405_c_467181"
          var myPlayer = dacast(CONTENT_ID, 'myDiv', { 
              width: 800, 
              height: 600,
  			  player: "jw7"

            });
      });



});





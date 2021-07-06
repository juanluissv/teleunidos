var theApp47 = angular.module('theApp47', []);
theApp47.controller('video2Controller', function(Account, $location, $stateParams, $http, $scope, uploadService, $log) {

      var theId = $stateParams.id;
      var thei = $stateParams.i;
      //$log.info(theId);

$scope.getviews = function() {
    Account.getProfile().then(function(response) {
      console.log(response)
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


var duration;

var thestring 

var playfun = function () {
  console.log('hello');



 thestring = "https://cdn.jwplayer.com/videos/" + theId + "-2L3XhZ4A.mp4";
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
var playerInstance = jwplayer("myElement6")

playerInstance.onTime(function() {
 duration = playerInstance.getDuration();
 duration =  Math.ceil(duration)
       playerInstance.pause();
console.log(duration)
});

}


// playerInstance.on('ready', function() {
//   var duration = playerInstance.getDuration();
//   console.log(duration)
// });

playfun();

var progtime;
var bloks;
var time1;
var time2;
var time3;
var time4;
var time5;
var time6;
var time7;
var time8;
var time9;
var time10;
var adsPerBlock;
var lasadblock;
var adssecondsblok;




$scope.savetime = function() {

if ((duration > 0) && (duration < 1800)) {

bloks = 2;
console.log('bloks ' + bloks);
time1 =  Math.ceil(duration/2);
console.log('time1 ' + time1);
time2 =  Math.ceil(duration/2);
console.log('time2 ' + time2);


var adcontent = (1800-duration)
console.log('adcontent ' + adcontent)
adssecondsblok = ((1800-duration)/2)
console.log('adssecondsblok ' + adssecondsblok)
adsPerBlock =  Math.ceil((((1800-duration)/2)/30))
console.log('adsPerBlock ' + adsPerBlock)
var adsPerBlock2 = Math.floor((adssecondsblok / 30 ))

var secondsAdsBlok2 = ((30*adsPerBlock2)*bloks )
console.log('secondsAdsBlok2 ' + secondsAdsBlok2)
var lastad = Math.ceil(((adcontent - secondsAdsBlok2) / 30 ))
console.log('lastad ' + lastad)
lasadblock =  adsPerBlock2 + lastad
console.log('lasadblock ' + lasadblock)

var times = [time1,(time1 + time2)];
}


if ((duration > 1800) && (duration < 3600)) {

bloks = 4;
console.log('bloks ' + bloks);
time1 =  Math.ceil(duration/4);
console.log('time1 ' + time1);
time2 =  Math.ceil(duration/4);
console.log('time2 ' + time2);
time3 =  Math.ceil(duration/4);
console.log('time3 ' + time3);
time4 =  Math.ceil(duration/4);
console.log('time4 ' + time4);

var adcontent = (3600-duration)
console.log('adcontent ' + adcontent)
adssecondsblok = ((3600-duration)/4)
console.log('adssecondsblok ' + adssecondsblok)
adsPerBlock =  Math.ceil((((3600-duration)/4)/30))
console.log('adsPerBlock ' + adsPerBlock)
var adsPerBlock2 = Math.floor((adssecondsblok / 30 ))

var secondsAdsBlok2 = ((30*adsPerBlock2)*bloks )
console.log('secondsAdsBlok2 ' + secondsAdsBlok2)
var lastad = Math.ceil(((adcontent - secondsAdsBlok2) / 30 ))
console.log('lastad ' + lastad)
lasadblock =  adsPerBlock2 + lastad
console.log('lasadblock ' + lasadblock)

var times = [time1,(time1 + time2),(time1 + time2 + time3), (time1 + time2 + time3 + time4)];
}


//2h show

if ((duration > 3600) && (duration < 7200)) {

bloks = 8;
console.log('bloks ' + bloks);
time1 =  Math.ceil(duration/8);
console.log('time1 ' + time1);
time2 =  Math.ceil(duration/8);
console.log('time2 ' + time2);
time3 =  Math.ceil(duration/8);
console.log('time3 ' + time3);
time4 =  Math.ceil(duration/8);
console.log('time4 ' + time4);
time5 =  Math.ceil(duration/8);
console.log('time5 ' + time5);
time6 =  Math.ceil(duration/8);
console.log('time6 ' + time6);
time7 =  Math.ceil(duration/8);
console.log('time7 ' + time7);
time8 =  Math.ceil(duration/8);
console.log('time8 ' + time8);



var adcontent = (7200-duration)
console.log('adcontent ' + adcontent)
adssecondsblok = ((7200-duration)/8)
console.log('adssecondsblok ' + adssecondsblok)
adsPerBlock =  Math.ceil((((7200-duration)/8)/30))
console.log('adsPerBlock ' + adsPerBlock)
var adsPerBlock2 = Math.floor((adssecondsblok / 30 ))

var secondsAdsBlok2 = ((30*adsPerBlock2)*bloks )
console.log('secondsAdsBlok2 ' + secondsAdsBlok2)
var lastad = Math.ceil(((adcontent - secondsAdsBlok2) / 30 ))
console.log('lastad ' + lastad)
lasadblock =  adsPerBlock2 + lastad
console.log('lasadblock ' + lasadblock)

var times = [time1,(time1 + time2),(time1 + time2 + time3), (time1 + time2 + time3 + time4),
             (time1 + time2 + time3 + time4 + time5), + (time1 + time2 + time3 + time4 + time5 + time6),
             (time1 + time2 + time3 + time4 + time5 + time6 + time7), 
             (time1 + time2 + time3 + time4 + time5 + time6 + time7 + time8)];
}




//2:30h show

if ((duration > 7200) && (duration < 9000)) {

bloks = 10;
console.log('bloks ' + bloks);
time1 =  Math.ceil(duration/10);
console.log('time1 ' + time1);
time2 =  Math.ceil(duration/10);
console.log('time2 ' + time2);
time3 =  Math.ceil(duration/10);
console.log('time3 ' + time3);
time4 =  Math.ceil(duration/10);
console.log('time4 ' + time4);
time5 =  Math.ceil(duration/10);
console.log('time5 ' + time5);
time6 =  Math.ceil(duration/10);
console.log('time6 ' + time6);
time7 =  Math.ceil(duration/10);
console.log('time7 ' + time7);
time8 =  Math.ceil(duration/10);
console.log('time8 ' + time8);
time9 =  Math.ceil(duration/10);
console.log('time9 ' + time9);
time10 =  Math.ceil(duration/10);
console.log('time10 ' + time10);



var adcontent = (9000-duration)
console.log('adcontent ' + adcontent)
adssecondsblok = ((9000-duration)/10)
console.log('adssecondsblok ' + adssecondsblok)
adsPerBlock =  Math.ceil((((9000-duration)/10)/30))
console.log('adsPerBlock ' + adsPerBlock)
var adsPerBlock2 = Math.floor((adssecondsblok / 30 ))

var secondsAdsBlok2 = ((30*adsPerBlock2)*bloks )
console.log('secondsAdsBlok2 ' + secondsAdsBlok2)
var lastad = Math.ceil(((adcontent - secondsAdsBlok2) / 30 ))
console.log('lastad ' + lastad)
lasadblock =  adsPerBlock2 + lastad
console.log('lasadblock ' + lasadblock)

var times = [time1,(time1 + time2),(time1 + time2 + time3), (time1 + time2 + time3 + time4),
             (time1 + time2 + time3 + time4 + time5), + (time1 + time2 + time3 + time4 + time5 + time6),
             (time1 + time2 + time3 + time4 + time5 + time6 + time7), 
             (time1 + time2 + time3 + time4 + time5 + time6 + time7 + time8), 
             (time1 + time2 + time3 + time4 + time5 + time6 + time7 + time8 + time9), 
             (time1 + time2 + time3 + time4 + time5 + time6 + time7 + time8 + time9 + time10)];
}













var times4 =[]



for (var i = 0; i < times.length; i++) {
    time = times[i]
    console.log(time)
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);

    var seconds = (time - minutes * 60);
  if (minutes >= 60){
    minutes = minutes - 60;
  }
    if (minutes >= 60){
    minutes = minutes - 60;
  }
        console.log(minutes)

  if (hours <= 9) {
    hours = "0" + hours
  } else {
    hours = hours
  }  
  if (minutes <= 9) {
    minutes = "0" + minutes
  } else {
    minutes = minutes
  }    
  if (seconds <= 9) {
    seconds = "0" + seconds
  } else {
    seconds = seconds
  }  

console.log(hours + ':' + minutes + ':' + seconds)
  times4.push(hours + ':' + minutes + ':' + seconds)
  times4.push(hours + ':' + minutes + ':' + seconds)
}

var zero = "00:00:00";
(times4).unshift(zero)
times4.pop();
console.log(times4)

console.log("theI " + thei)
console.log("thestring " + thestring)




// Account.cutVideos(thei, thestring, times4).then(function(response) {
//     console.log(response)
// })


Account.updatePrograma(thei, bloks, time1, time2, time3, time4, time5,time6,time7,time8,time9,time10,adssecondsblok,adsPerBlock2,lasadblock);




}














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
 


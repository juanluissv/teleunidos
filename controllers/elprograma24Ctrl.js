var theApp53 = angular.module('theApp53', []);
theApp53.controller('elprograma24Ctrl', function($http, $stateParams, $scope, $auth, toastr, Account) {

var theurl = $stateParams.i;
$scope.theurl2 = $stateParams.id;
var playerInstance = jwplayer("myElement6")
var vidurl;
var progtime;
var json1;
var theId = $stateParams.id;
var thei = $stateParams.i;
var thestring;
console.log(theurl)

$scope.getviews = function() {
    Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
      $scope.thecanal = response.data.channel;
      $scope.terminos = response.data.terminos;
      $scope.productor = response.data.productor;
      $scope.youtuber = response.data.youtuber;
    });
};
$scope.getviews();



var playfun = function () {

Account.getVideoLink(thei).then(function(response) {
    console.log(response.data)
    progtime = response.data[0].progtime;

})

thestring = "https://cdn.jwplayer.com/videos/" + theId + "-BTq9CUGg.mp4";
playerInstance.setup({
  file: thestring,
  "height": "100%",
  "width": "100%",
  "stretching": "fill",
  "autostart": true,
  "androidhls": true,
  "mute": true,
  "volume": 100,
  "primary": "html5"
});

$scope.thenumbs2 = [];
var theuniques = [];
$scope.myuniques3 = [];
$scope.myuniques4 = [];
for (var i = 0; i < theuniques.length; i++) {
      if (  ((theuniques[i-1]) != (theuniques[i] - 1))) {
        if(  ((theuniques[i-1]) != (theuniques[i] - 2))) { 
         if(  ((theuniques[i-1] ) != (theuniques[i] - 3))) {
          if(  ((theuniques[i-1]) != (theuniques[i] - 4))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 5))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 6))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 7))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 8))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 9))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 11))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 10))) {             
          if(  ((theuniques[i-1]) != (theuniques[i] - 15))) {             
          if(  ((theuniques[i-1]) != (theuniques[i] - 16))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 12))) { 
          if(  ((theuniques[i-1]) != (theuniques[i] - 23))) {             
          if(  ((theuniques[i-1]) != (theuniques[i] - 24))) {                       
          if(  ((theuniques[i-1]) != (theuniques[i] - 27))) {                     
            $scope.myuniques3.push(theuniques[i])
        }}}}}}}}}}}}}}}}}
}
console.log('myuniques3 ' + $scope.myuniques3)

for (var i = 0; i < $scope.myuniques3.length; i++) {
    time = $scope.myuniques3[i]
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    var seconds = (time - minutes * 60);
  if (minutes >= 60){
    minutes = minutes - 60;
  }
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
$scope.myuniques4.push(hours + ':' + minutes + ':' + seconds)
console.log($scope.myuniques4)
}
console.log('myuniques4 ' + $scope.myuniques4)
     }
playfun();    












  $scope.savetime = function(){
    var myuni = [];
    myuni = $scope.myuniques4;
    console.log(myuni)

    var myuni2 = [];

for (var i = 0; i < myuni.length; i++) {
      if ((myuni[i] == "") || (myuni[i] == undefined)){
        myuni.splice( myuni.indexOf([i]), 1 );
      }
}

for (var i = 0; i < myuni.length; i++) {

      if ((myuni[i] == "") || (myuni[i] == undefined)){
        myuni.splice( myuni.indexOf([i]), 1 );
      }
}




    var bloks  = Math.floor(((myuni.length)/2))
    console.log('bloks: ' +  bloks);



    var blok1 =  moment($scope.myuniques4[1], "hh:mm:ss").diff(moment($scope.myuniques4[0], "hh:mm:ss"), 'seconds');

    var blok2 =  moment($scope.myuniques4[3], "hh:mm:ss").diff(moment($scope.myuniques4[2], "hh:mm:ss"), 'seconds');

    var blok3 =  moment($scope.myuniques4[5], "hh:mm:ss").diff(moment($scope.myuniques4[4], "hh:mm:ss"), 'seconds');

    var blok4 =  moment($scope.myuniques4[7], "hh:mm:ss").diff(moment($scope.myuniques4[6], "hh:mm:ss"), 'seconds');    

    var blok5 =  moment($scope.myuniques4[9], "hh:mm:ss").diff(moment($scope.myuniques4[8], "hh:mm:ss"), 'seconds');    

    var blok6 =  moment($scope.myuniques4[11], "hh:mm:ss").diff(moment($scope.myuniques4[10], "hh:mm:ss"), 'seconds');

    var blok7 =  moment($scope.myuniques4[13], "hh:mm:ss").diff(moment($scope.myuniques4[12], "hh:mm:ss"), 'seconds');
    
    var blok8 =  moment($scope.myuniques4[15], "hh:mm:ss").diff(moment($scope.myuniques4[14], "hh:mm:ss"), 'seconds');

    var blok9 =  moment($scope.myuniques4[17], "hh:mm:ss").diff(moment($scope.myuniques4[16], "hh:mm:ss"), 'seconds');

    var blok10 =  moment($scope.myuniques4[19], "hh:mm:ss").diff(moment($scope.myuniques4[18], "hh:mm:ss"), 'seconds');


if(isNaN(blok1)){blok1=0}
if(isNaN(blok2)){blok2=0}
if(isNaN(blok3)){blok3=0}
if(isNaN(blok4)){blok4=0}
if(isNaN(blok5)){blok5=0}
if(isNaN(blok6)){blok6=0}
if(isNaN(blok7)){blok7=0}
if(isNaN(blok8)){blok8=0}
if(isNaN(blok9)){blok9=0}
if(isNaN(blok10)){blok10=0}

    //console.log(myuni);
    //console.log(myuni.length);
    //var blok1 = ($scope.myuniques4[1] - $scope.myuniques4[0])
    // var blok1 moment.min($scope.myuniques4[1], $scope.myuniques4[0])
    //console.log(moment($scope.myuniques4[0]))
    //console.log($scope.myuniques4[1])
  

    var totcontent = (blok1 + blok2 + blok3 + blok4 + blok5 + blok6 + blok7 + blok8 + blok9 + blok10)
    var adcontent = (progtime - totcontent)
    var secondsAdsBlok = (adcontent /  bloks)
    var adsPerBlock = (secondsAdsBlok / 30 )
    var adsPerBlock2 = Math.floor((secondsAdsBlok / 30 ))
    var secondsAdsBlok2 = ((30*adsPerBlock2)*bloks )
    var lastad = Math.ceil(((adcontent - secondsAdsBlok2) / 30 ))
    lasadblock =  adsPerBlock2 + lastad

Account.updatePrograma(theurl,bloks,blok1,blok2,blok3,blok4,blok5,blok6,blok7,blok8,blok9,blok10,secondsAdsBlok,adsPerBlock2,lasadblock);

    console.log('blok1: ' +  blok1);
    console.log('blok2: ' +  blok2);
    console.log('blok3: ' +  blok3);
    console.log('blok4: ' +  blok4);
    console.log('blok5: ' +  blok5);
    console.log('blok6: ' +  blok6);
    console.log('blok7: ' +  blok7);
    console.log('blok8: ' +  blok8);    
    console.log('blok9: ' +  blok9);    
    console.log('blok10: ' +  blok10);        
    console.log('totcontent: ' +  totcontent);
    console.log('adcontent: ' +  adcontent);
    console.log('secondsAdsBlok: ' +  secondsAdsBlok);
    console.log('adsPerBlock: ' +  adsPerBlock2);
    console.log('secondsAdsBlok2: ' +  secondsAdsBlok2);
    console.log('lastad: ' +  lastad);
    console.log('lasadblock: ' +  lasadblock);
    console.log('thestring ' + thestring)


    Account.cutVideos(theurl, thestring, $scope.myuniques4).then(function(response) {
      console.log(response)
    })
  }

  });

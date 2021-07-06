var theApp43 = angular.module('theApp43', []);
theApp43.controller('elprograma22Ctrl', function($http, $stateParams, uploadService, $scope, $auth, toastr, Account) {

var theurl = $stateParams.id;
$scope.theurl2 = $stateParams.id;
var thestring;
var playerInstance = jwplayer("myElement6")
var vidurl;
var progtime;
var mes;
var json1;
var description;
$scope.getviews = function() {
      Account.getProfile().then(function(response) {
        console.log(response.data.channel)
        $scope.nombre = response.data.nombre;
        $scope.thecanal = response.data.channel;
      $scope.terminos = response.data.terminos;
      $scope.productor = response.data.productor;
      $scope.youtuber = response.data.youtuber;
      console.log('tub')
      console.log($scope.youtuber)
      $scope.theview = response.data.live;

    });



  };
$scope.getviews();


var playfun = function () {
  Account.getVideoLink(theurl).then(function(response) {
    $scope.thisds = response.data;
    progtime = response.data[0].progtime;
    console.log(progtime);
    console.log(response.data)
    $scope.thecanal = response.data[0].channel
    json1 = response.data[0].json1 || 0;
$scope.thename = response.data[0].name;
var thelink =  response.data[0].theurl
thestring = "http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/" + thelink;   
console.log(thestring)
    playerInstance.setup({
      file: thestring,
      "height": "100%",
      "width": "100%",
      "stretching": "fill",
      "autostart": true,
      "tracks": [{ 
            file: "http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/" + response.data[0].thumbnail, 
            kind: "thumbnails"
        }],      
      "androidhls": true,
      "mute": true,
      "volume": 100,
      "primary": "html5"
    });



    $scope.myuniques3 = [];
    $scope.myuniques5 = [];
    $scope.myuniques55 = []

$http.get('https://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + json1, {
    skipAuthorization: true
      }).then(function(response) {    
        for (var i = 0; i < response.data.length; i++) {
          $scope.myuniques3[i] = response.data[i]
        }

console.log($scope.myuniques3)

for (var i = 0; i < $scope.myuniques3.length; i++) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 1))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 2))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 3))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 4))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 5))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 6))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 7))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 8))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 9))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 10))){ 

  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 11))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 12))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 13))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 14))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 15))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 16))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 17))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 18))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 19))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 20))) { 

  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 21))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 22))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 23))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 24))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 25))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 26))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 27))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 28))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 29))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 30))) { 


  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 31))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 32))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 33))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 34))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 35))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 36))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 37))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 38))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 39))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 40))) { 

  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 41))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 42))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 43))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 44))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 45))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 46))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 47))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 48))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 49))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 50))) { 

  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 51))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 52))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 53))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 54))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 55))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 56))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 57))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 58))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 59))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 50))) { 
/*
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 61))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 62))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 63))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 64))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 65))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 66))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 67))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 68))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 69))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 70))) { 

  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 71))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 72))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 73))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 74))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 75))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 76))) {
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 77))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 78))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 79))) { 
  if(  (($scope.myuniques3[i-1]) != ($scope.myuniques3[i] - 80))) {           
*/

  $scope.myuniques55.push($scope.myuniques3[i])


/*


}
}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}
}
}
}

*/
}
}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}
}
}
}



}
}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}
}
}
}


}
}
}
}
}
}
}
}
}
}


}
}
}
}
}
}
}
}
}
}



}

for (var i = 0; i < $scope.myuniques55.length; i++) {
  if(  (($scope.myuniques55[i-1]) != ($scope.myuniques55[i] - 1))) {
  if(  (($scope.myuniques55[i-1]) != ($scope.myuniques55[i] - 2))) { 
  if(  (($scope.myuniques55[i-1]) != ($scope.myuniques55[i] - 3))) { 
  if(  (($scope.myuniques55[i-1]) != ($scope.myuniques55[i] - 4))) { 
  if(  (($scope.myuniques55[i-1]) != ($scope.myuniques55[i] - 5))) { 


  $scope.myuniques5.push($scope.myuniques55[i])

}
}
}
}
}
}



$scope.myuniques4 = [];

for (var i = 0; i < $scope.myuniques5.length; i++) {
    time = $scope.myuniques5[i]
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    var seconds = (time - minutes * 60);
  if (minutes >= 60){
    minutes = minutes - 60;
  }
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

}

   console.log($scope.myuniques4)


})
})
}
playfun();



$scope.getpos2 = function() {

  $scope.myuniques5[index] = $scope.myuniques5[index + 1]
  $scope.myuniques4[index] = $scope.myuniques4[index + 1]
  $scope.myuniques3[index] = $scope.myuniques3[index + 1]

  $scope.myuniques5[index + 1 ] = $scope.myuniques5[index + 2]
  $scope.myuniques4[index + 1 ] = $scope.myuniques4[index + 2]
  $scope.myuniques3[index + 1 ] = $scope.myuniques3[index + 2]

  $scope.myuniques5[index + 2 ] = $scope.myuniques5[index + 3]
  $scope.myuniques4[index + 2 ] = $scope.myuniques4[index + 3]
  $scope.myuniques3[index + 2 ] = $scope.myuniques3[index + 3]

  $scope.myuniques5[index + 3 ] = $scope.myuniques5[index + 4]
  $scope.myuniques4[index + 3 ] = $scope.myuniques4[index + 4]
  $scope.myuniques3[index + 3 ] = $scope.myuniques3[index + 4]

  $scope.myuniques5[index + 4 ] = $scope.myuniques5[index + 5]
  $scope.myuniques4[index + 4 ] = $scope.myuniques4[index + 5]
  $scope.myuniques3[index + 4 ] = $scope.myuniques3[index + 5]

  $scope.myuniques5[index + 5 ] = $scope.myuniques5[index + 6]
  $scope.myuniques4[index + 5 ] = $scope.myuniques4[index + 6]
  $scope.myuniques3[index + 5 ] = $scope.myuniques3[index + 6]

  $scope.myuniques5[index + 6 ] = $scope.myuniques5[index + 7]
  $scope.myuniques4[index + 6 ] = $scope.myuniques4[index + 7]
  $scope.myuniques3[index + 6 ] = $scope.myuniques3[index + 7]

  $scope.myuniques5[index + 7 ] = $scope.myuniques5[index + 8]
  $scope.myuniques4[index + 7 ] = $scope.myuniques4[index + 8]
  $scope.myuniques3[index + 7 ] = $scope.myuniques3[index + 8]

  $scope.myuniques5[index + 8 ] = $scope.myuniques5[index + 9]
  $scope.myuniques4[index + 8 ] = $scope.myuniques4[index + 9]
  $scope.myuniques3[index + 8 ] = $scope.myuniques3[index + 9]

  $scope.myuniques5[index + 9 ] = $scope.myuniques5[index + 10]
  $scope.myuniques4[index + 9 ] = $scope.myuniques4[index + 10]
  $scope.myuniques3[index + 9 ] = $scope.myuniques3[index + 10]


  $scope.myuniques5[index + 10 ] = $scope.myuniques5[index + 11]
  $scope.myuniques4[index + 10 ] = $scope.myuniques4[index + 11]
  $scope.myuniques3[index + 10 ] = $scope.myuniques3[index + 11]  

  $scope.myuniques5[index + 11 ] = $scope.myuniques5[index + 12]
  $scope.myuniques4[index + 11 ] = $scope.myuniques4[index + 12]
  $scope.myuniques3[index + 11 ] = $scope.myuniques3[index + 12]

  $scope.myuniques5[index + 12 ] = $scope.myuniques5[index + 13]
  $scope.myuniques4[index + 12 ] = $scope.myuniques4[index + 13]
  $scope.myuniques3[index + 12 ] = $scope.myuniques3[index + 13]

  $scope.myuniques5[index + 13 ] = $scope.myuniques5[index + 14]
  $scope.myuniques4[index + 13 ] = $scope.myuniques4[index + 14]
  $scope.myuniques3[index + 13 ] = $scope.myuniques3[index + 14]

  $scope.myuniques5[index + 14 ] = $scope.myuniques5[index + 15]
  $scope.myuniques4[index + 14 ] = $scope.myuniques4[index + 15]
  $scope.myuniques3[index + 14 ] = $scope.myuniques3[index + 15]    

  $scope.myuniques5[index + 15 ] = $scope.myuniques5[index + 16]
  $scope.myuniques4[index + 15 ] = $scope.myuniques4[index + 16]
  $scope.myuniques3[index + 15 ] = $scope.myuniques3[index + 16]  

  $scope.myuniques5[index + 16 ] = $scope.myuniques5[index + 17]
  $scope.myuniques4[index + 16 ] = $scope.myuniques4[index + 17]
  $scope.myuniques3[index + 16 ] = $scope.myuniques3[index + 17]

  $scope.myuniques5[index + 17 ] = $scope.myuniques5[index + 18]
  $scope.myuniques4[index + 17 ] = $scope.myuniques4[index + 18]
  $scope.myuniques3[index + 17 ] = $scope.myuniques3[index + 18]    


}


$scope.getpos = function() {
  console.log('gopos')

  $scope.myuniques3[index + 18] = $scope.myuniques3[index + 17]
  $scope.myuniques4[index + 18] = $scope.myuniques4[index + 17]
  $scope.myuniques5[index + 18] = $scope.myuniques5[index + 17]


  $scope.myuniques3[index + 17] = $scope.myuniques3[index + 16]
  $scope.myuniques4[index + 17] = $scope.myuniques4[index + 16]
  $scope.myuniques5[index + 17] = $scope.myuniques5[index + 16]

  $scope.myuniques3[index + 16] = $scope.myuniques3[index + 15]
  $scope.myuniques4[index + 16] = $scope.myuniques4[index + 15]
  $scope.myuniques5[index + 16] = $scope.myuniques5[index + 15]


  $scope.myuniques3[index + 15] = $scope.myuniques3[index + 14]
  $scope.myuniques4[index + 15] = $scope.myuniques4[index + 14]
  $scope.myuniques5[index + 15] = $scope.myuniques5[index + 14]

  $scope.myuniques3[index + 14] = $scope.myuniques3[index + 13]
  $scope.myuniques4[index + 14] = $scope.myuniques4[index + 13]  
  $scope.myuniques5[index + 14] = $scope.myuniques5[index + 13]  

  $scope.myuniques3[index + 13] = $scope.myuniques3[index + 12]
  $scope.myuniques4[index + 13] = $scope.myuniques4[index + 12]
  $scope.myuniques5[index + 13] = $scope.myuniques5[index + 12]

  $scope.myuniques3[index + 12] = $scope.myuniques3[index + 11]
  $scope.myuniques4[index + 12] = $scope.myuniques4[index + 11]
  $scope.myuniques5[index + 12] = $scope.myuniques5[index + 11]

  $scope.myuniques3[index + 11] = $scope.myuniques3[index + 10]
  $scope.myuniques4[index + 11] = $scope.myuniques4[index + 10]
  $scope.myuniques5[index + 11] = $scope.myuniques5[index + 10]

  $scope.myuniques3[index + 10] = $scope.myuniques3[index + 9]
  $scope.myuniques4[index + 10] = $scope.myuniques4[index + 9]
  $scope.myuniques5[index + 10] = $scope.myuniques5[index + 9]

  $scope.myuniques3[index + 9] = $scope.myuniques3[index + 8]
  $scope.myuniques4[index + 9] = $scope.myuniques4[index + 8]
  $scope.myuniques5[index + 9] = $scope.myuniques5[index + 8]

  $scope.myuniques3[index + 8] = $scope.myuniques3[index + 7]
  $scope.myuniques4[index + 8] = $scope.myuniques4[index + 7]
  $scope.myuniques5[index + 8] = $scope.myuniques5[index + 7]

  $scope.myuniques3[index + 7] = $scope.myuniques3[index + 6]  
  $scope.myuniques4[index + 7] = $scope.myuniques4[index + 6]  
  $scope.myuniques5[index + 7] = $scope.myuniques5[index + 6]  

  $scope.myuniques3[index + 6] = $scope.myuniques3[index + 5]    
  $scope.myuniques4[index + 6] = $scope.myuniques4[index + 5]    
  $scope.myuniques5[index + 6] = $scope.myuniques5[index + 5]    

  $scope.myuniques3[index + 5] = $scope.myuniques3[index + 4]
  $scope.myuniques4[index + 5] = $scope.myuniques4[index + 4]
  $scope.myuniques5[index + 5] = $scope.myuniques5[index + 4]

  $scope.myuniques3[index + 4] = $scope.myuniques3[index + 3]
  $scope.myuniques4[index + 4] = $scope.myuniques4[index + 3]
  $scope.myuniques5[index + 4] = $scope.myuniques5[index + 3]

  $scope.myuniques3[index + 3] = $scope.myuniques3[index + 2]
  $scope.myuniques4[index + 3] = $scope.myuniques4[index + 2]
  $scope.myuniques5[index + 3] = $scope.myuniques5[index + 2]

  $scope.myuniques3[index + 2] = $scope.myuniques3[index + 1]
  $scope.myuniques4[index + 2] = $scope.myuniques4[index + 1]
  $scope.myuniques5[index + 2] = $scope.myuniques5[index + 1]

  $scope.myuniques3[index + 1] = $scope.myuniques3[index]
  $scope.myuniques4[index + 1] = $scope.myuniques4[index]
  $scope.myuniques5[index + 1] = $scope.myuniques5[index]

  var thepost = parseInt(playerInstance.getPosition())

    var hours = Math.floor(thepost / 3600);
    var minutes = Math.floor(thepost / 60);
    var seconds = (thepost - minutes * 60);
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



  console.log(thepost)
  $scope.myuniques3[index] = thepost; 
  $scope.myuniques4[index] = hours + ':' + minutes + ':' + seconds
}











var index; 
$scope.show1 = function(){
    playerInstance.seek($scope.myuniques5[0]);
    jwplayer().on('seeked', function(){
      index = 0;
      playerInstance.pause();
      //console.log(index0)
    })
}

$scope.show2 = function(){
    playerInstance.seek($scope.myuniques5[1]);
    jwplayer().on('seeked', function(){
      index = 1;      
      playerInstance.pause();

    })      
}

$scope.show3 = function(){
    playerInstance.seek($scope.myuniques5[2]);
    jwplayer().on('seeked', function(){
      index = 2;      
      playerInstance.pause();

    })      
}

$scope.show4 = function(){
    playerInstance.seek($scope.myuniques5[3]);
    jwplayer().on('seeked', function(){
      index = 3;      
      playerInstance.pause();
    })      

}


$scope.show5 = function(){
    playerInstance.seek($scope.myuniques5[4]);
    jwplayer().on('seeked', function(){
      index = 4;      
      playerInstance.pause();
    })      
}

$scope.show6 = function(){
    playerInstance.seek($scope.myuniques5[5]);
    jwplayer().on('seeked', function(){
      index = 5;      
      playerInstance.pause();
    })      
}

$scope.show7 = function(){
    playerInstance.seek($scope.myuniques5[6]);
    jwplayer().on('seeked', function(){
      index = 6;      
      playerInstance.pause();
    })      
}

$scope.show8 = function(){
    playerInstance.seek($scope.myuniques5[7]);
    jwplayer().on('seeked', function(){
      index = 7;      
      playerInstance.pause();
    })      
}

$scope.show9 = function(){
    playerInstance.seek($scope.myuniques5[8]);
    jwplayer().on('seeked', function(){
      index = 8;      
      playerInstance.pause();
    })      
}

$scope.show10 = function(){
    playerInstance.seek($scope.myuniques5[9]);
    jwplayer().on('seeked', function(){
      index = 9;      
      playerInstance.pause();
    })      
}

$scope.show11 = function(){
    playerInstance.seek($scope.myuniques5[10]);
    jwplayer().on('seeked', function(){
      index = 10;      
      playerInstance.pause();
    })      
}

$scope.show12 = function(){
    playerInstance.seek($scope.myuniques5[11]);
    jwplayer().on('seeked', function(){
      index = 11;      
      playerInstance.pause();
    })      
}

$scope.show13 = function(){
    playerInstance.seek($scope.myuniques5[12]);
    jwplayer().on('seeked', function(){
      index = 12;      
      playerInstance.pause();
    })      
}

$scope.show14 = function(){
    playerInstance.seek($scope.myuniques5[13]);
    jwplayer().on('seeked', function(){
      index = 13;      
      playerInstance.pause();
    })      
}

$scope.show15 = function(){
    playerInstance.seek($scope.myuniques5[14]);
    jwplayer().on('seeked', function(){
      index = 14;
      playerInstance.pause();
    })      
}

$scope.show16 = function(){
    playerInstance.seek($scope.myuniques5[15]);
    jwplayer().on('seeked', function(){
      index = 15;      
      playerInstance.pause();
    })      
}

$scope.show17 = function(){
    playerInstance.seek($scope.myuniques5[16]);
    jwplayer().on('seeked', function(){
      index = 16;      
      playerInstance.pause();
    })      
}

$scope.show18 = function(){
    playerInstance.seek($scope.myuniques5[17]);
    jwplayer().on('seeked', function(){
      index = 17;      
      playerInstance.pause();
    })      
}

$scope.show19 = function(){
    playerInstance.seek($scope.myuniques5[18]);
    jwplayer().on('seeked', function(){
      index = 18;      
      playerInstance.pause();
    })      
}

$scope.show20 = function(){
    playerInstance.seek($scope.myuniques5[19]);
    jwplayer().on('seeked', function(){
      index = 19;      
      playerInstance.pause();
    })      
}

$scope.show21 = function(){
    playerInstance.seek($scope.myuniques5[20]);
    jwplayer().on('seeked', function(){
      index = 20;      
      playerInstance.pause();
    })      
}

$scope.show22 = function(){
    playerInstance.seek($scope.myuniques5[21]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}

$scope.show23 = function(){
    playerInstance.seek($scope.myuniques5[22]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}

$scope.show24 = function(){
    playerInstance.seek($scope.myuniques5[23]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}

$scope.show25 = function(){
    playerInstance.seek($scope.myuniques5[24]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}











  $scope.savetime = function(){
    

    fecha = moment()

    mes =  moment().format("MMMM")


  if (mes == "January"){
    mes = "Enero"
  }
  if (mes == "February"){
    mes = "Febrero"
  }
  if (mes == "March"){
    mes = "Marzo"
  }
  if (mes == "April"){
    mes = "Abril"
  }
  if (mes == "May"){
    mes = "Mayo"
  }
  if (mes == "June"){
    mes = "Junio"
  }
  if (mes == "July"){
    mes = "Julio"
  }    
  if (mes == "August"){
    mes = "Agosto"
  }
  if (mes == "September"){
    mes = "Septiembre"
  }
  if (mes == "October"){
    mes = "Octubre"
  }
  if (mes == "November"){
    mes = "Noviembre"
  }
  if (mes == "December"){
    mes = "Diciembre"
  }



  fecha = moment(fecha).format("D ") + "de " + mes + " de " + moment(fecha).format("YYYY");   
 var fecha2 =  "Informa TVX: Noticias de el " +  fecha
 var encuentro2 = "Encuentro TVX: Entrevista del " +  fecha
 var plataforma2 = "Plataforma TVX: Opinion del " +  fecha
 var radar2 = "Radar Electoral: Entrevista del " +  fecha
 var pop2 = "Pop Time: " + fecha;
 var consultorio2 = "El Consultorio: " + fecha; 
 var remind2 = "Remind: " + fecha; 



    if (theurl == "MbTfPGxc") {
    description = fecha2
    }

    if (theurl == "pXJWiS8T") {
    description = encuentro2
    }

    if (theurl == "qQ5Fr1mn") {
    description = plataforma2
    }

    if (theurl == "VWrIT5R6") {
    description = radar2
    }


    if (theurl == "RqUwolce") {
    description = pop2
    }

    if (theurl == "LyON9x3D") {
    description = pop2
    }

    if (theurl == "FPapq1k8") {
    description = pop2
    }









    var myuni = [];
    myuni = $scope.myuniques4;

    console.log(myuni)
    console.log(myuni.length)

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





    console.log(myuni)
    console.log(myuni.length)



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
    //console.log($scope.myuniques4[1]) asdjklasjdlks ddjalksjdklasjdlksajlk
  

    var totcontent = (blok1 + blok2 + blok3 + blok4 + blok5 + blok6 + blok7 + blok8 + blok9 + blok10)
    var adcontent = (progtime - totcontent)
    var secondsAdsBlok = (adcontent /  bloks)
    var adsPerBlock = (secondsAdsBlok / 30 )
    var adsPerBlock2 = Math.floor((secondsAdsBlok / 30 ))
    var secondsAdsBlok2 = ((30*adsPerBlock2)*bloks )
    var lastad = Math.ceil(((adcontent - secondsAdsBlok2) / 30 ))
    lasadblock =  adsPerBlock2 + lastad


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

          toastr.info('Cambios Guardados');

Account.updatePrograma(theurl,bloks,blok1,blok2,blok3,blok4,blok5,blok6,blok7,blok8,blok9,blok10,secondsAdsBlok,adsPerBlock2,lasadblock);
Account.cutVideos(theurl, thestring, $scope.myuniques4, description );
  }

  });

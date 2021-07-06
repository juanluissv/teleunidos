var theApp45 = angular.module('theApp45', []);
theApp45.controller('micanal8Ctrl', ['$scope', '$http', 'Account',
 function($scope, $http, Account, $log, $q, ) {



$scope.getviews = function() {
    Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;
      
         theurl = response.data.live;
        });

  };
$scope.getviews();


var theplaylist = [];
var timer;
var segundos;
var thefile;
var myoffset;
var myseconds;
var myseconds2;
var myseconds3;
var myseconds4;
var qualt;

var mediaid;

var playfun = function (mediaobjtt, vuelta, thesec) {
console.log(mediaobjtt)



$(".player396").append( "<div class='play3'  id='myElement121'></div> " );
var playerInstance =jwplayer("myElement121")

  $http.get('https://cdn.jwplayer.com/v2/playlists/' + mediaobjtt, {
    skipAuthorization: true
  }).then(function(response) {
    theplaylist = response.data.playlist;
    //console.log(theplaylist[5].title);
 function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].sources)

// mediaid = theplaylist[0].mediaid;            
//         if ((theplaylist[0].sources[1] != undefined) && (theplaylist[0].sources[1].type != "audio/mp4")){
//             qualt = "2L3XhZ4A"           
//         }        
//         if ((theplaylist[0].sources[2] != undefined) && (theplaylist[0].sources[2].type != "audio/mp4")){
//             qualt = "LqlTK0hs"           
//         }
//         if ((theplaylist[0].sources[3] != undefined) && (theplaylist[0].sources[3].type != "audio/mp4")){
//             qualt = "BTq9CUGg"       sdasdasd     
//         }


        if ((theplaylist[0].sources[1] != undefined) && (theplaylist[0].sources[1].type != "audio/mp4")){
            thefile = theplaylist[0].sources[1].file            
        }        
        if ((theplaylist[0].sources[2] != undefined) && (theplaylist[0].sources[2].type != "audio/mp4")){
         thefile = theplaylist[0].sources[2].file
        }
        if ((theplaylist[0].sources[3] != undefined) && (theplaylist[0].sources[3].type != "audio/mp4")){
            thefile = theplaylist[0].sources[3].file
        }
        if ((theplaylist[0].sources[4] != undefined) && (theplaylist[0].sources[3].type != "audio/mp4")){
            thefile = theplaylist[0].sources[4].file
        }


console.log(theplaylist[0].sources[2].type)
console.log('thesec ' + thesec);

duration = theplaylist[0].duration;
console.log('duration ' + duration)

 
if ((duration > 3600) && (duration < 7200)) {
adsecondsblock = ((7200 - duration) / 8)
adsPerBlock = Math.ceil(((adsecondsblock/8)/30))
if (vuelta == 1 ){
  myoffset = duration / 8
}
if (vuelta == 2 ){
  myoffset = ((duration / 8) * 2) 
}
if (vuelta == 3 ){
  myoffset = ((duration / 8) * 3)
}
if (vuelta == 4 ){
  myoffset = (((duration / 8) * 4))
}
if (vuelta == 5 ){
  myoffset = (((duration / 8) * 5))
}
if (vuelta == 6 ){
  myoffset = (((duration / 8) * 6))
}
if (vuelta == 7 ){
  myoffset = (((duration / 8) * 7))
}
if (vuelta == 8 ){
  myoffset = (((duration / 8) * 8))
}
}

if ((duration > 1800) && (duration < 3600)) {
adsecondsblock = ((3600 - duration) / 4)
adsPerBlock = Math.ceil(((adsecondsblock/4)/30))

if (vuelta == 1 ){
  myoffset = duration / 4
}
if (vuelta == 2 ){
  myoffset = ((duration / 4) * 2) 
}
if (vuelta == 3 ){
  myoffset = ((duration / 4) * 3)
}
if (vuelta == 4 ){
  myoffset = (((duration / 4) * 4) - adsecondsblock)
}

// mysecond1 = ((3600 - duration)/4)
// mysecond2 = (((3600 - duration)/4) * 2)
// mysecond3 = (((3600 - duration)/4) * 3)
// mysecond4 = (((3600 - duration)/4) * 4)



}


if ((duration > 0) && (duration < 1800)) {
adsecondsblock = (1800 - duration) / 2
adsPerBlock = Math.ceil(((adsecondsblock/2)/30))
console.log(adsecondsblock + ' adsecondsblock')

if (vuelta == 1 ){
  myoffset = (duration / 2)
}
if (vuelta == 2){
  myoffset = (((duration / 2) * 2))
}

// mysecond1 = ((1800 - duration)/2)
// mysecond2 = (((1800 - duration)/2) * 2)


}



playerInstance.setup({
 "height": "100%",
  "width": "100%",
    "stretching": "fill",
  "autostart": true,
  "androidhls": true,
 "mute": false,
"skin": {
  "name": "myskin"
  }, 
 "image": "http://infinite-fjord-54016.herokuapp.com/canales/loading.png",    
"controls": true,
  "volume": 100,
  "primary": "html5",
  "type": "mp4",  
  "playlist": [{
        "file": thefile
    }],
    'advertising': {
    'client': 'vast',
    'schedule': {
      'middroll': {
        'offset': myoffset,
        "tag": "https://servedbyadbutler.com/vast.spark?setID=6881&ID=172550&pid=69339"
    }    
}
}
});




var adnumber = 0;
playerInstance.on('adComplete', function() {
  if ( adnumber < 20) {
  playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=6881&ID=172550&pid=69339");
  console.log(adnumber);
  }
  adnumber = adnumber + 1;
})

console.log((adnumber));




playerInstance.on('ready', function() {
    playerInstance.play();
    playerInstance.seek(thesec);
});


playerInstance.on('pause', function() {
  //   playerInstance.play();
  // playerInstance.seek(thesec);
    timer()

});

playerInstance.on('complete', function() {
    //playerInstance.play();
});



playfun.setvolume = function(){
    playerInstance.setMute(false);
    playerInstance.setVolume(100);
    playerInstance.setMute(true);
    playerInstance.setVolume(0);
    playerInstance.setMute(true);
    playerInstance.setVolume(0);
  }

  })
}






var changeschedule = function (playlistnumb, vuelta, thesec) {
 if (playlistnumb === 2) {
// reporteros 
            playfun('m14C9g32', vuelta, thesec);
    }
 if (playlistnumb === 22) {
// reporteros 
            playfun('m14C9g32', vuelta, thesec);
    }
 if (playlistnumb === 222) {
// reporteros 
            playfun('m14C9g32', vuelta, thesec);
    }
 if (playlistnumb === 3) {
// misa 
            playfun('6sLm61dn', vuelta, thesec);
    }    
 if (playlistnumb === 33) {
// misa 
  console.log('here')

            playfun('6sLm61dn', vuelta, thesec);
    }   
  if (playlistnumb === 333) {
// misa 
            playfun('6sLm61dn', vuelta, thesec);
    }
  if (playlistnumb === 4) {
// ganale 
            playfun('pwjSiQme', vuelta, thesec);
    }
  if (playlistnumb === 44) {
// ganale 
            playfun('pwjSiQme', vuelta, thesec);
    }   
  if (playlistnumb === 444) {
// ganale 
            playfun('pwjSiQme', vuelta, thesec);
    }
  if (playlistnumb === 5) {
// conversando 
            playfun('E9lpPkD8', vuelta, thesec);
    }
  if (playlistnumb === 55) {
// conversando 
            playfun('E9lpPkD8', vuelta, thesec);
    }  
  if (playlistnumb === 555) {
// conversando 
            playfun('E9lpPkD8', vuelta, thesec);
    }
  if (playlistnumb === 6) {
// entrevista 
            playfun('fofLSZD9', vuelta, thesec);
    }
  if (playlistnumb === 66) {
// entrevista 
            playfun('fofLSZD9', vuelta, thesec);
    }  
  if (playlistnumb === 666) {
// entrevista 
            playfun('fofLSZD9', vuelta, thesec);
    }                                                     
}    
   


var runthetime = function(theprogram) {
$( "#myElement591" ).remove();



//reporteros 1h
if (theprogram === 2 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/m14C9g32', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}





var a = moment({ hour:07, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);



  if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(2, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(2, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(2, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(2, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

})
}







//misa - 1h 
if (theprogram === 3 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/6sLm61dn', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;


function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}



var a = moment({ hour:08, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);



  if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(3, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(3, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

})
}







//ganale - 2h 
if (theprogram === 4 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/pwjSiQme', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration

if ((duration > 3600) && (duration < 7200)) {
myseconds = ((7200 - duration)/8)
myseconds2 = (((7200 - duration)/8) * 2)
myseconds3 = (((7200 - duration)/8) * 3)
myseconds4 = (((7200 - duration)/8) * 4)
myseconds5 = (((7200 - duration)/8) * 5)
myseconds6 = (((7200 - duration)/8) * 6)
myseconds7 = (((7200 - duration)/8) * 7)
}

if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}

var a = moment({ hour:10, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)



 var seconds = (7200 - remaining);// clock time

if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(4, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(4, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 3600) && (seconds < 4500)) {
    console.log('seconds ' + seconds)
    if ( seconds < (3600 + myseconds)) {
    var seconds2 = (seconds - myseconds4)
    }  else {
     var  seconds2 = seconds - myseconds4
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(4, 5, seconds2);

    var salto = (4500 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 4500) && (seconds < 5400)) {
    console.log('seconds ' + seconds)
    if ( seconds < (4500 + myseconds)) {
    var seconds2 = (seconds - myseconds5)
    }  else {
     var  seconds2 = seconds - myseconds5
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(4, 6, seconds2);

    var salto = (5400 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > 5400) && (seconds < 6300)) {
    console.log('seconds ' + seconds)
    if ( seconds < (4500 + myseconds)) {
    var seconds2 = (seconds - myseconds6)
    }  else {
     var  seconds2 = seconds - myseconds6
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(4, 7, seconds2);

    var salto = (6300 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}



if  ((seconds > 6300) && (seconds < 7200)) {
    console.log('seconds ' + seconds)
    if ( seconds < (6300 + myseconds)) {
    var seconds2 = (seconds - myseconds7)
    }  else {
     var  seconds2 = seconds - myseconds7
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(4, 8, seconds2);

    var salto = (7200 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}










//conversando  - 1h 
if (theprogram === 5 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/E9lpPkD8', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}





var a = moment({ hour:11, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);



  if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(5, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(5, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

})
}







//entrevista - 1h 
if (theprogram === 6 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/fofLSZD9', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}



var a = moment({ hour:12, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)


 var seconds = (3600 - remaining);// clock time


if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(6, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(6, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(6, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(6, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}








//reporteros -1h 
if (theprogram === 22 ) {
$http.get('https://cdn.jwplayer.com/v2/playlists/m14C9g32', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}




var a = moment({ hour:13, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (3600 - remaining);



if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(22, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(22, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(22, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(22, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}









//misa- 1h 
if (theprogram === 33 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/6sLm61dn', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}

var a = moment({ hour:14, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining); // clock time



if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(33, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(33, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}








//ganale -2h 
if (theprogram === 44 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/pwjSiQme', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration

if ((duration > 3600) && (duration < 7700)) {
myseconds = ((7200 - duration)/8)
myseconds2 = (((7200 - duration)/8) * 2)
myseconds3 = (((7200 - duration)/8) * 3)
myseconds4 = (((7200 - duration)/8) * 4)
myseconds5 = (((7200 - duration)/8) * 5)
myseconds6 = (((7200 - duration)/8) * 6)
myseconds7 = (((7200 - duration)/8) * 7)
}

if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}

var a = moment({ hour:16, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)



 var seconds = (7200 - remaining);// clock time

if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(44, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(44, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 3600) && (seconds < 4500)) {
    console.log('seconds ' + seconds)
    if ( seconds < (3600 + myseconds)) {
    var seconds2 = (seconds - myseconds4)
    }  else {
     var  seconds2 = seconds - myseconds4
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(44, 5, seconds2);

    var salto = (4500 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 4500) && (seconds < 5400)) {
    console.log('seconds ' + seconds)
    if ( seconds < (4500 + myseconds)) {
    var seconds2 = (seconds - myseconds5)
    }  else {
     var  seconds2 = seconds - myseconds5
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(44, 6, seconds2);

    var salto = (5400 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > 5400) && (seconds < 6300)) {
    console.log('seconds ' + seconds)
    if ( seconds < (4500 + myseconds)) {
    var seconds2 = (seconds - myseconds6)
    }  else {
     var  seconds2 = seconds - myseconds6
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(44, 7, seconds2);

    var salto = (6300 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}



if  ((seconds > 6300) && (seconds < 7200)) {
    console.log('seconds ' + seconds)
    if ( seconds < (6300 + myseconds)) {
    var seconds2 = (seconds - myseconds7)
    }  else {
     var  seconds2 = seconds - myseconds7
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(44, 8, seconds2);

    var salto = (7200 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}










//conversando - 1h 
if (theprogram === 55 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/E9lpPkD8', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration

if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}

if ((duration > 0) && (duration < 1800)) {
myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)
}


var a = moment({ hour:17, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (3600 - remaining);

  if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(55, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(55, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

})
}





//entrevista  - 1h 
if (theprogram === 66 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/fofLSZD9', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration

if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}

if ((duration > 0) && (duration < 1800)) {
myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)
}

var a = moment({ hour:18, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);

  if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(66, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(66, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(66, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(66, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}








//reporteros - 1h 
if (theprogram === 222 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/m14C9g32', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration


if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {
myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)
}


var a = moment({ hour:19, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);



  if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(222, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(222, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(222, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(222, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}






//misa - 1h
if (theprogram === 333 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/6sLm61dn', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}
var a = moment({ hour:20, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining); // clock time



if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(333, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(333, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}







//ganale - 2h 
if (theprogram === 444 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/pwjSiQme', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;


function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration

if ((duration > 3600) && (duration < 7200)) {
myseconds = ((7200 - duration)/8)
myseconds2 = (((7200 - duration)/8) * 2)
myseconds3 = (((7200 - duration)/8) * 3)
myseconds4 = (((7200 - duration)/8) * 4)
myseconds5 = (((7200 - duration)/8) * 5)
myseconds6 = (((7200 - duration)/8) * 6)
myseconds7 = (((7200 - duration)/8) * 7)
}

if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}

var a = moment({ hour:22, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)



 var seconds = (7200 - remaining);// clock time

if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(444, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(444, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 3600) && (seconds < 4500)) {
    console.log('seconds ' + seconds)
    if ( seconds < (3600 + myseconds)) {
    var seconds2 = (seconds - myseconds4)
    }  else {
     var  seconds2 = seconds - myseconds4
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(444, 5, seconds2);

    var salto = (4500 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 4500) && (seconds < 5400)) {
    console.log('seconds ' + seconds)
    if ( seconds < (4500 + myseconds)) {
    var seconds2 = (seconds - myseconds5)
    }  else {
     var  seconds2 = seconds - myseconds5
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(444, 6, seconds2);

    var salto = (5400 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > 5400) && (seconds < 6300)) {
    console.log('seconds ' + seconds)
    if ( seconds < (4500 + myseconds)) {
    var seconds2 = (seconds - myseconds6)
    }  else {
     var  seconds2 = seconds - myseconds6
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(444, 7, seconds2);

    var salto = (6300 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}



if  ((seconds > 6300) && (seconds < 7200)) {
    console.log('seconds ' + seconds)
    if ( seconds < (6300 + myseconds)) {
    var seconds2 = (seconds - myseconds7)
    }  else {
     var  seconds2 = seconds - myseconds7
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(444, 8, seconds2);

    var salto = (7200 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}




}
)}





//conversando - 1h
if (theprogram === 555 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/E9lpPkD8', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration



if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}


var a = moment({ hour:23, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);



if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(555, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(555, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(555, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(555, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}





//entrevista - 1h
if (theprogram === 666 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/fofLSZD9', {
  skipAuthorization: true
}).then(function(response) {
    theplaylist = response.data.playlist;

function bubble(arr) {
      var len = arr.length;
    
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].pubdate < arr[j + 1].pubdate) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
    }
theplaylist = bubble(theplaylist);
console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration

if ((duration > 1800) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


if ((duration > 0) && (duration < 1800)) {

myseconds = ((1800 - duration)/2)
myseconds2 = (((1800 - duration)/2) * 2)

}



var a = moment({ hour:24, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);



  if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(666, 1, seconds2);

    var salto = (900 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 900) && (seconds < 1800)) {
    console.log('seconds ' + seconds)
    if ( seconds < (900 + myseconds)) {
    var seconds2 = (seconds - myseconds)
    }  else {
     var  seconds2 = seconds - myseconds
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(666, 2, seconds2);

    var salto = (1800 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > 1800) && (seconds < 2700)) {
    console.log('seconds ' + seconds)
    if ( seconds < (1800 + myseconds)) {
    var seconds2 = (seconds - myseconds2)
    }  else {
     var  seconds2 = seconds - myseconds2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(666, 3, seconds2);

    var salto = (2700 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > 2700) && (seconds < 3600)) {
    console.log('seconds ' + seconds)
    if ( seconds < (2700 + myseconds)) {
    var seconds2 = (seconds - myseconds3)
    }  else {
     var  seconds2 = seconds - myseconds3
    }
    console.log('seconds2 ' + seconds2)    
    changeschedule(666, 4, seconds2);

    var salto = (3600 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

}
)}



}//runthetime






var time88 = function() {
$scope.obj8_1 = { value1: false };
$scope.obj8_2 = { value2: false };
$scope.obj8_3 = { value3: false };
$scope.obj8_4 = { value4: false };

$scope.objS8_1 = { valueS1: false };
$scope.objS8_2 = { valueS2: false };
$scope.objS8_3 = { valueS3: false };
$scope.objS8_4 = { valueS4: false };



//block1
        if (moment().minutes(0).format('h:mm a') === "12:00 am") {
            $scope.program8_1 = 'Cierre';
            $scope.objS8_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 am") {
            $scope.program8_2 = 'Cierre';
            if((moment().format('h:mm a') >= "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'
            };  
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 am") {
            $scope.program8_3 = 'Cierre';
            $scope.objS8_3 = { valueS3: true };
            if((moment().format('h:mm a') > "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 am") {
            $scope.program8_4 =  'Cierre';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            }; 
        };



        //block1-2
        if (moment().minutes(0).format('h:mm a') === "1:00 am") {
            $scope.program8_1 = 'Cierre';
            $scope.objS8_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';            
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 am") {
            $scope.program8_2 =  'Cierre' ;
            if((moment().format('h:mm a') >= "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';            
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 am") {
            $scope.program8_3 = 'Cierre';
            $scope.objS8_3 = { valueS3: true };
            if((moment().format('h:mm a') > "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 am") {
            $scope.program8_4 = 'Cierre';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            };             
        }; 


        //block2
        if (moment().minutes(0).format('h:mm a') === "2:00 am") {
            $scope.program8_1 = 'Cierre';
            $scope.objS8_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';            
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 am") {
            $scope.program8_2 = 'Cierre';
            if((moment().format('h:mm a') >= "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';          
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 am") {
            $scope.program8_3 = 'Cierre';
            $scope.objS8_3 = { valueS3: true };
            if((moment().format('h:mm a') > "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 am") {
            $scope.program8_4 =  'Cierre' ;
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            };
        };

        //block2-2
        if (moment().minutes(0).format('h:mm a') === "3:00 am") {
            $scope.program8_1 = 'Cierre';
            $scope.objS8_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';           
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "3:30 am") {
            $scope.program8_2 =  'Cierre';
            if((moment().format('h:mm a') >= "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';           
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 am") {
            $scope.program8_3 = 'Cierre';
            $scope.objS8_3 = { valueS3: true };
            if((moment().format('h:mm a') > "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "4:30 am") {
            $scope.program8_4 = 'Cierre';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            }; 
        }; 


        //block3
        if (moment().minutes(0).format('h:mm a') === "4:00 am") {
            $scope.program8_1 = 'Cierre';
            $scope.objS8_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';           
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 am") {
            $scope.program8_2 = 'Cierre';
            if((moment().format('h:mm a') >= "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';            
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "5:00 am") {
            $scope.program8_3 = 'Cierre';
            $scope.objS8_3 = { valueS3: true };
            $scope.obj8_3 = { value3: true };
            if((moment().format('h:mm a') > "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 am") {
            $scope.program8_4 =  'Santo Rosario' ;
            if((moment().format('h:mm a') > "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program8 =  'Santo Rosario' ;
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '05:30-06:00 AM'            
            };
        };



        //block3-2
        if (moment().minutes(0).format('h:mm a') === "5:00 am") {
            $scope.program8_1 = 'Cierre';
            $scope.obj8_1 = { value1: true };    
            if((moment().format('h:mm a') >= "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program8 =  'Cierre' ;
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM';   
            };                    
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 am") {
            $scope.program8_2 =  'Agape noticias' ;
            $scope.obj8_2 = { value2: true };
            if((moment().format('h:mm a') >= "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program8 =  'Agape noticias' ;
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '05:30-06:00 AM'; 
                runthetime(2)                                                      
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 am") {
            $scope.program8_3 = 'Reporteros';
            if((moment().format('h:mm a') > "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program8 =  'Dios es Amor' ;
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM'; 
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 am") {
            $scope.program8_4 = 'Reporteros';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program8 = 'Dios es Amor';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM'; 
            } 
        }; 



        //block4
        if (moment().minutes(0).format('h:mm a') === "6:00 am") {
            $scope.program8_1 = 'Reporteros';
            if((moment().format('h:mm a') >= "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program8 = 'Reporteros';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM'; 
                runthetime(2)                                                                      
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 am") {
            $scope.program8_2 = 'Reporteros';
            if((moment().format('h:mm a') >= "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program8 = 'Reporteros';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM'; 
                runthetime(2)                                                                      
            } 
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };            
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 am") {
            $scope.program8_3 = 'Santa misa';
            if((moment().format('h:mm a') > "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program8 = 'Dios es Amor';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM'; 
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 am") {
            $scope.program8_4 =  'Santa misa';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program8 =  'Dios es Amor' ;
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM'; 
            } 
        };


        //block4-2
        if (moment().minutes(0).format('h:mm a') === "7:00 am") {
            $scope.program8_1 = 'Santa misa';
            if((moment().format('h:mm a') >= "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program8 = 'Santa misa';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM'; 
                runthetime(3)                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 am") {
            $scope.program8_2 =  'Santa misa';
            if((moment().format('h:mm a') >= "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program8 =  'Santa misa' ;
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-08:00 AM';
                runthetime(3)                                                      
            } 
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 am") {
            $scope.program8_3 = 'Ganale tu puedes';
            if((moment().format('h:mm a') > "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program8 =  'Dios es Amor' ;
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM'; 
            };

        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 am") {
            $scope.program8_4 = 'Ganale tu puedes';
            if((moment().format('h:mm a') > "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program8 = 'Esquina Deportiva';
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM'; 
            } 
            $scope.objS8_4 = { valueS4: true };            
        }; 


        //block5
        if (moment().minutes(0).format('h:mm a') === "8:00 am") {
            $scope.program8_1 = 'Ganale tu puedes';
            if((moment().format('h:mm a') >= "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM'; 
                runthetime(4)                                                                      
            };
            $scope.objS8_1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 am") {
            $scope.program8_2 = 'Ganale tu puedes';
            if((moment().format('h:mm a') >= "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM';
                runthetime(4)                                                                       
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 am") {
            $scope.program8_3 = 'Ganale tu puedes';
            if((moment().format('h:mm a') > "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program8 = 'Diosito TV';
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM'; 
            } 
            $scope.objS8_3 = { valueS3: true };            
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 am") {
            $scope.program8_4 =  'Ganale tu puedes';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "9:30 am") & (moment().format('h:mm a') < "10:00 am")) {
                $scope.program8 = 'Diosito TV';
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM'; 
            }; 
        };


        //block5-2
        if (moment().minutes(0).format('h:mm a') === "9:00 am") {
            $scope.program8_1 = 'Ganale tu puedes';
            if((moment().format('h:mm a') >= "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM'; 
                runthetime(4)                                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 am") {
            $scope.program8_2 =  'Ganale tu puedes';
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "9:30 am") & (moment().format('0h:mm a') < "10:00 am")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Programa juvenil';
                $scope.ptime8 = '08:00-10:00 AM'; 
                runthetime(4)                                                                      
            };
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 am") {
            $scope.program8_3 = 'Conversando'; 
            if((moment().format('h:mm a') > "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
                $scope.program8 = 'Agape noticias';
                $scope.desc8 = 'Documentales';
                $scope.ptime8 = '10:00-10:30 AM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 am") {
            $scope.program8_4 = 'Conversando';
            $scope.objS8_4 = { valueS4: true };            
            if((moment().format('h:mm a') > "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
                $scope.program8 = 'Agape noticias';
                $scope.desc8 = 'Avances en la sociedad';
                $scope.ptime8 = '10:30-11:00 AM'; 
            } 
        }; 


        //block6
        if (moment().minutes(0).format('h:mm a') === "10:00 am") {
            $scope.program8_1 = 'Conversando';
            if((moment().format('h:mm a') >= "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
                $scope.program8 = 'Conversando';
                $scope.desc8 = 'Documentales';
                $scope.ptime8 = '10:00-10:30 AM'; 
                runthetime(5)                                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 am") {
            $scope.program8_2 = 'Conversando'; 
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
                $scope.program8 = 'Conversando';
                $scope.desc8 = 'Avances en la sociedad';
                $scope.ptime8 = '10:30-11:00 AM'; 
                runthetime(5)                                                                      
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 am") {
            $scope.program8_3 = 'La entrevista';
            if((moment().format('h:mm a') > "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program8 = 'Radio Luz';
                $scope.desc8 = 'Turismo';
                $scope.ptime8 = '11:00-12:00 AM'; 
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 am") {
            $scope.program8_4 =  'La entrevista' ;
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program8 =  'Radio Luz' ;
                $scope.desc8 = 'Turismo';
                $scope.ptime8 = '11:00-12:00 AM'; 
            } 
        };



        //block 6-2

        if (moment().minutes(0).format('h:mm a') === "11:00 am") {
            $scope.program8_1 = 'La entrevista';
            if((moment().format('h:mm a') >= "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program8 = 'La entrevista';
                $scope.desc8 = 'Turismo';
                $scope.ptime8 = '11:00-12:00 AM'; 
                runthetime(6)                                                                      
            };       
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 am") {
            $scope.program8_2 =  'La entrevista' ;
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program8 =  'La entrevista' ;
                $scope.desc8 = 'Turismo';
                $scope.ptime8 = '11:00-12:00 AM'; 
                runthetime(6)                                                                      
            };         
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 pm") {
            $scope.program8_3 = 'Reporteros';
            if((moment().format('h:mm a') > "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program8 = 'Los Pingues';
                $scope.desc8 = 'Recetas de cocina';
                $scope.ptime8 = '12:00-12:30 PM'; 
            }    
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 pm") {
            $scope.program8_4 = 'Reporteros';
            $scope.objS8_4 = { valueS4: true }
            if((moment().format('h:mm a') > "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program8 = 'Los Pingues';
                $scope.desc8 = 'Recetas de cocina';
                $scope.ptime8 = '12:30-01:00 PM'; 
            }     
        }; 


        //block7
        if (moment().minutes(0).format('h:mm a') === "12:00 pm") {
            $scope.program8_1 = 'Reporteros';
            if((moment().format('h:mm a') >= "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program8 = 'Reporteros';
                $scope.desc8 = 'Recetas de cocina';
                $scope.ptime8 = '12:00-12:30 PM'; 
                runthetime(22)                                                                      
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 pm") {
            $scope.program8_2 = 'Reporteros';
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program8 = 'Reporteros';
                $scope.desc8 = 'Recetas de cocina';
                $scope.ptime8 = '12:30-01:00 PM'; 
                runthetime(22)                                                                      
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 pm") {
            $scope.program8_3 = 'Santa Misa';
            if((moment().format('h:mm a') > "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program8 = 'Salud Positiva';
                $scope.desc8 = 'Noticias Internacionales';
                $scope.ptime8 = '01:00-01:30 PM'; 
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 pm") {
            $scope.program8_4 =  'Santa Misa' ;
            $scope.objS8_4 = { valueS4: true };            
            if((moment().format('h:mm a') > "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program8 =  'Salud Positiva' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
            }     
        };

        //block7-2
        if (moment().minutes(0).format('h:mm a') === "1:00 pm") {
            $scope.program8_1 = 'Santa Misa';
            if((moment().format('h:mm a') >= "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program8 = 'Santa Misa';
                $scope.desc8 = 'Noticias Internacionales';
                $scope.ptime8 = '01:00-01:30 PM'; 
                runthetime(33)                                                                      
            };       
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 pm") {
            $scope.program8_2 =  'Santa Misa';
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program8 =  'Santa Misa' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
                runthetime(33)                                                                      
            };
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 pm") {
            $scope.program8_3 = 'Ganale tu puedes';
            if((moment().format('h:mm a') > "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program8 =  'Nuestra mañana' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 pm") {
            $scope.program8_4 = 'Ganale tu puedes';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "2:30 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program8 =  'Nuestra mañana' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
            };
        }; 


        //block8
        if (moment().minutes(0).format('h:mm a') === "2:00 pm") {
            $scope.program8_1 = 'Ganale tu puedes';
            $scope.objS8_1 = { valueS1: true };
             if((moment().format('h:mm a') >= "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program8 =  'Ganale tu puedes' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
                runthetime(44)                                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 pm") {
            $scope.program8_2 = 'Ganale tu puedes';
            if((moment().format('h:mm a') >= "2:30 pm") & (moment().format('h:mm a') < "3:00 pm")) {
                $scope.program8 =  'Ganale tu puedes' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
                runthetime(44)                                                      
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 pm") {
            $scope.program8_3 = 'Ganale tu puedes';
            $scope.objS8_3 = { valueS3: true };
            if((moment().format('h:mm a') > "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program8 =  'Nuestra mañana' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 pm") {
            $scope.program8_4 =  'Ganale tu puedes' ;
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program8 =  'Nuestra mañana' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
            } 
        };


        //block 8-2
        if (moment().minutes(0).format('h:mm a') === "3:00 pm") {
            $scope.program8_1 =  'Ganale tu puedes' ;
            if((moment().format('h:mm a') >= "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program8 =  'Ganale tu puedes' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
                runthetime(44)                                                                      
            }
       };

        if (moment().minutes(30).format('h:mm a') === "3:30 pm") {
            $scope.program8_2 =  'Ganale tu puedes' ;
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program8 =  'Ganale tu puedes' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '01:30-04:00 PM'; 
                runthetime(44)                                                                      
            }
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 pm") {
            $scope.program8_3 =  'Conversando' ;
            if((moment().format('h:mm a') > "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program8 =  'Santo Rosario' ;
                $scope.desc8 = 'El Camino de la fe';
                $scope.ptime8 = '04:00-05:00 PM'; 
            } 
        };

        if (moment().minutes(90).format('h:mm a') === "4:30 pm") {
            $scope.program8_4 =  'Conversando' ;
            $scope.objS8_4 = { valueS4: true };            
            if((moment().format('h:mm a') > "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program8 =  'Esquina Deportiva' ;
                $scope.desc8 = 'Lecturas Biblicas';
                $scope.ptime8 = '04:00-05:00 PM'; 
            } 
        };



      //block9
        if (moment().minutes(0).format('h:mm a') === "4:00 pm") {
            $scope.program8_1 = 'Conversando';
            if((moment().format('h:mm a') >= "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program8 =  'Conversando' ;
                $scope.desc8 = 'Lecturas Biblicas';
                $scope.ptime8 = '04:00-05:00 PM'; 
                runthetime(55)                                                                      
            };         
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 pm") {
            $scope.program8_2 = 'Conversando';
            if((moment().format('h:mm a') >= "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program8 =  'Conversando' ;
                $scope.desc8 = 'Lecturas Biblicas';
                $scope.ptime8 = '04:00-05:00 PM'; 
                runthetime(55)                                                                      
            };              
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };            
        }; 


        if (moment().minutes(60).format('h:mm a') === "5:00 pm") {
            $scope.program8_3 = 'La Entrevista';
            if((moment().format('h:mm a') > "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program8 =  'La Entrevista' ;
                $scope.desc8 = 'Documental';
                $scope.ptime8 = '05:00-05:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 pm") {
            $scope.program8_4 =  'La Entrevista';
            $scope.objS8_4 = { valueS4: true };            
            if((moment().format('h:mm a') > "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program8 =  'La Entrevista';
                $scope.desc8 = 'Avances de la sociedad';
                $scope.ptime8 = '05:30-06:00 PM'; 
            } 
        };




        //block9-2 
        if (moment().minutes(0).format('h:mm a') === "5:00 pm") {
            $scope.program8_1 = 'La Entrevista';
            if((moment().format('h:mm a') >= "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program8 = 'La Entrevista';
                $scope.desc8 = 'Documentales';
                $scope.ptime8 = '05:00-05:30 PM'; 
                runthetime(66)                                                                      
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 pm") {
            $scope.program8_2 =  'La Entrevista';
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program8 =  'La Entrevista';
                $scope.desc8 = 'Avances de la Sociedad';
                $scope.ptime8 = '05:30-06:00 PM'; 
                runthetime(66)                                                                      
            };
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 pm") {
            $scope.program8_3 = 'Reporteros';
            if((moment().format('h:mm a') > "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program8 = 'Radio Luz';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-07:00 PM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 pm") {
            $scope.program8_4 = 'Reporteros'; 
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program8 = 'Radio Luz';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-07:00 PM';
            }    
        };


        //block10
        if (moment().minutes(0).format('h:mm a') === "6:00 pm") {
            $scope.program8_1 = 'Reporteros';
            if((moment().format('h:mm a') >= "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program8 = 'Reporteros';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-07:00 PM';
                runthetime(222)                                                                      
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 pm") {
            $scope.program8_2 = 'Reporteros';          
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program8 = 'Reporteros';
                $scope.desc8 = 'Noticias de El Salvador';
                $scope.ptime8 = '06:00-07:00 PM';
                runthetime(222)                                                                      
            };           
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 pm") {
            $scope.program8_3 = 'Santa Misa';  
            if((moment().format('h:mm a') > "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program8 = 'Salud Positiva';
                $scope.desc8 = 'Opiniones politicas';
                $scope.ptime8 = '07:00-08:00 PM'; 
            };              
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 pm") {
            $scope.program8_4 =  'Santa Misa';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program8 = 'Salud Positiva';
                $scope.desc8 = 'Opiniones politicas';
                $scope.ptime8 = '07:00-08:00 PM'; 
            };
        };


        //block10-2
        if (moment().minutes(0).format('h:mm a') === "7:00 pm") {
            $scope.program8_1 = 'Santa Misa';
            if((moment().format('h:mm a') >= "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program8 = 'Santa Misa';
                $scope.desc8 = 'Opiniones politicas';
                $scope.ptime8 = '07:00-08:00 PM'; 
                runthetime(333)                                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 pm") {
            $scope.program8_2 =  'Santa Misa';
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program8 = 'Santa Misa';
                $scope.desc8 = 'Opiniones politicas';
                $scope.ptime8 = '07:00-08:00 PM'; 
                runthetime(333)                                                                      
            }
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 pm") {
            $scope.program8_3 = 'Ganale tu puedes';
            if((moment().format('h:mm a') > "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program8 = 'Dios es Amor';
                $scope.desc8 = 'Empresarios Salvadoreños';
                $scope.ptime8 = '08:00-09:00 PM';            
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 pm") {
            $scope.program8_4 = 'Ganale tu puedes';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program8 = 'Dios es Amor';
                $scope.desc8 = 'Empresarios Salvadoreños';
                $scope.ptime8 = '08:00-09:00 PM';            
            }
        }; 


        //block11
        if (moment().minutes(0).format('h:mm a') === "8:00 pm") {
            $scope.program8_1 = 'Ganale tu puedes';
            $scope.objS8_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Empresarios Salvadoreños';
                $scope.ptime8 = '08:00-09:00 PM';   
                runthetime(444)                                                                               
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 pm") {
            $scope.program8_2 = 'Ganale tu puedes';
            if((moment().format('h:mm a') >= "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Empresarios Salvadoreños';
                $scope.ptime8 = '08:00-09:00 PM';   
                runthetime(444)                                                                               
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 pm") {
            $scope.program8_3 = 'Ganale tu puedes';
            $scope.objS8_3 = { valueS3: true };            
            if((moment().format('h:mm a') > "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program8 = 'Dios es Amor';
                $scope.desc8 = 'Revista de salud';
                $scope.ptime8 = '09:00-10:00 PM'; 
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 pm") {
            $scope.program8_4 =  'Ganale tu puedes';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('h:mm a') < "10:00 pm")) {
                $scope.program8 = 'Dios es Amor';
                $scope.desc8 = 'Revista de salud';
                $scope.ptime8 = '09:00-10:00 PM'; 
            }; 
        };


        //block11-2
        if (moment().minutes(0).format('h:mm a') === "9:00 pm") {
            $scope.program8_1 = 'Ganale tu puedes';
            if((moment().format('h:mm a') >= "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Revista de salud';
                $scope.ptime8 = '09:00-10:00 PM'; 
                runthetime(444)                                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 pm") {
            $scope.program8_2 =  'Ganale tu puedes';
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('hh:mm a') < "10:00 pm")) {
                $scope.program8 = 'Ganale tu puedes';
                $scope.desc8 = 'Revista de salud';
                $scope.ptime8 = '09:00-10:00 PM';
                runthetime(444)                                                      
            };
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 pm") {
            $scope.program8_3 = 'Conversando';
            if((moment().format('h:mm a') > "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program8 = 'Dios es Amor';
                $scope.desc8 = 'Radio Religiosa';
                $scope.ptime8 = '10:00-11:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 pm") {
            $scope.program8_4 = 'Conversando';
          if((moment().format('h:mm a') > "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program8 = 'Agape Noticias';
                $scope.desc8 = 'Radio Religiosa';
                $scope.ptime8 = '10:00-11:00 PM'; 
            };
            $scope.objS8_4 = { valueS4: true };            
        }; 




        //block12
        if (moment().minutes(0).format('h:mm a') === "10:00 pm") {
            $scope.program8_1 = 'Conversando';
            if((moment().format('h:mm a') >= "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program8 = 'Conversando';
                $scope.desc8 = 'Radio Religiosa';
                $scope.ptime8 = '10:00-11:00 PM';
                runthetime(555)                                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 pm") {
            $scope.program8_2 = 'Conversando';
            if((moment().format('h:mm a') >= "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program8 = 'Conversando';
                $scope.desc8 = 'Radio Religiosa';
                $scope.ptime8 = '10:00-11:00 PM'; 
                runthetime(555)                                                                      
            };
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };            
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 pm") {
            $scope.program8_3 = 'La entrevista';
            if((moment().format('h:mm a') > "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program8 = 'Diosito TV';
                $scope.desc8 = 'Programa Religioso';
                $scope.ptime8 = '11:00-11:30 PM'; 

            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 pm") {
            $scope.program8_4 =  'La entrevista';
            $scope.objS8_4 = { valueS4: true };            
            if((moment().format('h:mm a') > "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program8 = 'Diosito TV';
                $scope.desc8 = 'Rezando con el Rosario';
                $scope.ptime8 = '11:30-12:00 AM'; 
            };
        };


        //block12-2

        if (moment().minutes(0).format('h:mm a') === "11:00 pm") {
            $scope.program8_1 = 'La entrevista';
            if((moment().format('h:mm a') >= "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program8 = 'La entrevista';
                $scope.desc8 = 'Programa Religioso';
                $scope.ptime8 = '11:00-11:30 PM'; 
                runthetime(666)                                                                      
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 pm") {
            $scope.program8_2 =  'La entrevista';
            $scope.obj8_2 = { value2: true };
            $scope.objS8_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program8 = 'La entrevista';
                $scope.desc8 = 'Rezando con el Rosario';
                $scope.ptime8 = '11:30-12:00 AM'; 
                runthetime(666)                                                                      
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 am") {
            $scope.program8_3 = 'Cierre';
            if((moment().format('h:mm a') > "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 am") {
            $scope.program8_4 = 'Cierre';
            $scope.objS8_4 = { valueS4: true };
            if((moment().format('h:mm a') > "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program8 = 'Cierre';
                $scope.desc8 = 'Sin transmision';
                $scope.ptime8 = '12:00-05:30 AM'            
            };
        }; 
};


time88();





var timer =  function() { 
            console.log('timer');
      $scope.$apply(function () {
      time88();
    });
    }

   

 }]);

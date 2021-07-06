var theApp52 = angular.module('theApp52', []);
theApp52.controller('micanal39Ctrl', ['$scope', '$http', 'Account',
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
var mediaid;
var qualt;


var playfun = function (mediaobjtt, vuelta, thesec) {


$(".player324").append( "<div class='play3'  id='myElement123'></div> " );

var playerInstance = jwplayer("myElement123");


  $http.get('https://cdn.jwplayer.com/v2/playlists/' + mediaobjtt, {
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


        console.log(theplaylist[0])
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







duration = theplaylist[0].duration;
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

console.log('vuelta')
console.log(vuelta)

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
if (vuelta == 3 ){
  myoffset = ((duration / 4) * 3)
}
if (vuelta == 4 ){
  myoffset = (((duration / 4) * 4) - adsecondsblock)
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
"visualplaylist": 'false',
 "image": "http://infinite-fjord-54016.herokuapp.com/canales/loading.png",    
"controls": true,
  "volume": 100,
  "primary": "html5",
  "playlist": [{
        "file": thefile
    }],
    'advertising': {
    'client': 'vast',
    'schedule': {
      'middroll': {
        'offset': myoffset,
        "tag": "https://servedbyadbutler.com/vast.spark?setID=7764&ID=172550&pid=75280"
                
    }    
}
}
});


var duration;
var adsPerBlock;
var adsecondsblock;

 console.log('vuelta ' + vuelta)

var adnumber = 0;
playerInstance.on('adComplete', function() {
  if ( adnumber < 20) {
  playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7764&ID=172550&pid=75280");
  console.log(adnumber);
  }
  adnumber = adnumber + 1;
})

console.log(('adnumber ' + adnumber));

playerInstance.on('ready', function() {
  playerInstance.seek(thesec);
});


playfun.setvolume = function(){
      console.log('hello');
  playerInstance.setMute(false);
  playerInstance.setVolume(100);
    playerInstance.setMute(true);
  playerInstance.setVolume(0);
  playerInstance.setMute(false);
    playerInstance.setVolume(100);
}

})

}




var changeschedule = function (playlistnumb, vuelta, thesec) {

 if (playlistnumb === 2) {
// itvnoticias
            playfun('9tsE4RFR', vuelta, thesec);
    }
 if (playlistnumb === 22) {
// itvnoticias 2 
            playfun('9tsE4RFR', vuelta, thesec);
    }
 if (playlistnumb === 222) {
// itvnoticias 3 
            playfun('9tsE4RFR', vuelta, thesec);
    }    
 if (playlistnumb === 2222) {
// itvnoticias 4 
            playfun('9tsE4RFR', vuelta, thesec);
    }  
 if (playlistnumb === 22222) {
// itvnoticias 5 
            playfun('9tsE4RFR', vuelta, thesec);
    }  

 if (playlistnumb === 3) {
// decerca 
            playfun('gXzfVCRx', vuelta, thesec);
    }
 if (playlistnumb === 33) {
// decerca 2
            playfun('gXzfVCRx', vuelta, thesec);
    }
 if (playlistnumb === 333) {
// decerca 3
            playfun('gXzfVCRx', vuelta, thesec);
    }
 if (playlistnumb === 3333) {
// decerca 4
            playfun('gXzfVCRx', vuelta, thesec);
    } 
    
 if (playlistnumb === 33333) {
// decerca 5
            playfun('gXzfVCRx', vuelta, thesec);
    }     
               
 if (playlistnumb === 4) {
// endirecto 
            playfun('b1VSWylu', vuelta, thesec);
    }
 if (playlistnumb === 44) {
// endirecto2 
            playfun('b1VSWylu', vuelta, thesec);
    }
 if (playlistnumb === 444) {
// endirecto3 
            playfun('b1VSWylu', vuelta, thesec);
    }
 if (playlistnumb === 4444) {
// endirecto4 
            playfun('b1VSWylu', vuelta, thesec);
    }
}    
  




var runthetime = function(theprogram) {
console.log('theprogram ' + theprogram)
$( "#myElement59" ).remove();




//itv 1h 
if (theprogram === 2 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/9tsE4RFR',{
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

if ((duration > 1600) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
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


//decerca - 1 h
if (theprogram === 3 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/gXzfVCRx',{
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

if ((duration > 1800) && (duration < 4600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
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




//endirecto  - 2 h
if (theprogram === 4 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/b1VSWylu', {
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




})
}






//itv - 1h
if (theprogram === 22 ) {


$http.get('https://cdn.jwplayer.com/v2/playlists/9tsE4RFR',{
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

if ((duration > 1600) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
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

})

}




//decerca - 1h
if (theprogram === 33 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/gXzfVCRx',{
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
console.log('dur')

console.log(theplaylist[0].duration)
var duration = theplaylist[0].duration

if ((duration > 1800) && (duration < 4600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}



    var a = moment({ hour:12, minute:00 });
    var b = moment();

    var remaining = a.diff(b, 'seconds');
    console.log('remaining ' + remaining)

     var seconds = (3600 - remaining);

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

})


}





//directo2 -2h
if (theprogram === 44 ) {


//endirecto  - 2 h

$http.get('https://cdn.jwplayer.com/v2/playlists/b1VSWylu', {
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
console.log('dur')
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

var a = moment({ hour:14, minute:00 });
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

})
}





//itv3  - 1h
if (theprogram === 222 ) {


$http.get('https://cdn.jwplayer.com/v2/playlists/9tsE4RFR',{
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

if ((duration > 1600) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}


    var a = moment({ hour:15, minute:00 });
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

})

}








//decerca3 - 1h
if (theprogram === 333 ) {


$http.get('https://cdn.jwplayer.com/v2/playlists/gXzfVCRx',{
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

if ((duration > 1800) && (duration < 4600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}



    var a = moment({ hour:16, minute:00 });
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












//endirecto  - 2h
if (theprogram === 444 ) {


$http.get('https://cdn.jwplayer.com/v2/playlists/b1VSWylu', {
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

var a = moment({ hour:18, minute:00 });
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

})
}








//itv - 1h 
if (theprogram === 2222 ) {


$http.get('https://cdn.jwplayer.com/v2/playlists/9tsE4RFR',{
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

if ((duration > 1600) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
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
    changeschedule(2222, 1, seconds2);

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
    changeschedule(2222, 2, seconds2);

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
    changeschedule(2222, 3, seconds2);

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
    changeschedule(2222, 4, seconds2);

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


//decerca 1h 
if (theprogram === 3333 ) {


$http.get('https://cdn.jwplayer.com/v2/playlists/gXzfVCRx',{
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
console.log('dur')
console.log(theplaylist[0])
var duration = theplaylist[0].duration

if ((duration > 1800) && (duration < 4600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
}



    var a = moment({ hour:20, minute:00 });
    var b = moment();

    var remaining = a.diff(b, 'seconds');
    console.log('remaining ' + remaining)

     var seconds = (3600 - remaining);

if  ((seconds > 0) && (seconds < 900)) {
    console.log('seconds ' + seconds)
    var seconds2 = seconds 
    console.log('seconds2 ' + seconds2)    
    changeschedule(3333, 1, seconds2);

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
    changeschedule(3333, 2, seconds2);

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
    changeschedule(3333, 3, seconds2);

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
    changeschedule(3333, 4, seconds2);

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



//endirecto 2h 
if (theprogram === 4444 ) {


$http.get('https://cdn.jwplayer.com/v2/playlists/b1VSWylu', {
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
    changeschedule(4444, 1, seconds2);

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
    changeschedule(4444, 2, seconds2);

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
    changeschedule(4444, 3, seconds2);

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
    changeschedule(4444, 4, seconds2);

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
    changeschedule(4444, 5, seconds2);

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
    changeschedule(4444, 6, seconds2);

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
    changeschedule(4444, 7, seconds2);

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
    changeschedule(4444, 8, seconds2);

    var salto = (7200 - seconds)
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


//itv 1h 
if (theprogram === 22222 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/9tsE4RFR',{
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
console.log('duration')
console.log(duration)
if ((duration > 1600) && (duration < 3600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
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
    changeschedule(22222, 1, seconds2);

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
    changeschedule(22222, 2, seconds2);

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
    changeschedule(22222, 3, seconds2);

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
    changeschedule(22222, 4, seconds2);

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


//decerca 1h 
if (theprogram === 33333 ) {

$http.get('https://cdn.jwplayer.com/v2/playlists/gXzfVCRx',{
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

if ((duration > 1800) && (duration < 4600)) {
myseconds = ((3600 - duration)/4)
myseconds2 = (((3600 - duration)/4) * 2)
myseconds3 = (((3600 - duration)/4) * 3)
myseconds4 = (((3600 - duration)/4) * 4)
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
    changeschedule(33333, 1, seconds2);

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
    changeschedule(33333, 2, seconds2);

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
    changeschedule(33333, 3, seconds2);

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
    changeschedule(33333, 4, seconds2);

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


}
//runthetime






$scope.time1 = moment().minutes(0).format('h:mm a');
$scope.time2 = moment().minutes(30).format('h:mm a');
$scope.time3 = moment().minutes(30).add(0.5, 'hour').format('h:mm a');
$scope.time4 = moment().minutes(30).add(1, 'hour').format('h:mm a');


var time399 = function() {
$scope.obj39_1 = { value1: false };
$scope.obj39_2 = { value2: false };
$scope.obj39_3 = { value3: false };
$scope.obj39_4 = { value4: false };

$scope.objS39_1 = { valueS1: false };
$scope.objS39_2 = { valueS2: false };
$scope.objS39_3 = { valueS3: false };
$scope.objS39_4 = { valueS4: false };


//block1
        if (moment().minutes(0).format('h:mm a') === "12:00 am") {
            $scope.program39_1 = 'Cierre';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 am") {
            $scope.program39_2 = 'Cierre';
            if((moment().format('h:mm a') >= "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 am") {
            $scope.program39_3 = 'Cierre';
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 am") {
            $scope.program39_4 =  'Cierre';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            }; 
        };



        //block1-2
        if (moment().minutes(0).format('h:mm a') === "1:00 am") {
            $scope.program39_1 = 'Cierre';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 am") {
            $scope.program39_2 =  'Cierre' ;
            if((moment().format('h:mm a') >= "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 am") {
            $scope.program39_3 = 'Cierre';
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 am") {
            $scope.program39_4 = 'Cierre';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };  
        }; 


        //block2
        if (moment().minutes(0).format('h:mm a') === "2:00 am") {
            $scope.program39_1 = 'Cierre';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 am") {
            $scope.program39_2 = 'Cierre';
            if((moment().format('h:mm a') >= "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 am") {
            $scope.program39_3 = 'Cierre';
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 am") {
            $scope.program39_4 =  'Cierre' ;
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        };

        //block2-2
        if (moment().minutes(0).format('h:mm a') === "3:00 am") {
            $scope.program39_1 = 'Cierre';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "3:30 am") {
            $scope.program39_2 =  'Cierre';
            if((moment().format('h:mm a') >= "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 am") {
            $scope.program39_3 = 'Cierre';
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "4:30 am") {
            $scope.program39_4 = 'Cierre';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            }; 
        }; 


        //block3
        if (moment().minutes(0).format('h:mm a') === "4:00 am") {
            $scope.program39_1 = 'Cierre';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 am") {
            $scope.program39_2 = 'Cierre';
            if((moment().format('h:mm a') >= "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "5:00 am") {
            $scope.program39_3 = 'Cierre';
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 am") {
            $scope.program39_4 =  'Cierre' ;
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program39 =  'Cierre' ;
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        };


        //block3-2
        if (moment().minutes(0).format('h:mm a') === "5:00 am") {
            $scope.program39_1 = 'Cierre';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program39 =  'Cierre' ;
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 am") {
            $scope.program39_2 =  'Cierre' ;
            if((moment().format('h:mm a') >= "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program39 =  'Cierre' ;
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 am") {
            $scope.program39_3 = 'Cierre';
            $scope.obj39_3 = { value3: true };
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program39 =  'Cierre' ;
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 am") {
            $scope.program39_4 = 'Genteve Noticias';
            if((moment().format('h:mm a') > "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program39 = 'Genteve Noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '06:30-07:00 AM'; 
            } 
        }; 


        //block4
        if (moment().minutes(0).format('h:mm a') === "6:00 am") {
            $scope.program39_1 = 'ITV Noticias';
            if((moment().format('h:mm a') >= "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-06:30 AM';
                runthetime(2);                                                              
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 am") {
            $scope.program39_2 = 'ITV Noticias';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '06:30-07:00 AM';
                runthetime(2); 
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 am") {
            $scope.program39_3 = 'De Cerca';
            if((moment().format('h:mm a') > "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program39 = 'Genteve opiniones';
                $scope.desc39 = 'Opiniones y temas de interes';
                $scope.ptime39 = '07:00-08:00 AM'; 
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 am") {
            $scope.program39_4 =  'De Cerca';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program39 = 'Genteve opiniones';
                $scope.desc39 = 'Opiniones y temas de interes';
                $scope.ptime39 = '07:00-08:00 AM'; 
            } 
        };


        //block4-2
        if (moment().minutes(0).format('h:mm a') === "7:00 am") {
            $scope.program39_1 = 'De Cerca';
            if((moment().format('h:mm a') >= "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program39 = 'De Cerca';
                $scope.desc39 = 'Opiniones y temas de interes';
                $scope.ptime39 = '07:00-08:00 AM'; 
                runthetime(3);
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 am") {
            $scope.program39_2 =  'De Cerca';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program39 = 'De Cerca';
                $scope.desc39 = 'Opiniones y temas de interes';
                $scope.ptime39 = '07:00-08:00 AM';
                runthetime(3); 
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 am") {
            $scope.program39_3 = 'En Directo';
            if((moment().format('h:mm a') > "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program39 =  'Oficios terminaciones' ;
                $scope.desc39 = 'Realidad Salvadoreña';
                $scope.ptime39 = '08:00-08:30 AM'; 
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 am") {
            $scope.program39_4 = 'En Directo';
            $scope.objS39_4 = { valueS4: true };            
            if((moment().format('h:mm a') > "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program39 = 'Aladino';
                $scope.desc39 = 'Programa Infantil';
                $scope.ptime39 = '08:30-09:00 AM'; 
            } 
        }; 


        //block5
        if (moment().minutes(0).format('h:mm a') === "8:00 am") {
            $scope.program39_1 = 'En Directo';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program39 =  'En Directo' ;
                $scope.desc39 = 'Realidad Salvadoreña';
                $scope.ptime39 = '08:00-08:30 AM'; 
                runthetime(4);
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 am") {
            $scope.program39_2 = 'En Directo';
            if((moment().format('h:mm a') >= "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Programa Infantil';
                $scope.ptime39 = '08:30-09:00 AM';
                runthetime(4); 
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 am") {
            $scope.program39_3 = 'En Directo';
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program39 = 'De Cabeza';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 am") {
            $scope.program39_4 =  'En Directo';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "9:30 am") & (moment().format('h:mm a') < "10:00 am")) {
                $scope.program39 = 'De Cabeza';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM'; 
            }; 
        };


        //block5-2
        if (moment().minutes(0).format('h:mm a') === "9:00 am") {
            $scope.program39_1 = 'En Directo';
            if((moment().format('h:mm a') >= "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM';
                runthetime(4); 
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 am") {
            $scope.program39_2 =  'En Directo';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "9:30 am") & (moment().format('0h:mm a') < "10:00 am")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM';
                runthetime(4); 
            };
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 am") {
            $scope.program39_3 = 'ITV Noticias'; 
            if((moment().format('h:mm a') > "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
                $scope.program39 = 'De Cabeza';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 am") {
            $scope.program39_4 = 'ITV Noticias';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
                $scope.program39 = 'De Cabeza';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM'; 
            }
        }; 


        //block6
        if (moment().minutes(0).format('h:mm a') === "10:00 am") {
            $scope.program39_1 = 'ITV Noticias';
            if((moment().format('h:mm a') >= "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM';
                runthetime(22); 
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 am") {
            $scope.program39_2 = 'ITV Noticias'; 
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Programa juvenil';
                $scope.ptime39 = '09:00-11:00 AM'; 
                runthetime(22);
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 am") {
            $scope.program39_3 = 'De Cerca';
            if((moment().format('h:mm a') > "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program39 = 'Lista de Erick';
                $scope.desc39 = 'Entretenimiento';
                $scope.ptime39 = '11:00-11:30 AM'; 
            };

        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 am") {
            $scope.program39_4 =  'De Cerca' ;
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program39 =  'Cafe Latino' ;
                $scope.desc39 = 'Culturales';
                $scope.ptime39 = '11:30-12:00 AM'; 
            } 
        };



        //block 6-2

        if (moment().minutes(0).format('h:mm a') === "11:00 am") {
            $scope.program39_1 = 'De Cerca';
            if((moment().format('h:mm a') >= "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program39 = 'De Cerca';
                $scope.desc39 = 'Entretenimiento';
                $scope.ptime39 = '11:00-11:30 AM'; 
                runthetime(33);
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 am") {
            $scope.program39_2 =  'De Cerca' ;
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program39 =  'De Cerca' ;
                $scope.desc39 = 'Culturales';
                $scope.ptime39 = '11:30-12:00 AM';
                runthetime(33); 
            };   
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 pm") {
            $scope.program39_3 = 'En Directo';
            if((moment().format('h:mm a') > "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program39 = 'Guia tu cuerpo';
                $scope.desc39 = 'Salud y Bienestar';
                $scope.ptime39 = '12:00-12:30 PM'; 
            }    
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 pm") {
            $scope.program39_4 = 'En Directo';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program39 = 'Genteve al dia';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '12:30-01:00 PM'; 
            } 
        }; 


        //block7
        if (moment().minutes(0).format('h:mm a') === "12:00 pm") {
            $scope.program39_1 = 'En Directo';
            $scope.objS39_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Salud y Bienestar';
                $scope.ptime39 = '12:00-12:30 PM'; 
                runthetime(44);
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 pm") {
            $scope.program39_2 = 'En Directo';
            if((moment().format('h:mm a') >= "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '12:30-01:00 PM';
                runthetime(44); 
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 pm") {
            $scope.program39_3 = 'En Directo';
            $scope.objS39_3 = { valueS3: true };
            if((moment().format('h:mm a') > "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program39 = 'Genteve noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '01:00-01:30 PM'; 
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 pm") {
            $scope.program39_4 =  'En Directo' ;
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program39 =  'Deportes Telesur' ;
                $scope.desc39 = 'Deportes Internacionales';
                $scope.ptime39 = '01:30-02:00 PM'; 
            } 
        };

        //block7-2
        if (moment().minutes(0).format('h:mm a') === "1:00 pm") {
            $scope.program39_1 = 'En Directo';
            if((moment().format('h:mm a') >= "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Noticias De El Salvador';
                $scope.ptime39 = '01:00-01:30 PM';
                runthetime(44); 
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 pm") {
            $scope.program39_2 =  'En Directo';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program39 =  'En Directo' ;
                $scope.desc39 = 'Deportes Internacionales';
                $scope.ptime39 = '01:30-02:00 PM'; 
                runthetime(44);
            };
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 pm") {
            $scope.program39_3 = 'ITV Noticias';
            if((moment().format('h:mm a') > "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program39 =  'El Mago' ;
                $scope.desc39 = 'Entretenimiento';
                $scope.ptime39 = '02:00-02:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 pm") {
            $scope.program39_4 = 'ITV Noticias';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "2:30 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program39 =  'Aladino' ;
                $scope.desc39 = 'Franja Infantil';
                $scope.ptime39 = '02:30-03:00 PM'; 
            };
        }; 


        //block8
        if (moment().minutes(0).format('h:mm a') === "2:00 pm") {
            $scope.program39_1 = 'ITV Noticias';
             if((moment().format('h:mm a') >= "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program39 =  'ITV Noticias' ;
                $scope.desc39 = 'Entretenimiento';
                $scope.ptime39 = '02:00-02:30 PM';
                runthetime(222); 
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 pm") {
            $scope.program39_2 = 'ITV Noticias';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "2:30 pm") & (moment().format('h:mm a') < "3:00 pm")) {
                $scope.program39 =  'ITV Noticias' ;
                $scope.desc39 = 'Franja Infantil';
                $scope.ptime39 = '02:30-03:00 PM'; 
                runthetime(222);
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 pm") {
            $scope.program39_3 = 'De Cerca';
            if((moment().format('h:mm a') > "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program39 =  'Musicon' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 pm") {
            $scope.program39_4 =  'De Cerca' ;
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program39 =  'Musicon' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM'; 
            }
        };


        //block 8-2
        if (moment().minutes(0).format('h:mm a') === "3:00 pm") {
            $scope.program39_1 =  'De Cerca' ;
            if((moment().format('h:mm a') >= "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program39 =  'De Cerca' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM'; 
                runthetime(333);
            }
       };

        if (moment().minutes(30).format('h:mm a') === "3:30 pm") {
            $scope.program39_2 =  'De Cerca' ;
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };            
            if((moment().format('h:mm a') >= "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program39 =  'De Cerca' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM';
                runthetime(333); 
            }
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 pm") {
            $scope.program39_3 =  'En Directo' ;
            if((moment().format('h:mm a') > "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program39 =  'Musicon' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM'; 
            } 
        };

        if (moment().minutes(90).format('h:mm a') === "4:30 pm") {
            $scope.program39_4 =  'En Directo' ;
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program39 =  'Musicon' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM'; 
            } 
        };



      //block9
        if (moment().minutes(0).format('h:mm a') === "4:00 pm") {
            $scope.program39_1 = 'En Directo';
            $scope.objS39_1 = { valueS1: true };            
            if((moment().format('h:mm a') >= "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program39 =  'En Directo' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM'; 
                runthetime(444);
            };  
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 pm") {
            $scope.program39_2 = 'En Directo';
            if((moment().format('h:mm a') >= "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program39 =  'En Directo' ;
                $scope.desc39 = 'Videos Musicales';
                $scope.ptime39 = '03:00-05:00 PM'; 
                runthetime(444);
            }; 
        }; 


        if (moment().minutes(60).format('h:mm a') === "5:00 pm") {
            $scope.program39_3 = 'En Directo';
            $scope.objS39_3 = { valueS3: true };            
            if((moment().format('h:mm a') > "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program39 =  'Alterados por PI' ;
                $scope.desc39 = 'Educacion y Matematica';
                $scope.ptime39 = '05:00-05:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 pm") {
            $scope.program39_4 =  'En Directo';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program39 =  'Tecnologia de punta';
                $scope.desc39 = 'Lo Ultimo en Tecnologia';
                $scope.ptime39 = '05:30-06:00 PM'; 
            } 
        };




        //block9-2 
        if (moment().minutes(0).format('h:mm a') === "5:00 pm") {
            $scope.program39_1 = 'En Directo';
            if((moment().format('h:mm a') >= "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program39 =  'En Directo' ;
                $scope.desc39 = 'Educacion y Matematica';
                $scope.ptime39 = '05:00-05:30 PM'; 
                runthetime(444);
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 pm") {
            $scope.program39_2 =  'En Directo';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program39 =  'En Directo';
                $scope.desc39 = 'Lo Ultimo en Tecnologia';
                $scope.ptime39 = '05:30-06:00 PM'; 
                runthetime(444);
            };
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 pm") {
            $scope.program39_3 = 'ITV Noticias';
            if((moment().format('h:mm a') > "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program39 = 'Juegos Mentales';
                $scope.desc39 = 'Desafios Mentales';
                $scope.ptime39 = '06:00-06:30 PM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 pm") {
            $scope.program39_4 = 'ITV Noticias'; 
            $scope.objS39_4 = { valueS4: true };
           if((moment().format('h:mm a') > "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program39 = 'Genteve al dia';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '06:30-07:00 PM';
            } 
        };


        //block10
        if (moment().minutes(0).format('h:mm a') === "6:00 pm") {
            $scope.program39_1 = 'ITV Noticias';
            if((moment().format('h:mm a') >= "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Desafios Mentales';
                $scope.ptime39 = '06:00-06:30 PM';
                runthetime(2222);
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 pm") {
            $scope.program39_2 = 'ITV Noticias';          
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '06:30-07:00 PM';
                runthetime(2222);
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 pm") {
            $scope.program39_3 = 'De Cerca';  
            if((moment().format('h:mm a') > "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program39 = 'Genteve Opiniones';
                $scope.desc39 = 'Opiniones politicas';
                $scope.ptime39 = '07:00-08:00 PM'; 
            };                
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 pm") {
            $scope.program39_4 =  'De Cerca';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program39 = 'Genteve Opiniones';
                $scope.desc39 = 'Opiniones politicas';
                $scope.ptime39 = '07:00-08:00 PM'; 
            };
        };


        //block10-2
        if (moment().minutes(0).format('h:mm a') === "7:00 pm") {
            $scope.program39_1 = 'De Cerca';
            if((moment().format('h:mm a') >= "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program39 = 'De Cerca';
                $scope.desc39 = 'Opiniones politicas';
                $scope.ptime39 = '07:00-08:00 PM'; 
                runthetime(3333);
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 pm") {
            $scope.program39_2 =  'De Cerca';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program39 = 'De Cerca';
                $scope.desc39 = 'Opiniones politicas';
                $scope.ptime39 = '07:00-08:00 PM'; 
                runthetime(3333);
            }
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 pm") {
            $scope.program39_3 = 'En Directo';
            if((moment().format('h:mm a') > "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program39 = 'Genteve Noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '08:00-09:00 PM';            
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 pm") {
            $scope.program39_4 = 'En Directo';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program39 = 'Genteve Noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '08:00-09:00 PM';            
            }
        }; 


        //block11
        if (moment().minutes(0).format('h:mm a') === "8:00 pm") {
            $scope.program39_1 = 'En Directo';
            $scope.objS39_1 = { valueS1: true };            
            if((moment().format('h:mm a') >= "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '08:00-09:00 PM';  
                runthetime(4444);          
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 pm") {
            $scope.program39_2 = 'En Directo';
            if((moment().format('h:mm a') >= "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '08:00-09:00 PM'; 
                runthetime(4444);           
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 pm") {
            $scope.program39_3 = 'En Directo';
            $scope.objS39_3 = { valueS3: true };            
            if((moment().format('h:mm a') > "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program39 = 'Hijos del Rock';
                $scope.desc39 = 'Musica y Entretenimiento';
                $scope.ptime39 = '09:00-10:00 PM'; 
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 pm") {
            $scope.program39_4 =  'En Directo';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('h:mm a') < "10:00 pm")) {
                $scope.program39 = 'Hijos del Rock';
                $scope.desc39 = 'Musica y Entretenimiento';
                $scope.ptime39 = '09:00-10:00 PM'; 
            }; 
        };


        //block11-2
        if (moment().minutes(0).format('h:mm a') === "9:00 pm") {
            $scope.program39_1 = 'En Directo';
            if((moment().format('h:mm a') >= "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Musica y Entretenimiento';
                $scope.ptime39 = '09:00-10:00 PM'; 
                runthetime(4444);
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 pm") {
            $scope.program39_2 =  'En Directo';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('h:mm a') < "10:00 pm")) {
                $scope.program39 = 'En Directo';
                $scope.desc39 = 'Musica y Entretenimiento';
                $scope.ptime39 = '09:00-10:00 PM';
                runthetime(4444); 
            };
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 pm") {
            $scope.program39_3 = 'ITV Noticias';
            if((moment().format('h:mm a') > "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program39 = 'La busqueda';
                $scope.desc39 = 'Novela';
                $scope.ptime39 = '10:00-11:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 pm") {
            $scope.program39_4 = 'ITV Noticias';
            $scope.objS39_4 = { valueS4: true };
          if((moment().format('h:mm a') > "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program39 = 'La busqueda';
                $scope.desc39 = 'Novela';
                $scope.ptime39 = '10:00-11:00 PM'; 
            };
        }; 




        //block12
        if (moment().minutes(0).format('h:mm a') === "10:00 pm") {
            $scope.program39_1 = 'ITV Noticias';
            if((moment().format('h:mm a') >= "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Novela';
                $scope.ptime39 = '10:00-11:00 PM';
                runthetime(22222);
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 pm") {
            $scope.program39_2 = 'ITV Noticias';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program39 = 'ITV Noticias';
                $scope.desc39 = 'Novela';
                $scope.ptime39 = '10:00-11:00 PM'; 
                runthetime(22222);
            };
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 pm") {
            $scope.program39_3 = 'De Cerca';
            if((moment().format('h:mm a') > "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program39 = 'Genteve Noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '11:00-12:00 PM'; 

            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 pm") {
            $scope.program39_4 =  'De Cerca';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program39 = 'Genteve Noticias';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '11:00-12:00 PM'; 
            };
        };


        //block12-2

        if (moment().minutes(0).format('h:mm a') === "11:00 pm") {
            $scope.program39_1 = 'De Cerca';
            if((moment().format('h:mm a') >= "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program39 = 'De Cerca';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '11:00-12:00 PM'; 
                runthetime(33333);
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 pm") {
            $scope.program39_2 =  'De Cerca';
            $scope.obj39_2 = { value2: true };
            $scope.objS39_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program39 = 'De Cerca';
                $scope.desc39 = 'Noticias de El Salvador';
                $scope.ptime39 = '11:00-12:00 PM'; 
                runthetime(33333);
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 am") {
            $scope.program39_3 = 'Cierre';
            if((moment().format('h:mm a') > "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-05:30 AM'            
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 am") {
            $scope.program39_4 = 'Cierre';
            $scope.objS39_4 = { valueS4: true };
            if((moment().format('h:mm a') > "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program39 = 'Cierre';
                $scope.desc39 = 'Sin transmision';
                $scope.ptime39 = '12:00-05:30 AM'            
            };
        }; 

};


time399();

 timer =  function() { 
            console.log('timer');
      $scope.$apply(function () {
      time399();
    });
    }


   

 }]);

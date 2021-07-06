var theApp48 = angular.module('theApp48', []);
theApp48.controller('micanal28Ctrl', ['$scope', '$http', 'Account',
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

var segundos;
var thefile;
var timer;
var mediaid;
var qualt;


var playfun = function (mediaobjtt, index, adsPerBlock, thesec) {
console.log('index ' + index)
//ffmpeg -i http://Canal33.srfms.com:1935/Canal33/livestream/playlist.m3u8 -c copy -bsf:a aac_adtstoasc output.mp4

$(".player325").append( "<div class='play3'  id='myElement522'></div> " );
var playerInstance =jwplayer("myElement522")
var theplaylist2 = []

  $http.get('https://cdn.jwplayer.com/v2/playlists/' + mediaobjtt, {
    skipAuthorization: true
  }).then(function(response) {
    theplaylist = response.data.playlist;
    //console.log(theplaylist[5].title);

    for (var i = 0; i < theplaylist.length; i++) {
      if (index == theplaylist[i].title) {
        console.log(theplaylist[i])
        theplaylist2.push(theplaylist[i])
    };
  
          console.log('theplaylist2')    
        console.log(theplaylist2)  
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
theplaylist2 = bubble(theplaylist2);
   console.log('theplaylist2')    
        console.log(theplaylist2)  
};

mediaid = theplaylist2[0].mediaid;
console.log(theplaylist2[0].sources)

        if ((theplaylist2[0].sources[1] != undefined) && (theplaylist2[0].sources[1].type != "audio/mp4")){
            qualt = "2L3XhZ4A"           
        }        
        if ((theplaylist2[0].sources[2] != undefined) && (theplaylist2[0].sources[2].type != "audio/mp4")){
            qualt = "LqlTK0hs"           
        }
        if ((theplaylist2[0].sources[3] != undefined) && (theplaylist2[0].sources[3].type != "audio/mp4")){
            qualt = "BTq9CUGg"           
        }



console.log('thesec ' + thesec);

mediaid = mediaid.charAt(0).toUpperCase() + mediaid.slice(1);;

thefile = "https://content.jwplatform.com/videos/" +  mediaid + "-" + qualt + ".mp4";
console.log(thefile)

playerInstance.setup({
 "height": "100%",
  "width": "100%",
    "stretching": "exactfil",
  "autostart": true,
  "androidhls": true,
 "mute": false,
"skin": {
  "name": "myskin"
  }, 
 "image": "http://infinite-fjord-54016.herokuapp.com/canales/loading.png",    
"controls": true,
  "volume": 100,
    "type": "mp4",
  "playlist": [{
    "file": thefile,
    }],
    'advertising': {
    'client': 'vast',
    'schedule': {
      'adbreak1': {
        'offset': "post",
        "tag": "https://servedbyadbutler.com/vast.spark?setID=7618&ID=172550&pid=72133"
    }    
}
}
});

playerInstance.on('playAttemptFailed', function() {
    playerInstance.play()
})
var adnumber = 0;
playerInstance.on('adComplete', function() {
  if ( adnumber < adsPerBlock) {
  playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7618&ID=172550&pid=72133");
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



var changeschedule = function (playlistnumb, index, adsPerBlock, thesec) {

 if (playlistnumb === 3) {
// tertulia
            playfun('bBuIicjj', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 33) {
// tertulia
            playfun('bBuIicjj', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 333) {
// tertulia
            playfun('bBuIicjj', index, adsPerBlock, thesec);
    }        
 if (playlistnumb === 2) {
// tvo noticias 
            playfun('idxqHGeE', index, adsPerBlock, thesec);
    }          
 if (playlistnumb === 22) {
// tvo noticias 
            playfun('idxqHGeE', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 4) {
// hablemos claro 
            playfun('y5Tp9c17', index, adsPerBlock, thesec);
    }      

 if (playlistnumb === 44) {
// hablemos claro 
            playfun('y5Tp9c17', index, adsPerBlock, thesec);
    }
    
    if (playlistnumb === 444) {
// hablamos claro 
            playfun('y5Tp9c17', index, adsPerBlock, thesec);
    } 

 if (playlistnumb === 5) {
// controversia  
            playfun('y5Tp9c17', index, adsPerBlock, thesec);
    }
    
    if (playlistnumb === 55) {
// controversia 
            playfun('y5Tp9c17', index, adsPerBlock, thesec);
    }   

}    


var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var t10;
var t11;
var t12;
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
var time11;
var time12;
var adsPerBlock;
var lasadblock;
var adssecondsblok;
var bloks;



var runthetime = function(theprogram) {

$( "#myElement522" ).remove();




//tertulia - 2h
if (theprogram === 3 ) {

Account.getPrograma('bBuIicjj').then(function(response) {

          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
       

          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:08, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(3, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(3, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

})
}





//hablemos - 2h
if (theprogram === 4 ) {


Account.getPrograma('y5Tp9c17').then(function(response) {

          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
       

          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:10, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(4, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(4, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

})
}





//controversia - 2 h
if (theprogram === 5 ) {

Account.getPrograma('tbj4Y4Uc').then(function(response) {
          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
       

          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:12, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(5, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(5, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


})

}







//hablemos - 2h
if (theprogram === 44 ) {

Account.getPrograma('y5Tp9c17').then(function(response) {

          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
       

          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:14, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(44, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(44, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

})
}





//tvonoticias - 1h
if (theprogram === 2 ) {

Account.getPrograma('idxqHGeE').then(function(response) {
              console.log(response.data)
              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;
              t4 = response.data.time4;
              t5 = response.data.time5;  
              t6 = response.data.time6;          
              t7 = response.data.time7;          

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);
     time6 = Number(time5) + Number(t4);
     time7 = Number(time6) + Number(adssecondsblok);
     time8 = Number(time7) + Number(t5);
     time9 = Number(time8) + Number(adssecondsblok);
     time10 = Number(time9) + Number(t6);
     time11 = Number(time10) + Number(adssecondsblok);
     time12 = Number(time11) + Number(t7);
     time13 = Number(time12) + Number(adssecondsblok);





var a = moment({ hour:15, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)


 var seconds = (3600 - remaining);// clock time



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(2, 0, adsPerBlock, seconds2);

        var salto = (time1 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
    if  ((seconds > time1) && (seconds < time3)) {
        console.log('seconds ' + seconds)
        if ( seconds < time2) {
        var seconds2 = (seconds - time1)
        }  else {
         var  seconds2 = t2
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(2, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(2, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if  ((seconds > time5)  && (seconds < time7)) {
        console.log('seconds ' + seconds)
        if ( seconds < time6) {
        var seconds2 = (seconds - time5)
        }  else {
         var  seconds2 = t4
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(2, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }


    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(2, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>5){
    if  ((seconds > time9)  && (seconds < time11)) {
        console.log('seconds ' + seconds)
        if ( seconds < time10) {
        var seconds2 = (seconds - time9)
        }  else {
         var  seconds2 = t6
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(2, 5, lastadblock, seconds2);

        var salto = (time11 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
    }


    if (bloks>6){
    if  ((seconds > time11)  && (seconds < time13)) {
        console.log('seconds ' + seconds)
        if ( seconds < time12) {
        var seconds2 = (seconds - time11)
        }  else {
         var  seconds2 = t7
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(2, 6, lastadblock, seconds2);

        var salto = (time13 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
    }

})
}





//tertulia -2h
if (theprogram === 33 ) {

Account.getPrograma('bBuIicjj').then(function(response) {
          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:17, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(33, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(33, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

})
}





//controveria  - 2h
if (theprogram === 55 ) {


Account.getPrograma('tbj4Y4Uc').then(function(response) {
          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:19, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(55, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(55, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

})
}








//hablemos - 2h
if (theprogram === 444 ) {

Account.getPrograma('y5Tp9c17').then(function(response) {

          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
       

          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:21, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(444, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(444, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

})
}





//tvonoticias - 1h
if (theprogram === 22 ) {


Account.getPrograma('idxqHGeE').then(function(response) {
              console.log(response.data)
              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;
              t4 = response.data.time4;
              t5 = response.data.time5;  
              t6 = response.data.time6;          
              t7 = response.data.time7;          

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);
     time6 = Number(time5) + Number(t4);
     time7 = Number(time6) + Number(adssecondsblok);
     time8 = Number(time7) + Number(t5);
     time9 = Number(time8) + Number(adssecondsblok);
     time10 = Number(time9) + Number(t6);
     time11 = Number(time10) + Number(adssecondsblok);
     time12 = Number(time11) + Number(t7);
     time13 = Number(time12) + Number(adssecondsblok);




var a = moment({ hour:22, minute:00 });
var b = moment();


var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (3600 - remaining);// clock time



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(22, 0, adsPerBlock, seconds2);

        var salto = (time1 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
    if  ((seconds > time1) && (seconds < time3)) {
        console.log('seconds ' + seconds)
        if ( seconds < time2) {
        var seconds2 = (seconds - time1)
        }  else {
         var  seconds2 = t2
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(22, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(22, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if  ((seconds > time5)  && (seconds < time7)) {
        console.log('seconds ' + seconds)
        if ( seconds < time6) {
        var seconds2 = (seconds - time5)
        }  else {
         var  seconds2 = t4
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(22, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }


    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(22, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>5){
    if  ((seconds > time9)  && (seconds < time11)) {
        console.log('seconds ' + seconds)
        if ( seconds < time10) {
        var seconds2 = (seconds - time9)
        }  else {
         var  seconds2 = t6
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(22, 5, lastadblock, seconds2);

        var salto = (time11 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
    }


    if (bloks>6){
    if  ((seconds > time11)  && (seconds < time13)) {
        console.log('seconds ' + seconds)
        if ( seconds < time12) {
        var seconds2 = (seconds - time11)
        }  else {
         var  seconds2 = t7
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(22, 6, lastadblock, seconds2);

        var salto = (time13 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
    }
})
}







//tertulia  - 2h
if (theprogram === 333 ) {


Account.getPrograma('bBuIicjj').then(function(response) {

          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
          t7 = response.data.time7;
          t8 = response.data.time8;          
          t9 = response.data.time9;          
          
       

          adsPerBlock = response.data.adsPerBlock;
          lastadblock = response.data.lasadblock;
          adssecondsblok = response.data.adssecondsblok;  
          bloks = response.data.bloks;  

 time1 = Number(t1) + Number(adssecondsblok);
 time2 = Number(time1) + Number(t2);
 time3 = Number(time2) + Number(adssecondsblok);
 time4 = Number(time3) + Number(t3);
 time5 = Number(time4) + Number(adssecondsblok);
 time6 = Number(time5) + Number(t4);
 time7 = Number(time6) + Number(adssecondsblok);
 time8 = Number(time7) + Number(t5);
 time9 = Number(time8) + Number(adssecondsblok);
 time10 = Number(time9) + Number(t6);
 time11 = Number(time10) + Number(adssecondsblok);
 time12 = Number(time11) + Number(t7);
 time13 = Number(time12) + Number(adssecondsblok);
 time14 = Number(time13) + Number(t8);
 time15 = Number(time14) + Number(adssecondsblok);
 time16 = Number(time15) + Number(t9);
 time17 = Number(time16) + Number(adssecondsblok);



var a = moment({ hour:24, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (7200 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(333, 0, adsPerBlock, seconds2);

    var salto = (time1 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
if  ((seconds > time1) && (seconds < time3)) {
    console.log('seconds ' + seconds)
    if ( seconds < time2) {
    var seconds2 = (seconds - time1)
    }  else {
     var  seconds2 = t2
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 1, adsPerBlock, seconds2);

    var salto = (time3 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time3)  && (seconds < time5)) {
    console.log('seconds ' + seconds)
    if ( seconds < time4) {
    var seconds2 = (seconds - time3)
    }  else {
     var  seconds2 = t3
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 2, lastadblock, seconds2);

    var salto = (time5 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if  ((seconds > time5)  && (seconds < time7)) {
    console.log('seconds ' + seconds)
    if ( seconds < time6) {
    var seconds2 = (seconds - time5)
    }  else {
     var  seconds2 = t4
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 3, lastadblock, seconds2);

    var salto = (time7 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}


if  ((seconds > time7)  && (seconds < time9)) {
    console.log('seconds ' + seconds)
    if ( seconds < time8) {
    var seconds2 = (seconds - time7)
    }  else {
     var  seconds2 = t5
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 4, lastadblock, seconds2);

    var salto = (time9 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}

if (bloks>5) {
if  ((seconds > time9)  && (seconds < time11)) {
    console.log('seconds ' + seconds)
    if ( seconds < time10) {
    var seconds2 = (seconds - time9)
    }  else {
     var  seconds2 = t6
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 5, lastadblock, seconds2);

    var salto = (time11 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>6) {
if  ((seconds > time11)  && (seconds < time13)) {
    console.log('seconds ' + seconds)
    if ( seconds < time12) {
    var seconds2 = (seconds - time11)
    }  else {
     var  seconds2 = t7
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 6, lastadblock, seconds2);

    var salto = (time13 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

if (bloks>7) {
if  ((seconds > time13)  && (seconds < time15)) {
    console.log('seconds ' + seconds)
    if ( seconds < time14) {
    var seconds2 = (seconds - time13)
    }  else {
     var  seconds2 = t8
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 7, lastadblock, seconds2);

    var salto = (time15 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}


if (bloks>8) {
if  ((seconds > time15)  && (seconds < time17)) {
    console.log('seconds ' + seconds)
    if ( seconds < time16) {
    var seconds2 = (seconds - time15)
    }  else {
     var  seconds2 = t9
    }
    console.log('seconds2 ' + seconds2)
    changeschedule(333, 8, lastadblock, seconds2);

    var salto = (time17 - seconds)
    console.log('salto ' + salto)
    var timer2 = moment.duration(salto, "seconds").timer({  
    wait: moment.duration(1, "seconds"),
    loop: false,
    }, function() { 
        timer()
    });
}
}

})
}


}
//runthetime





var time288 = function() {
$scope.obj28_1 = { value1: false };
$scope.obj28_2 = { value2: false };
$scope.obj28_3 = { value3: false };
$scope.obj28_4 = { value4: false };

$scope.objS28_1 = { valueS1: false };
$scope.objS28_2 = { valueS2: false };
$scope.objS28_3 = { valueS3: false };
$scope.objS28_4 = { valueS4: false };

$scope.objtA = { valueA: true};


//block1
        if (moment().minutes(0).format('h:mm a') === "12:00 am") {
            $scope.program28_1 = 'Cierre';
      $scope.objS28_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 am") {
            $scope.program28_2 = 'Cierre';
            if((moment().format('h:mm a') >= "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 am") {
            $scope.program28_3 = 'Cierre';
      $scope.objS28_3 = { valueS3: true };
            if((moment().format('h:mm a') > "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 am") {
            $scope.program28_4 =  'Cierre';
      $scope.objS28_4 = { valueS4: true };
            if((moment().format('h:mm a') > "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }; 
        };



        //block1-2
        if (moment().minutes(0).format('h:mm a') === "1:00 am") {
            $scope.program28_1 = 'Cierre';
      $scope.objS28_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };

        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 am") {
            $scope.program28_2 = 'Cierre';
            if((moment().format('h:mm a') >= "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            } 

        };

        if (moment().minutes(60).format('h:mm a') === "2:00 am") {
            $scope.program28_3 = 'Cierre';
      $scope.objS28_3 = { valueS3: true };
            if((moment().format('h:mm a') > "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 am") {
            $scope.program28_4 =  'Cierre';
      $scope.objS28_4 = { valueS4: true };
            if((moment().format('h:mm a') > "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }; 
        }; 


        //block2
        if (moment().minutes(0).format('h:mm a') === "2:00 am") {
            $scope.program28_1 = 'Cierre';
      $scope.objS28_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 am") {
            $scope.program28_2 = 'Cierre';
            if((moment().format('h:mm a') >= "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 am") {
            $scope.program28_3 = 'Cierre';
      $scope.objS28_3 = { valueS3: true };
            if((moment().format('h:mm a') > "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 am") {
            $scope.program28_4 =  'Cierre';
      $scope.objS28_4 = { valueS4: true };
            if((moment().format('h:mm a') > "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        };

        //block2-2
        if (moment().minutes(0).format('h:mm a') === "3:00 am") {
            $scope.program28_1 = 'Cierre';
      $scope.objS28_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "3:30 am") {
            $scope.program28_2 = 'Cierre';
            if((moment().format('h:mm a') >= "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 am") {
            $scope.program28_3 = 'Cierre';
      $scope.objS28_3 = { valueS3: true };
            if((moment().format('h:mm a') > "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "4:30 am") {
            $scope.program28_4 =  'Cierre';
      $scope.objS28_4 = { valueS4: true };
            if((moment().format('h:mm a') > "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }; 
        }; 


        //block3
        if (moment().minutes(0).format('h:mm a') === "4:00 am") {
            $scope.program28_1 = 'Cierre';
      $scope.objS28_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 am") {
            $scope.program28_2 = 'Cierre';
            if((moment().format('h:mm a') >= "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "5:00 am") {
            $scope.program28_3 = 'Cierre';
      $scope.objS28_3 = { valueS3: true };
            if((moment().format('h:mm a') > "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 am") {
            $scope.program28_4 =  'Cierre';
      $scope.objS28_4 = { valueS4: true };
            if((moment().format('h:mm a') > "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program28 =  'Cierre' ;
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            };
        };


        //block3-2
        if (moment().minutes(0).format('h:mm a') === "5:00 am") {
            $scope.program28_1 = 'Cierre';
            if((moment().format('h:mm a') >= "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program28 =  'Cierre' ;
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 am") {
            $scope.program28_2 = 'Cierre';
      $scope.obj28_2 = { value2: true };
      $scope.objS28_2 = { valueS2: true };
            if((moment().format('h:mm a') >= "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program28 =  'Cierre' ;
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '12:00-06:00 AM';
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 am") {
            $scope.program28_3 = 'TVO Noticias';
      $scope.obj28_3 = { value3: true };
            if((moment().format('h:mm a') > "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program28 =  'TVO Noticias' ;
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '06:00-06:30 AM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 am") {
            $scope.program28_4 =  'Hablemos Claro';
            if((moment().format('h:mm a') > "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program28 = 'Hablemos Claro';
                $scope.desc28 = 'análisis de la realidad nacional';
                $scope.ptime28 = '06:00-08:00 AM'; 
            } 
        }; 


        //block4
        if (moment().minutes(0).format('h:mm a') === "6:00 am") {
            $scope.program28_1 = 'La Tertulia';
            if((moment().format('h:mm a') >= "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program28 =  'La Tertulia' ;
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '06:00-06:30 AM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
                runthetime(3);                                                
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 am") {
            $scope.program28_2 = 'La Tertulia';
            if((moment().format('h:mm a') >= "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program28 = 'La Tertulia';
                $scope.desc28 = 'analisis de la realidad nacional';
                $scope.ptime28 = '06:30-08:00 AM';
                runthetime(3);                                                                 
            } 
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true };            
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 am") {
            $scope.program28_3 = 'La Tertulia';
            if((moment().format('h:mm a') > "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program28 = 'Hablemos Claro';
                $scope.desc28 = 'analisis de la realidad nacional';
                $scope.ptime28 = '06:30-08:00 AM'; 
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 am") {
            $scope.program28_4 =  'La Tertulia';
            if((moment().format('h:mm a') > "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program28 = 'Hablemos Claro';
                $scope.desc28 = 'analisis de la realidad nacional';
                $scope.ptime28 = '06:30-08:00 AM'; 
            } 
          $scope.objS28_24= { valueS4: true };            
        };


        //block4-2
        if (moment().minutes(0).format('h:mm a') === "7:00 am") {
            $scope.program28_1 = 'La Tertulia';
           if((moment().format('h:mm a') >= "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program28 = 'La Tertulia';
                $scope.desc28 = 'analisis de la realidad nacional';
                $scope.ptime28 = '06:30-08:00 AM'; 
                runthetime(3);                                                
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 am") {
            $scope.program28_2 = 'La Tertulia';
            if((moment().format('h:mm a') >= "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program28 = 'La Tertulia';
                $scope.desc28 = 'analisis de la realidad nacional';
                $scope.ptime28 = '06:30-08:00 AM';
                runthetime(3);                                                                 
            } 
              $scope.obj28_2 = { value2: true };
              $scope.objS28_2 = { valueS2: true };            
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 am") {
            $scope.program28_3 = 'Hablemos Claro';
            if((moment().format('h:mm a') > "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program28 =  'Buenos Dia' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 am") {
            $scope.program28_4 =  'Hablemos Claro';
            if((moment().format('h:mm a') > "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program28 =  'Buenos Dia' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
            } 
            $scope.objS28_4 = { valueS4: true };
        }; 


        //block5
        if (moment().minutes(0).format('h:mm a') === "8:00 am") {
            $scope.program28_1 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program28 =  'Hablemos Claro' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
                runthetime(4);                                                                
            };
        $scope.objS28_1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 am") {
            $scope.program28_2 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program28 =  'Hablemos Claro' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
                runthetime(4);                                                                
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 am") {
            $scope.program28_3 = 'Hablemos Claro';
            if((moment().format('h:mm a') > "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program28 =  'Buenos Dia' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
            } 
            $scope.objS28_3 = { valueS3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 am") {
            $scope.program28_4 =  'Hablemos Claro';
            if((moment().format('h:mm a') > "9:30 am") & (moment().format('h:mm a') < "10:00 am")) {
                $scope.program28 =  'Buenos Dia' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
            }; 
            $scope.objS28_4 = { valueS4: true };            
        };


        //block5-2
        if (moment().minutes(0).format('h:mm a') === "9:00 am") {
            $scope.program28_1 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program28 =  'Hablemos Claro' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
                runthetime(4);                                                                
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 am") {
            $scope.program28_2 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "9:30 am") & (moment().format('0h:mm a') < "10:00 am")) {
                $scope.program28 =  'Hablemos Claro' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
                runthetime(4);                                                                
            };
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true };            
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 am") {
            $scope.program28_3 = 'TVO Noticias';
           if((moment().format('h:mm a') > "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
                $scope.program28 =  'TVO Noticias' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 am") {
            $scope.program28_4 =  'TVO Noticias';
            if((moment().format('h:mm a') > "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
                $scope.program28 =  'Buenos Dia' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
            } 
            $scope.objS28_4 = { valueS4: true }; 
        }; 


        //block6
        if (moment().minutes(0).format('h:mm a') === "10:00 am") {
            $scope.program28_1 = 'Controversia';
            if((moment().format('h:mm a') >= "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
                $scope.program28 =  'Controversia' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM';
                runthetime(5);                                                
            } 
            $scope.objS28_1 = { valueS1: true };              
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 am") {
            $scope.program28_2 = 'Controversia';
            if((moment().format('h:mm a') >= "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
                $scope.program28 =  'Controversia' ;
                $scope.desc28 = 'Revista matutina';
                $scope.ptime28 = '08:00-11:00 AM'; 
                runthetime(5);                                                                
            } 
             
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 am") {
            $scope.program28_3 = 'Controversia';
            if((moment().format('h:mm a') > "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program28 = 'Videos Musicales';
                $scope.desc28 = 'Musica';
                $scope.ptime28 = '11:00-12:00 AM'; 
            };
            $scope.objS28_3 = { valueS3: true };  
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 am") {
            $scope.program28_4 =  'Controversia';
            if((moment().format('h:mm a') > "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program28 = 'Videos Musicales';
                $scope.desc28 = 'Musica';
                $scope.ptime28 = '11:00-12:00 AM'; 
            } 
            $scope.objS28_4 = { valueS4: true };             
        };



        //block 6-2

        if (moment().minutes(0).format('h:mm a') === "11:00 am") {
            $scope.program28_1 = 'Controversia';
            if((moment().format('h:mm a') >= "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program28 = 'Controversia';
                $scope.desc28 = 'Musica';
                $scope.ptime28 = '11:00-12:00 AM'; 
                runthetime(5);                
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 am") {
            $scope.program28_2 = 'Controversia';
            if((moment().format('h:mm a') >= "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program28 = 'Controversia';
                $scope.desc28 = 'Musica';
                $scope.ptime28 = '11:00-12:00 AM'; 
                runthetime(5);
            };
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true }; 
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 pm") {
            $scope.program28_3 = 'Hablemos claro';
            if((moment().format('h:mm a') > "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program28 = 'Palco Deportivo';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '12:00-01:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 pm") {
            $scope.program28_4 =  'Hablemos claro';
            if((moment().format('h:mm a') > "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program28 = 'Palco Deportivo';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '12:00-01:00 PM'; 
            } 
            $scope.objS28_4 = { valueS4: true }; 
        }; 


        //block7
        if (moment().minutes(0).format('h:mm a') === "12:00 pm") {
            $scope.program28_1 = 'Hablemos claro';
            if((moment().format('h:mm a') >= "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program28 = 'Hablemos claro';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '12:00-01:00 PM'; 
                runthetime(44);                
            };
            $scope.objS28_1 = { valueS1: true }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 pm") {
            $scope.program28_2 = 'Hablemos claro';
            if((moment().format('h:mm a') >= "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program28 = 'Hablemos claro';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '12:00-01:00 PM'; 
                runthetime(44);
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 pm") {
            $scope.program28_3 = 'Hablemos claro';
            if((moment().format('h:mm a') > "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program28 = 'Hablemos claro';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '01:00-02:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
            }; 
            $scope.objS28_3 = { valueS3: true }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 pm") {
            $scope.program28_4 =  'Hablemos claro';
            if((moment().format('h:mm a') > "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program28 = 'Hablemos claro';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '01:00-02:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS28_4 = { valueS4: true }; 
        };

        //block7-2
        if (moment().minutes(0).format('h:mm a') === "1:00 pm") {
            $scope.program28_1 = 'Hablemos claro';
            if((moment().format('h:mm a') >= "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program28 = 'Hablemos claro';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '01:00-02:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
                runthetime(44);
            };  
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 pm") {
            $scope.program28_2 = 'Hablemos claro';
            if((moment().format('h:mm a') >= "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program28 = 'Hablemos claro';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '01:00-02:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
                runthetime(44);
            };
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true };             
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 pm") {
            $scope.program28_3 = 'Tvo Noticias';
            if((moment().format('h:mm a') > "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program28 =  'Campo Pagado' ;
                $scope.desc28 = 'Campo Pagado';
                $scope.ptime28 = '02:00-04:00 PM'; 
            } 

        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 pm") {
            $scope.program28_4 =  'Tvo Noticias';
            if((moment().format('h:mm a') > "2:30 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program28 =  'Campo Pagado' ;
                $scope.desc28 = 'Campo Pagado';
                $scope.ptime28 = '02:00-04:00 PM'; 
            };
            $scope.objS28_4 = { valueS4: true }; 
        }; 


        //block8
        if (moment().minutes(0).format('h:mm a') === "2:00 pm") {
            $scope.program28_1 = 'Tvo Noticias';
             if((moment().format('h:mm a') >= "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program28 =  'Tvo Noticias' ;
                $scope.desc28 = 'Campo Pagado';
                $scope.ptime28 = '02:00-04:00 PM';
                runthetime(2);                                                                 
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 pm") {
            $scope.program28_2 = 'Tvo Noticias';
            if((moment().format('h:mm a') >= "2:30 pm") & (moment().format('h:mm a') < "3:00 pm")) {
                $scope.program28 =  'Tvo Noticias' ;
                $scope.desc28 = 'Campo Pagado';
                $scope.ptime28 = '02:00-04:00 PM'; 
                runthetime(2);                                                
            } 
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true };               
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 pm") {
            $scope.program28_3 = 'La Tertulia';
            if((moment().format('h:mm a') > "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program28 =  'Buenos Dias' ;
                $scope.desc28 = 'Campo Pagado';
                $scope.ptime28 = '02:00-04:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 pm") {
            $scope.program28_4 =  'La Tertulia';
            if((moment().format('h:mm a') > "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program28 =  'Buenos Dias' ;
                $scope.desc28 = 'Campo Pagado';
                $scope.ptime28 = '02:00-04:00 PM'; 
            } 
            $scope.objS28_4 = { valueS4: true };             
        };


        //block 8-2
        if (moment().minutes(0).format('h:mm a') === "3:00 pm") {
            $scope.program28_1 = 'La Tertulia';
            if((moment().format('h:mm a') >= "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program28 =  'La Tertulia' ;
                $scope.desc28 = 'Buenos Dias';
                $scope.ptime28 = '02:00-04:00 PM'; 
                runthetime(33);                                                                
            }
            $scope.objS28_1 = { valueS1: true }; 
       };

        if (moment().minutes(30).format('h:mm a') === "3:30 pm") {
            $scope.program28_2 = 'La Tertulia';
            if((moment().format('h:mm a') >= "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program28 =  'La Tertulia' ;
                $scope.desc28 = 'Campo Pagado';
                $scope.ptime28 = '02:00-04:00 PM';
                runthetime(33);                                                                 
            }
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 pm") {
            $scope.program28_3 = 'La Tertulia';
            if((moment().format('h:mm a') > "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program28 =  'La Tertulia' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-05:00 PM'; 
            } 
            $scope.objS28_3 = { valueS3: true }; 
        };

        if (moment().minutes(90).format('h:mm a') === "4:30 pm") {
            $scope.program28_4 =  'La Tertulia';
            if((moment().format('h:mm a') > "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program28 =  'Buenos Dias' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-06:00 PM'; 
            } 
            $scope.objS28_4 = { valueS4: true }; 
        };



      //block9
        if (moment().minutes(0).format('h:mm a') === "4:00 pm") {
            $scope.program28_1 = 'La Tertulia';
            if((moment().format('h:mm a') >= "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program28 =  'La Tertulia' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-06:00 PM'; 
                runthetime(33);                                                                
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 pm") {
            $scope.program28_2 = 'La Tertulia';
            if((moment().format('h:mm a') >= "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program28 =  'La Tertulia' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-06:00 PM'; 
                runthetime(33);                                                                
            }; 
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true };             
        }; 


        if (moment().minutes(60).format('h:mm a') === "5:00 pm") {
            $scope.program28_3 = 'TVO Noticias';
            if((moment().format('h:mm a') > "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program28 =  'Onda Juvenil' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-06:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 pm") {
            $scope.program28_4 =  'TVO Noticias';
            if((moment().format('h:mm a') > "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program28 =  'Onda Juvenil' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-06:00 PM'; 
            } 
            $scope.objS28_4 = { valueS4: true }; 
        };




        //block9-2 
        if (moment().minutes(0).format('h:mm a') === "5:00 pm") {
            $scope.program28_1 = 'Controversia';
            if((moment().format('h:mm a') >= "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program28 =  'Controversia' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-06:00 PM'; 
                runthetime(55);                                                                
            };
            $scope.objS28_1 = { valueS1: true };   
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 pm") {
            $scope.program28_2 = 'Controversia';
            if((moment().format('h:mm a') >= "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program28 =  'Controversia' ;
                $scope.desc28 = 'Etrenimiento Juvenil';
                $scope.ptime28 = '04:00-06:00 PM'; 
                runthetime(55);                                                                
            };
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 pm") {
            $scope.program28_3 = 'Controversia';
            if((moment().format('h:mm a') > "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program28 = 'Salud a tu vida';
                $scope.desc28 = 'Programa religioso';
                $scope.ptime28 = '06:00-06:30 PM';
            };
            $scope.objS28_3 = { valueS3: true };               
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 pm") {
            $scope.program28_4 =  'Controversia';
            if((moment().format('h:mm a') > "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program28 = 'Salud a tu vida';
                $scope.desc28 = 'Entretenimiento y Musica';
                $scope.ptime28 = '06:30-07:00 PM';
            } 
            $scope.objS28_4 = { valueS4: true }; 
        };


        //block10
        if (moment().minutes(0).format('h:mm a') === "6:00 pm") {
            $scope.program28_1 = 'Controversia';
            if((moment().format('h:mm a') >= "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program28 = 'Controversia';
                $scope.desc28 = 'Programa religioso';
                $scope.ptime28 = '06:00-06:30 PM';
                runthetime(55);                                                                
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 pm") {
            $scope.program28_2 = 'Controversia';
            if((moment().format('h:mm a') >= "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program28 = 'Controversia';
                $scope.desc28 = 'Entretenimiento y Musica';
                $scope.ptime28 = '06:30-07:00 PM';
                runthetime(55);                                                                
            };
              $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true };
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 pm") {
            $scope.program28_3 = 'Hablemos Claro';
            if((moment().format('h:mm a') > "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program28 = 'TVO Noticias';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '07:00-08:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
            };  
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 pm") {
            $scope.program28_4 =  'Hablemos Claro';
            if((moment().format('h:mm a') > "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program28 = 'TVO Noticias';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '07:00-08:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
            };
            $scope.objS28_4 = { valueS4: true }; 
        };


        //block10-2
        if (moment().minutes(0).format('h:mm a') === "7:00 pm") {
            $scope.program28_1 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program28 = 'Hablemos Claro';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '07:00-08:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
                runthetime(444);                                                                
            } 
            $scope.objS28_1 = { valueS1: true };             
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 pm") {
            $scope.program28_2 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program28 = 'Hablemos Claro';
                $scope.desc28 = 'Noticias de El Salvador';
                $scope.ptime28 = '07:00-08:00 PM'; 
                $scope.program22 =  'tvonoticias' ;
                $scope.objtA = { valueA : false };
                runthetime(444);                                                                
            }
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 pm") {
            $scope.program28_3 = 'Hablemos Claro';
            if((moment().format('h:mm a') > "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program28 = 'Controversia';
                $scope.desc28 = 'Opiniones y temas de interes';
                $scope.ptime28 = '08:00-09:00 PM';            
            }
            $scope.objS28_3 = { valueS3: true }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 pm") {
            $scope.program28_4 =  'Hablemos Claro';
            if((moment().format('h:mm a') > "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program28 = 'Controversia';
                $scope.desc28 = 'Opiniones y temas de interes';
                $scope.ptime28 = '08:00-09:00 PM';            
            }
            $scope.objS28_4 = { valueS4: true }; 
        }; 


        //block11
        if (moment().minutes(0).format('h:mm a') === "8:00 pm") {
            $scope.program28_1 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program28 = 'Hablemos Claro';
                $scope.desc28 = 'Opiniones y temas de interes';
                $scope.ptime28 = '08:00-09:00 PM'; 
                runthetime(444);                                                                           
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 pm") {
            $scope.program28_2 = 'Hablemos Claro';
            if((moment().format('h:mm a') >= "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program28 = 'Hablemos Claro';
                $scope.desc28 = 'Opiniones y temas de interes';
                $scope.ptime28 = '08:00-09:00 PM'; 
                runthetime(444);                                                                           
            }; 
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 pm") {
            $scope.program28_3 = 'Tvo Noticias';
            if((moment().format('h:mm a') > "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program28 = 'Palco Deportivo';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '09:00-10:00 PM'; 
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 pm") {
            $scope.program28_4 =  'Tvo Noticias';
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('h:mm a') < "10:00 pm")) {
                $scope.program28 = 'Palco Deportivo';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '09:00-10:00 PM'; 
            }; 
            $scope.objS28_4 = { valueS4: true }; 
        };


        //block11-2
        if (moment().minutes(0).format('h:mm a') === "9:00 pm") {
            $scope.program28_1 = 'Tvo Noticias';
            if((moment().format('h:mm a') >= "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program28 = 'Tvo Noticias';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '09:00-10:00 PM'; 
                runthetime(22);                                                                
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 pm") {
            $scope.program28_2 = 'Tvo Noticias';
            if((moment().format('hh:mm a') > "09:30 pm") & (moment().format('hh:mm a') < "10:00 pm")) {
                $scope.program28 = 'Tvo Noticias';
                $scope.desc28 = 'Lo mejor del deporte';
                $scope.ptime28 = '09:00-10:00 PM'; 
                 runthetime(22);                                                                
            };
            $scope.obj28_2 = { value2: true };
            $scope.objS28_2 = { valueS2: true };               
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 pm") {
            $scope.program28_3 = 'La Tertulia';
            if((moment().format('h:mm a') > "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 pm") {
            $scope.program28_4 =  'La Tertulia';
          if((moment().format('h:mm a') > "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
            };
            $scope.objS28_4 = { valueS4: true }; 
        }; 




        //block12
        if (moment().minutes(0).format('h:mm a') === "10:00 pm") {
            $scope.program28_1 = 'La Tertulia';
            if((moment().format('h:mm a') >= "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program28 = 'La Tertulia';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM';
                runthetime(333);                                                                
            }
            $scope.objS28_1 = { valueS1: true }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 pm") {
            $scope.program28_2 = 'La Tertulia';
            if((moment().format('h:mm a') >= "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program28 = 'La Tertulia';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
                runthetime(333);                                                                
            };
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 pm") {
            $scope.program28_3 = 'La Tertulia';
            if((moment().format('h:mm a') > "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
            } 
            $scope.objS28_3 = { valueS3: true }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 pm") {
            $scope.program28_4 =  'La Tertulia';
            if((moment().format('h:mm a') > "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
            };
            $scope.objS28_4 = { valueS4: true }; 
        };


        //block12-2

        if (moment().minutes(0).format('h:mm a') === "11:00 pm") {
            $scope.program28_1 = 'La Tertulia';
            if((moment().format('h:mm a') >= "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program28 = 'La Tertulia';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '11:00-11:30 PM';
                runthetime(333);                                                                
            } 
            $scope.objS28_1 = { valueS1: true }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 pm") {
            $scope.program28_2 = 'La Tertulia';
            if((moment().format('h:mm a') >= "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program28 = 'La Tertulia';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
                runthetime(333);                                                                
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 am") {
            $scope.program28_3 = 'La Tertulia';
            if((moment().format('h:mm a') > "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
            } 
            $scope.objS28_3 = { valueS3: true }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 am") {
            $scope.program28_4 =  'La Tertulia';
            if((moment().format('h:mm a') > "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program28 = 'Cierre';
                $scope.desc28 = 'Sin transmision';
                $scope.ptime28 = '10:00-12:00 PM'; 
            };
            $scope.objS28_4 = { valueS4: true }; 
        }; 








};

time288();













var timer =  function() { 
            console.log('timer');
      $scope.$apply(function () {
      time166();
    });
    }


   

 }]);

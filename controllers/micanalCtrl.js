var theApp39 = angular.module('theApp39', []);
theApp39.controller('micanalCtrl', ['$scope', '$http', 'Account',
 function($scope, $http, Account, $log, $q, ) {


$scope.getviews = function() {
    Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;
      
         theurl = response.data.live;
        });

  };
$scope.getviews();
 

 //test line 2323


var theplaylist = [];
var timer;
var segundos;
var thefile;
var myoffset;
var myseconds;
var myseconds2;
var myseconds3;
var myseconds4;

var mediaid;

var qualt;

var playfun = function (mediaobjtt, index, adsPerBlock, thesec) {


var theplaylist2 = []

$(".player345").append( "<div class='play3'  id='myElement521'></div> " );
var playerInstance =jwplayer("myElement521")


  $http.get('https://cdn.jwplayer.com/v2/playlists/' + mediaobjtt, {
    skipAuthorization: true
  }).then(function(response) {
    theplaylist = response.data.playlist;

    for (var i = 0; i < theplaylist.length; i++) {
      if (index == theplaylist[i].title) {
        theplaylist2.push(theplaylist[i])
      }

function bubble(arr) {
      var len = arr.length;
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missingg
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
};
console.log(theplaylist2[0].sources)

mediaid = theplaylist2[0].mediaid;            
        if ((theplaylist2[0].sources[1] != undefined) && (theplaylist2[0].sources[1].type != "audio/mp4")){
            qualt = "2L3XhZ4A"           
        }        
        if ((theplaylist2[0].sources[2] != undefined) && (theplaylist2[0].sources[2].type != "audio/mp4")){
            qualt = "LqlTK0hs"           
        }
        if ((theplaylist2[0].sources[3] != undefined) && (theplaylist2[0].sources[3].type != "audio/mp4")){
            qualt = "BTq9CUGg"           
        }



console.log(qualt)

console.log(mediaid)
mediaid = mediaid.charAt(0).toUpperCase() + mediaid.slice(1);
console.log(mediaid)

thefile = "https://content.jwplatform.com/videos/" +  mediaid + "-" + qualt + ".mp4";
console.log(thefile)

playerInstance.setup({
 "height": "110%",
  "width": "100%",
    "stretching": "exactfit",
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
    "file": thefile,
    }],
    'advertising': {
    'client': 'vast',
    'schedule': {
      'adbreak1': {
        'offset': "post",
        "tag": "https://servedbyadbutler.com/vast.spark?setID=7600&ID=172550&pid=72015"
    }    
}
}
});




var adnumber = 0;
playerInstance.on('adComplete', function() {
  if ( adnumber < adsPerBlock) {
  playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7600&ID=172550&pid=72015");
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
  // playerInstance.seek(thesec);3sss
  timer() 
});

playerInstance.on('complete', function() {
   // playerInstance.play();
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
// Teleprensa 
            playfun('1Cw2pT3f', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 33) {
// Teleprensa 
            playfun('1Cw2pT3f', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 333) {
// Teleprensa 
            playfun('1Cw2pT3f', index, adsPerBlock, thesec);
    }   
    if (playlistnumb === 5) {
// en punto 
            playfun('U65dgNqe', index, adsPerBlock, thesec);
    }
    if (playlistnumb === 55) {
// en punto 
            playfun('U65dgNqe', index, adsPerBlock, thesec);
    }
    if (playlistnumb === 555) {
// en punto 
            playfun('U65dgNqe', index, adsPerBlock, thesec);
    }           
  if (playlistnumb === 11) {
// Mujer     
            playfun('6n2WwupP', index, adsPerBlock, thesec);
    }
  if (playlistnumb === 1111) {
// Mujer     
            playfun('6n2WwupP', index, adsPerBlock, thesec);
    }
  if (playlistnumb === 111111) {
// Mujer     
            playfun('6n2WwupP', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 8) {
// republica 
            playfun('yYpaES7l', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 88) {
// republica 
            playfun('yYpaES7l', index, adsPerBlock, thesec);
    }                    
 if (playlistnumb === 9) {
// anuncios   
            playfun('19J6YBC3', index, adsPerBlock, thesec);
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

$( "#myElement521" ).remove();



//teleprensa - 1 h
if (theprogram === 3 ) {

Account.getPrograma('1Cw2pT3f').then(function(response) {
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



var a = moment({ hour:07, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

     var seconds = (3600 - remaining);



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

    if (bloks>5){
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


    if (bloks>6){
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

})
}



//enpunto  - 1 h
if (theprogram === 5 ) {

Account.getPrograma('U65dgNqe').then(function(response) {
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



var a = moment({ hour:08, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

     var seconds = (3600 - remaining);



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

    if (bloks>5){
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


    if (bloks>6){
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

})
}







//mujer  - 3h
if (theprogram === 11 ) {

Account.getPrograma('6n2WwupP').then(function(response) {
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



var a = moment({ hour:11, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (10800 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(11, 0, adsPerBlock, seconds2);

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
    changeschedule(11, 1, adsPerBlock, seconds2);

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
    changeschedule(11, 2, lastadblock, seconds2);

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
    changeschedule(11, 3, lastadblock, seconds2);

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
    changeschedule(11, 4, lastadblock, seconds2);

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
    changeschedule(11, 5, lastadblock, seconds2);

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
    changeschedule(11, 6, lastadblock, seconds2);

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
    changeschedule(11, 7, lastadblock, seconds2);

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
    changeschedule(11, 8, lastadblock, seconds2);

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









//enpunto - 1h
if (theprogram === 55 ) {
Account.getPrograma('U65dgNqe').then(function(response) {
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



var a = moment({ hour:12, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

     var seconds = (3600 - remaining);



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

    if (bloks>5){
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


    if (bloks>6){
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

})
}




//republik -130h
if (theprogram === 8 ) {


Account.getPrograma('yYpaES7l').then(function(response) {
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



var a = moment({ hour:13, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

     var seconds = (5400 - remaining);



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(8, 0, adsPerBlock, seconds2);

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
        changeschedule(8, 1, adsPerBlock, seconds2);

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
        changeschedule(8, 2, lastadblock, seconds2);

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
        changeschedule(8, 3, lastadblock, seconds2);

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
        changeschedule(8, 4, lastadblock, seconds2);

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
        changeschedule(8, 5, lastadblock, seconds2);

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
        changeschedule(8, 6, lastadblock, seconds2);

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




//teleprensa  - 1h
if (theprogram === 33 ) {

Account.getPrograma('1Cw2pT3f').then(function(response) {
          console.log(response.data)
          t1 = response.data.time1;
          t2 = response.data.time2;
          t3 = response.data.time3;
          t4 = response.data.time4;
          t5 = response.data.time5;  
          t6 = response.data.time6;          
         
          
       

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



var a = moment({ hour:14, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining);


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



})

}













//mujer - 3h
if (theprogram === 1111 ) {

Account.getPrograma('6n2WwupP').then(function(response) {
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




var a = moment({ hour:17, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (10800 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(1111, 0, adsPerBlock, seconds2);

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
    changeschedule(1111, 1, adsPerBlock, seconds2);

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
    changeschedule(1111, 2, lastadblock, seconds2);

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
    changeschedule(1111, 3, lastadblock, seconds2);

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
    changeschedule(1111, 4, lastadblock, seconds2);

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
    changeschedule(1111, 5, lastadblock, seconds2);

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
    changeschedule(1111, 6, lastadblock, seconds2);

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
    changeschedule(1111, 7, lastadblock, seconds2);

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
    changeschedule(1111, 8, lastadblock, seconds2);

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



//enpunto - 1h
if (theprogram === 555 ) {

Account.getPrograma('U65dgNqe').then(function(response) {
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



var a = moment({ hour:18, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

     var seconds = (3600 - remaining);



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(555, 0, adsPerBlock, seconds2);

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
        changeschedule(555, 1, adsPerBlock, seconds2);

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
        changeschedule(555, 2, lastadblock, seconds2);

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
        changeschedule(555, 3, lastadblock, seconds2);

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
        changeschedule(555, 4, lastadblock, seconds2);

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
        changeschedule(555, 5, lastadblock, seconds2);

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
        changeschedule(555, 6, lastadblock, seconds2);

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





//republik  - 130h
if (theprogram === 88 ) {

Account.getPrograma('yYpaES7l').then(function(response) {
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



var a = moment({ hour:20, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (5400 - remaining);


if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(88, 0, adsPerBlock, seconds2);

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
    changeschedule(88, 1, adsPerBlock, seconds2);

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
    changeschedule(88, 2, lastadblock, seconds2);

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
    changeschedule(88, 3, lastadblock, seconds2);

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
    changeschedule(88, 4, lastadblock, seconds2);

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
    changeschedule(88, 5, lastadblock, seconds2);

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
    changeschedule(88, 6, lastadblock, seconds2);

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
    changeschedule(88, 7, lastadblock, seconds2);

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
    changeschedule(88, 8, lastadblock, seconds2);

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













//teleprensa - 1h 
if (theprogram === 333 ) {

Account.getPrograma('1Cw2pT3f').then(function(response) {
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



var a = moment({ hour:21, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

     var seconds = (3600 - remaining);



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

    if (bloks>5){
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


    if (bloks>6){
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

})
}




//mujer  - 3 h
if (theprogram === 111111 ) {

Account.getPrograma('6n2WwupP').then(function(response) {
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

 var seconds = (10800 - remaining);



if  ((seconds > 0) && (seconds < time1)) {
    console.log('seconds ' + seconds)
    if ( seconds < t1) {
    var seconds2 = (seconds - 0)
    }  else {
     var  seconds2 = t1
    }
    console.log('seconds2 ' + seconds2)        
    changeschedule(11, 0, adsPerBlock, seconds2);

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
    changeschedule(111111, 1, adsPerBlock, seconds2);

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
    changeschedule(111111, 2, lastadblock, seconds2);

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
    changeschedule(111111, 3, lastadblock, seconds2);

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
    changeschedule(111111, 4, lastadblock, seconds2);

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
    changeschedule(111111, 5, lastadblock, seconds2);

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
    changeschedule(111111, 6, lastadblock, seconds2);

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
    changeschedule(111111, 7, lastadblock, seconds2);

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
    changeschedule(111111, 8, lastadblock, seconds2);

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











var time166 = function () {

$scope.obj1 = { value1: false };
$scope.obj2 = { value2: false };
$scope.obj3 = { value3: false };
$scope.obj4 = { value4: false };


$scope.objtT1 = { valueT1: false};
$scope.objtT2 = { valueT2: false};
$scope.objtT3 = { valueT3: false};
$scope.objtT4 = { valueT4: false};

$scope.objtA = { valueA: true};


$scope.objS1 = { valueS1: false };
$scope.objS2 = { valueS2: false };
$scope.objS3 = { valueS3: false };
$scope.objS4 = { valueS4: false };



$scope.time1 = moment().minutes(0).format('h:mm a');
$scope.time2 = moment().minutes(30).format('h:mm a');
$scope.time3 = moment().minutes(30).add(0.5, 'hour').format('h:mm a');
$scope.time4 = moment().minutes(30).add(1, 'hour').format('h:mm a');


        //block1
        if (moment().minutes(0).format('h:mm a') === "12:00 am") {
            $scope.program1 = 'Cierre';
            if((moment().format('h:mm a') >= "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';
              $scope.objtT1 = { valueT1: true};
                $scope.program22 =  'channel33' ;

            }; 
            $scope.objS1 = { valueS1: true };

        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 am") {
            $scope.program2 = 'Cierre';
            if((moment().format('h:mm a') >= "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM'
              $scope.objtT2 = { valueT2: true };  
                $scope.program22 =  'channel33' ;

            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 am") {
            $scope.program3 = 'Cierre';
            if((moment().format('h:mm a') > "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM'            
                $scope.program22 =  'channel33' ;

            };
            $scope.objS3 = { valueS3: true };

        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 am") {
            $scope.program4 =  'Cierre';
            if((moment().format('h:mm a') > "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM'            
                $scope.program22 =  'channel33' ;

            }; 
            $scope.objS4 = { valueS4: true };
        };

        //block1-2
        if (moment().minutes(0).format('h:mm a') === "1:00 am") {
            $scope.program1 = 'Cierre';
            if((moment().format('h:mm a') >= "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;

            };
             $scope.objS1 = { valueS1: true }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 am") {
            $scope.program2 =  'Cierre' ;
            if((moment().format('h:mm a') >= "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;

            } 
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 am") {
            $scope.program3 = 'Cierre';
            if((moment().format('h:mm a') > "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
                $scope.program22 =  'channel33' ;

            };
            $scope.objS3 = { valueS3: true };

        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 am") {
            $scope.program4 = 'Cierre';
            if((moment().format('h:mm a') > "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
                $scope.program22 =  'channel33' ;

            }; 
            $scope.objS4 = { valueS4: true };
        }; 




        //block2
        if (moment().minutes(0).format('h:mm a') === "2:00 am") {
            $scope.program1 = 'Cierre';
            if((moment().format('h:mm a') >= "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;

            };
            $scope.objS1 = { valueS1: true }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 am") {
            $scope.program2 = 'Cierre';
            if((moment().format('h:mm a') >= "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';          
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;

            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 am") {
            $scope.program3 = 'Cierre';
            if((moment().format('h:mm a') > "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
                $scope.program22 =  'channel33' ;

            };
            $scope.objS3 = { valueS3: true }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 am") {
            $scope.program4 =  'Cierre' ;
            if((moment().format('h:mm a') > "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM'; 
                $scope.program22 =  'channel33' ;

            };
            $scope.objS4 = { valueS4: true }; 
        };

        //block2-2
        if (moment().minutes(0).format('h:mm a') === "3:00 am") {
            $scope.program1 = 'Cierre';
            if((moment().format('h:mm a') >= "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';           
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;

            };
            $scope.objS1 = { valueS1: true };            
        }; 

        if (moment().minutes(30).format('h:mm a') === "3:30 am") {
            $scope.program2 =  'Cierre' ;
            if((moment().format('h:mm a') >= "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';           
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;

            } 
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 am") {
            $scope.program3 = 'Cierre';
            if((moment().format('h:mm a') > "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
                $scope.program22 =  'channel33' ;

            };
            $scope.objS3 = { valueS3: true };            
        }; 

        if (moment().minutes(90).format('h:mm a') === "4:30 am") {
            $scope.program4 = 'Cierre';
            if((moment().format('h:mm a') > "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
                $scope.program22 =  'channel33' ;

            };             
            $scope.objS4 = { valueS4: true };
        }; 


        //block3
        if (moment().minutes(0).format('h:mm a') === "4:00 am") {
            $scope.program1 = 'Cierre';
            if((moment().format('h:mm a') >= "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';           
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;

            };
            $scope.objS1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 am") {
            $scope.program2 = 'Cierre';
            if((moment().format('h:mm a') >= "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;

            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "5:00 am") {
            $scope.program3 = 'Cierre';
            if((moment().format('h:mm a') > "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
                $scope.program22 =  'channel33' ;

            }; 
            $scope.objS3 = { valueS3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 am") {
            $scope.program4 =  'Cierre' ;
            if((moment().format('h:mm a') > "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
              $scope.program =  'Cierre' ;
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';            
                $scope.program22 =  'channel33' ;

            };
            $scope.objS4 = { valueS4: true };
        };

        //block3-2
        if (moment().minutes(0).format('h:mm a') === "5:00 am") {
            $scope.program1 = 'Cierre';
            if((moment().format('h:mm a') >= "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
              $scope.program =  'Cierre' ;
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM';   
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;

            };
            $scope.obj1 = { value1: true };  
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 am") {
            $scope.program2 =  'Dr 33' ;
            if((moment().format('h:mm a') >= "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
              $scope.program =  'Dr 33' ;
              $scope.desc = 'Recetas de Cocina';
              $scope.ptime = '05:30-06:30 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(2);
            } 
            $scope.obj2 = { value2: true };             
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 am") {
            $scope.program3 = 'teleprensa';
            if((moment().format('h:mm a') > "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
              $scope.program =  'teleprensa' ;
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '05:30-06:30 PM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 am") {
            $scope.program4 = 'teleprensa';
            if((moment().format('h:mm a') > "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
              $scope.program = 'teleprensa';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '06:30-07:30 PM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };  
            } 
            $scope.objS4 = { valueS4: true };
            $scope.obj4 = { value4: true };   
        }; 


        //block4
        if (moment().minutes(0).format('h:mm a') === "6:00 am") {
            $scope.program1 = 'Teleprensa';
            if((moment().format('h:mm a') >= "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
              $scope.program = 'teleprensa';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '05:30-06:30 AM';
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(3)
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 am") {
            $scope.program2 = 'Teleprensa';
            if((moment().format('h:mm a') >= "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
              $scope.program = 'teleprensa';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '06:30-07:30 AM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };  
                runthetime(3)                
            } 
            $scope.objS2 = { valueS2: true };
            $scope.obj2 = { value2: true };               
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 am") {
            $scope.program3 = '8 en punto';
            if((moment().format('h:mm a') > "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
              $scope.program = 'Olympia 33';
              $scope.desc = 'Deportes';
              $scope.ptime = '06:30-07:30 AM'; 
                $scope.program22 =  'olympia' ;
                $scope.objtA = { valueA : false };  
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 am") {
            $scope.program4 =  '8 en punto' ;
            if((moment().format('h:mm a') > "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
              $scope.program =  'Olympia 33' ;
              $scope.desc = 'Deportes';
              $scope.ptime = '07:30-08:30 AM'; 
                $scope.program22 =  'Olympia 33' ;
                $scope.objtA = { valueA : false };    
            } 
            $scope.objS4 = { valueS4: true };
        };

        //block4-2
        if (moment().minutes(0).format('h:mm a') === "7:00 am") {
            $scope.program1 = '8 en punto';
            if((moment().format('h:mm a') >= "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
              $scope.program = '8 en punto';
              $scope.desc = 'Deportes';
              $scope.ptime = '06:30-07:30 AM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'olympia' ;
                $scope.objtA = { valueA : false }; 
                runthetime(5)                
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 am") {
            $scope.program2 =  '8 en punto' ;
            if((moment().format('h:mm a') >= "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
              $scope.program =  '8 en punto' ;
              $scope.desc = 'Deportes';
              $scope.ptime = '07:30-08:30 AM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'olympia' ;
                $scope.objtA = { valueA : false };                
                runthetime(5)                
            } 
            $scope.objS2 = { valueS2: true };
            $scope.obj2 = { value2: true };             
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 am") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
              $scope.program =  'teleprensa' ;
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '07:30-08:30 AM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };                
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 am") {
            $scope.program4 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
              $scope.program = 'Quibole';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '08:30-10:00 AM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };            
                 } 
            $scope.objS4 = { valueS4: true };
        }; 


        //block5
        if (moment().minutes(0).format('h:mm a') === "8:00 am") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Entrevistas de Interes';
              $scope.ptime = '07:30-08:30 AM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'enpunto' ;
                $scope.objtA = { valueA : false };
                runthetime(11)                
            };
            $scope.objS1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 am") {
            $scope.program2 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
              $scope.program = 'Mujer a Mujer';
                $scope.desc = 'Entrevistas de Interes';
              $scope.ptime = '08:30-10:00 AM'; 
                $scope.program22 =  'enpunto' ;
              $scope.objtT2 = { valueT2: true };
                runthetime(11)                
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 am") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '08:30-10:00 AM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };          
            } 
            $scope.objS3 = { valueS3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 am") {
            $scope.program4 =  'Mujer a Mujer';
            if((moment().format('h:mm a') > "9:30 am") & (moment().format('h:mm a') < "10:00 am")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '08:30-10:00 AM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };         
                     }; 
            $scope.objS4 = { valueS4: true };
        };

        //block5-2

        if (moment().minutes(0).format('h:mm a') === "9:00 am") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '08:30-10:00 AM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };  
                runthetime(11)
            } 
           $scope.objS1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 am") {
            $scope.program2 =  'Mujer a Mujer';
            if((moment().format('h:mm a') >= "9:30 am") & (moment().format('hh:mm a') < "10:00 am")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '08:30-10:00 AM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };       
                runthetime(11)
            };
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 am") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
              $scope.program = 'Teleprensa';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '10:30-11:30 AM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };   
            }    
           $scope.objS3 = { valueS3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 am") {
            $scope.program4 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
              $scope.program = 'Teleprensa';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '10:30-11:30 AM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };            
            } 
                $scope.objS4 = { valueS4: true }; 

        }; 


        //block6
        if (moment().minutes(0).format('h:mm a') === "10:00 am") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '10:30-11:30 AM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };          
                runthetime(11)
          } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 am") {
            $scope.program2 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '10:30-11:30 AM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };             
                runthetime(11)
            } 
            $scope.objS2 = { valueS2: true };
            $scope.obj2 = { value2: true };              
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 am") {
            $scope.program3 = '8 en punto';
            if((moment().format('h:mm a') > "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
            $scope.program = 'Buena Onda';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '10:30-11:30 AM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };           
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 am") {
            $scope.program4 =  '8 en punto' ;
            if((moment().format('h:mm a') > "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
              $scope.program =  'Dr 33' ;
              $scope.desc = 'Lo mejor de los expectaculos';
              $scope.ptime = '11:30-12:00 PM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };         
            } 
                $scope.objS4 = { valueS4: true };
        };



        //block 6-2

        if (moment().minutes(0).format('h:mm a') === "11:00 am") {
            $scope.program1 = '8 en punto';
            if((moment().format('h:mm a') >= "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
              $scope.program = '8 en punto';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '10:30-11:30 AM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };  
                runthetime(55)
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 am") {
            $scope.program2 =  '8 en punto' ;
            if((moment().format('h:mm a') >= "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
              $scope.program = '8 en punto';
              $scope.desc = 'Consejos de Salud';
              $scope.ptime = '11:30-12:00 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false }; 
                runthetime(55)                
            }; 
            $scope.objS2 = { valueS2: true };
            $scope.obj2 = { value2: true };   
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 pm") {
            $scope.program3 = 'Republica';
            if((moment().format('h:mm a') > "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
              $scope.program = 'Teleprensa';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '12:00-01:30 PM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 pm") {
            $scope.program4 = 'Republica';
            if((moment().format('h:mm a') > "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
              $scope.program = 'Teleprensa';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '12:00-01:30 PM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS4 = { valueS4: true }; 
        }; 


        //block7
        if (moment().minutes(0).format('h:mm a') === "12:00 pm") {
            $scope.program1 = 'Republica';
            if((moment().format('h:mm a') >= "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
              $scope.program = 'Republica';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '12:00-01:30 PM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(8) 
            };
            $scope.objS1 = { valueS1: true };
          }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 pm") {
            $scope.program2 = 'Republica';
            if((moment().format('h:mm a') >= "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
              $scope.program = 'Republica';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '12:00-01:30 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(8)                
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 pm") {
            $scope.program3 = 'Republica';
            if((moment().format('h:mm a') > "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
              $scope.program = 'Republica SV';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '12:00-01:30 PM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
            }; 
            $scope.objS3 = { valueS3: true };
            $scope.obj3 = { value3: true };              
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 pm") {
            $scope.program4 =  'Teleprensa' ;
            if((moment().format('h:mm a') > "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program22 =  'Republica SV' ;
              $scope.program =  'De mujer a mujer' ;
              $scope.desc = 'Revista con temas interes para mujeres';
              $scope.ptime = '01:30-03:30 PM'; 
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };
            } 
        };

        //block7-2
        if (moment().minutes(0).format('h:mm a') === "1:00 pm") {
            $scope.program1 = 'Republica';
            if((moment().format('h:mm a') >= "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
              $scope.program = 'Republica';
              $scope.desc = 'Entrevistas de interes';
              $scope.ptime = '12:00-01:30 PM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(8)                
            }; 
            $scope.obj1 = { value1: true };  
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 pm") {
            $scope.program2 =  'Teleprensa';
            if((moment().format('h:mm a') >= "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program =  'Teleprensa';
                $scope.desc = 'Entrevistas de interes';
              $scope.ptime = '01:30-03:30 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };
                runthetime(33)                
            };
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 pm") {
            $scope.program3 = 'Teleprensa';
            if((moment().format('h:mm a') > "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
              $scope.program =  'Republica SV' ;
              $scope.desc = 'Revista con temas interes para mujeres';
              $scope.ptime = '01:30-03:30 PM'; 
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };       
            } 
            $scope.objS3 = { valueS3: true };
            $scope.obj3 = { value3: true };               
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 pm") {
            $scope.program4 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "2:30 pm") & (moment().format('h:mm a') < "2:30 pm")) {
              $scope.program =  'Republica SV' ;
              $scope.desc = 'Revista con temas interes para mujeres';
              $scope.ptime = '01:30-03:30 PM'; 
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };
            };
        }; 


        //block8
        if (moment().minutes(0).format('h:mm a') === "2:00 pm") {
            $scope.program1 = 'Teleprensa';
            if((moment().format('h:mm a') >= "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
              $scope.program =  'Teleprensa' ;
                $scope.desc = 'Entrevistas de interes';
              $scope.ptime = '01:30-03:30 PM';
              $scope.objtT1 = { valueT1: true};
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };
                runthetime(33)                
            } 
            $scope.obj1 = { value1: true };               
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 pm") {
            $scope.program2 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "2:30 pm") & (moment().format('h:mm a') < "3:00 pm")) {
              $scope.program =  'Mujer a Mujer' ;
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };
                $scope.desc = 'Entrevistas de interes';
              $scope.ptime = '01:30-03:30 PM'; 
              $scope.objtT2 = { valueT2: true};
                runthetime(1111)
            } 
            $scope.objS2 = { valueS2: true };
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 pm") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
              $scope.program =  'Quibole' ;
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };
              $scope.desc = 'Revista con temas interes para mujeres';
              $scope.ptime = '01:30-03:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 pm") {
            $scope.program4 =  'Mujer a Mujer' ;
            if((moment().format('h:mm a') > "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
              $scope.program =  'Quibole' ;
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '03:30-05:30 PM'; 
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS4 = { valueS4: true };
        };


        //block 8-2
        if (moment().minutes(0).format('h:mm a') === "3:00 pm") {
            $scope.program1 =  'Mujer a Mujer' ;
            if((moment().format('h:mm a') >= "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program =  'Mujer a Mujer' ;
                $scope.program22 =  'mujer' ;
                $scope.objtA = { valueA : false };
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '01:30-03:30 PM'; 
              $scope.objtT1 = { valueT1: true};
                runthetime(1111)                
            }
            $scope.objS1 = { valueS1: true };
       };

        if (moment().minutes(30).format('h:mm a') === "3:30 pm") {
            $scope.program2 =  'Mujer a Mujer' ;
            if((moment().format('h:mm a') >= "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program =  'Mujer a Mujer' ;
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : false };
                $scope.desc = 'Programa juvenil';
              $scope.ptime = '03:30-05:30 PM';
              $scope.objtT2 = { valueT2: true}; 
                runthetime(1111)                
            }
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 pm") {
            $scope.program3 =  'Mujer a Mujer' ;
            if((moment().format('h:mm a') > "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
              $scope.program =  'Quibole' ;
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '03:30-05:30 PM'; 
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS3 = { valueS3: true };
        };

        if (moment().minutes(90).format('h:mm a') === "4:30 pm") {
            $scope.program4 =  'Mujer a Mujer' ;
            if((moment().format('h:mm a') > "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
              $scope.program =  'Quibole' ;
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '03:30-05:30 PM'; 
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS4 = { valueS4: true };
        };



        //block9
        if (moment().minutes(0).format('h:mm a') === "4:00 pm") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
              $scope.program =  'Mujer a Mujer' ;
              $scope.desc = 'Programa juvenil';
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : false };                
              $scope.ptime = '03:30-05:30 PM'; 
              $scope.objtT1 = { valueT1: true };
                runthetime(1111)                
            } 
            $scope.objS1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 pm") {
            $scope.program2 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program =  'Mujer a Mujer' ;
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '03:30-05:30 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : true };   
                runthetime(1111)
            } 
        }; 


        if (moment().minutes(60).format('h:mm a') === "5:00 pm") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
              $scope.program =  'Mujer a mujer' ;
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '03:30-05:30 PM'; 
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS3 = { valueS3: true };
            $scope.obj3 = { value3: true };               
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 pm") {
            $scope.program4 =  '8 en punto';
            if((moment().format('h:mm a') > "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
              $scope.program =  'Quibole';
              $scope.desc = 'programa sobre Anime y videojuegos';
              $scope.ptime = '05:30-06:00 PM'; 
            } 
            $scope.obj4 = { value4: true };   
        };

        //block9-2 
        if (moment().minutes(0).format('h:mm a') === "5:00 pm") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Programa juvenil';
              $scope.ptime = '03:30-05:30 PM';
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'buenaonda' ;
                $scope.objtA = { valueA : false };
                runthetime(1111)
          };
            $scope.obj1 = { value1: true };             
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 pm") {
            $scope.program2 =  '8 en punto';
            if((moment().format('h:mm a') >= "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
              $scope.program = '8 en punto';
                $scope.desc = 'Programa juvenil';
              $scope.ptime = '05:30-06:00 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false }; 
                runthetime(555)
          };
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 pm") {
            $scope.program3 = '8 en punto';
            if((moment().format('h:mm a') > "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
              $scope.program = 'Teleprensa';
              $scope.desc = 'Consejos sobre salud y bienestar';
              $scope.ptime = '06:00-06:30 PM';
                $scope.program22 =  'channel33' ;
          };
           $scope.objS3 = { valueS3: true };
            $scope.obj3 = { value3: true };             
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 pm") {
            $scope.program4 = 'Republica';
            if((moment().format('h:mm a') > "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
            $scope.program = 'Teleprensa';
            $scope.desc = 'Lo mejor del cine';
              $scope.ptime = '06:30-07:00 PM';
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false }; 
          } 
        }; 



        //block10
        if (moment().minutes(0).format('h:mm a') === "6:00 pm") {
            $scope.program1 = '8 en punto';
            if((moment().format('h:mm a') >= "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
              $scope.program = '8 en punto';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '06:00-06:30 PM';
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };
                runthetime(555)                
          };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 pm") {
          $scope.program2 = 'Republica';
          if((moment().format('h:mm a') >= "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
              $scope.program = 'Republica';
                $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '06:30-07:00 PM';
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };
                runthetime(88)                                
          };    
           $scope.objS2 = { valueS2: true };
            $scope.obj2 = { value2: true };   

        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 pm") {
            $scope.program3 = 'Republica';
            if((moment().format('h:mm a') > "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '07:00-08:00 PM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
              };
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 pm") {
          $scope.program4 =  'Republica';
            if((moment().format('h:mm a') > "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '07:00-08:00 PM'; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
            };
           $scope.objS4 = { valueS4: true };
        };



        //block10-2

        if (moment().minutes(0).format('h:mm a') === "7:00 pm") {
            $scope.program1 = 'Republica';
            if((moment().format('h:mm a') >= "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
              $scope.program = 'Republica';
              $scope.desc = 'Reportajes para mujeres ';
              $scope.ptime = '07:00-08:00 PM'; 
              $scope.objtT1 = { valueT1: true };
                 $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false }; 
                runthetime(88)                
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 pm") {
            $scope.program2 =  'Republica';
            if((moment().format('h:mm a') >= "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program =  'Republica';
                $scope.desc = 'Reportajes para mujeres ';
              $scope.ptime = '07:00-08:00 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(88)                
            }
           $scope.objS2 = { valueS2: true };
            $scope.obj2 = { value2: true };   
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 pm") {
            $scope.program3 = 'Teleprensa';
            if((moment().format('h:mm a') > "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Entrevista';
              $scope.ptime = '08:00-09:00 PM';            
                $scope.program22 =  'enpunto' ;
                $scope.objtA = { valueA : false };
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 pm") {
            $scope.program4 = 'Teleprensa';
            if((moment().format('h:mm a') > "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Entrevista';
              $scope.ptime = '08:00-09:00 PM';            
                $scope.program22 =  'enpunto' ;
                $scope.objtA = { valueA : false };
            }
            $scope.objS4 = { valueS4: true }; 
        }; 


        //block11
        if (moment().minutes(0).format('h:mm a') === "8:00 pm") {
            $scope.program1 = 'Teleprensa';
            if((moment().format('h:mm a') >= "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
              $scope.program = 'Teleprensa';
                $scope.desc = 'Reportajes para mujeres ';
              $scope.ptime = '08:00-09:00 PM';            
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'enpunto' ;
                $scope.objtA = { valueA : false };
                runthetime(333)                
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 pm") {
            $scope.program2 = 'Teleprensa';
            if((moment().format('h:mm a') >= "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
              $scope.program = 'Teleprensa';
                $scope.desc = 'Reportajes para mujeres ';
              $scope.ptime = '08:00-09:00 PM';            
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'enpunto' ;
                $scope.objtA = { valueA : false };
                runthetime(333)                
            }; 
          $scope.obj2 = { value2: true };
          $scope.objS2 = { valueS2: true }; 

        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 pm") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
              $scope.program = 'Olympia 33';
              $scope.desc = 'Deportes';
              $scope.ptime = '09:00-10:00 PM'; 
                $scope.program22 =  'olympia' ;
                $scope.objtA = { valueA : false };                
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 pm") {
            $scope.program4 =  'Mujer a Mujer';
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('h:mm a') < "10:00 pm")) {
              $scope.program = 'Olympia 33';
              $scope.desc = 'Deportes';
              $scope.ptime = '09:00-10:00 PM'; 
                $scope.program22 =  'olympia' ;
                $scope.objtA = { valueA : false };   
            }; 
            $scope.objS4 = { valueS4: true }; 
        };

        //block11-2
        if (moment().minutes(0).format('h:mm a') === "9:00 pm") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Reportajes Deportivos';
              $scope.ptime = '09:00-10:00 PM'; 
              $scope.objtT1 = { valueT1: true };
                $scope.program22 =  'olympia' ;
                $scope.objtA = { valueA : false };   
                runthetime(111111)                
            } 
            $scope.objS1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 pm") {
            $scope.program2 =  'Mujer a Mujer';
            if((moment().format('hh:mm a') > "09:30 pm") & (moment().format('hh:mm a') < "10:00 pm")) {
              $scope.program = 'Mujer a Mujer';
                $scope.desc = 'Reportajes Deportivos';
              $scope.ptime = '09:00-10:00 PM'; 
              $scope.objtT2 = { valueT2: true };
                $scope.program22 =  'olympia' ;
                $scope.objtA = { valueA : false };  
                runthetime(111111)                                 
            };
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 pm") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Lectura biblica';
              $scope.ptime = '10:00-11:00 PM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS3 = { valueS3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 pm") {
            $scope.program4 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
              $scope.program = 'Pop Corn';
              $scope.desc = 'Lectura biblica';
              $scope.ptime = '10:00-11:00 PM'; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };
            };
            $scope.objS4 = { valueS4: true };
        }; 




        //block12
        if (moment().minutes(0).format('h:mm a') === "10:00 pm") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Recetas de Cocina';
              $scope.ptime = '10:00-11:00 PM';
              $scope.objtT1 = { valueT1: true}; 
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };
                runthetime(111111)                                
            } 
            $scope.objS1 = { valueS1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 pm") {
            $scope.program2 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Lo ultimo en Cine';
              $scope.ptime = '10:00-11:00 PM'; 
              $scope.objtT2 = { valueT2: true};
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false }; 
                runthetime(111111)                                      
        };
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 pm") {
            $scope.program3 = 'Mujer a Mujer';
            if((moment().format('h:mm a') > "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
              $scope.program = 'Siempre Exitos';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '11:00-12:00 AM'; 
              $scope.objtT3 = { valueT3: true};
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
            } 
           $scope.objS3 = { valueS3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 pm") {
            $scope.program4 =  'Mujer a Mujer';
            if((moment().format('h:mm a') > "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
              $scope.program = 'Siempre Exitos';
              $scope.desc = 'Noticias de El Salvador';
              $scope.ptime = '11:00-12:00 AM'; 
              $scope.objtT4 = { valueT4: true};
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
            };
            $scope.objS4 = { valueS4: true }; 
        };


        //block12-2

        if (moment().minutes(0).format('h:mm a') === "11:00 pm") {
            $scope.program1 = 'Mujer a Mujer';
            if((moment().format('h:mm a') >= "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
              $scope.program = 'Mujer a Mujer';
              $scope.desc = 'Exitos Musicales';
              $scope.ptime = '11:00-12:00 AM'; 
              $scope.objtT1 = { valueT1: true};
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(111111)                                
            } 

        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 pm") {
            $scope.program2 =  'Mujer a Mujer';
            if((moment().format('h:mm a') >= "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
              $scope.program = 'Mujer a Mujer';
                $scope.desc = 'Exitos Musicales';
              $scope.ptime = '11:00-12:00 AM';
              $scope.objtT2 = { valueT2: true}; 
                $scope.program22 =  'teleprensa' ;
                $scope.objtA = { valueA : false };
                runthetime(111111)                                                
            } 
            $scope.obj2 = { value2: true };
            $scope.objS2 = { valueS2: true };

        };

        if (moment().minutes(60).format('h:mm a') === "12:00 am") {
            $scope.program3 = 'Cierre';
            if((moment().format('h:mm a') > "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM'            
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 am") {
            $scope.program4 = 'Cierre';
            if((moment().format('h:mm a') > "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
              $scope.program = 'Cierre';
              $scope.desc = 'Sin transmision';
              $scope.ptime = '12:00-05:30 AM'            
                $scope.program22 =  'channel33' ;
                $scope.objtA = { valueA : false };        
            };
            $scope.objS4 = { valueS4: true }; 
        }; 


    };
    time166();












 timer =  function() { 
            console.log('timer');
      $scope.$apply(function () {
      time166();
    });
    }


   

 }]);

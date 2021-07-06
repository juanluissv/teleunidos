var theApp49 = angular.module('theApp49', []);
theApp49.controller('micanal23Ctrl', ['$scope', '$http', 'Account',
 function($scope, $http, Account, $log, $q, ) {

$scope.getviews = function() {
    Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
        $scope.thecanal = response.data.channel;
        $scope.nombre = response.data.nombre;
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
var mediaid;
var qualt;


var playfun = function (mediaobjtt, index, adsPerBlock, thesec) {


var theplaylist2 = []

$(".player315").append( "<div class='play3'  id='myElement523'></div> " );
var playerInstance =jwplayer("myElement523")


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
  "autostart": true,
  "androidhls": true,
 "mute": false,
"skin": {
  "name": "myskin3"
  },
 "image": "http://infinite-fjord-54016.herokuapp.com/canales/loading.png",    
  "volume": 100,
  "primary": "html5",
  "type": "mp4",
  "playlist": [{
    "file": thefile,
    }],
    'advertising': {
    'client': 'vast',
    'admessage': ' ',    
    'schedule': {
      'adbreak1': {
        'offset': "post",
        "tag": "https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411"
    }    
}
}
});




var adnumber = 0;
playerInstance.on('adComplete', function() {
  if ( adnumber < adsPerBlock) {
  playerInstance.playAd("https://servedbyadbutler.com/vast.spark?setID=7656&ID=172550&pid=72411");
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

 if (playlistnumb === 2) {
// consultorio
            playfun('LyON9x3D', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 22) {
// consultorio 2 
            playfun('LyON9x3D', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 222) {
// consultorio 3 
            playfun('LyON9x3D', index, adsPerBlock, thesec);
    }    
 if (playlistnumb === 2222) {
// consultorio 4 
            playfun('LyON9x3D', index, adsPerBlock, thesec);
    }  
 if (playlistnumb === 22222) {
// consultorio 5 
            playfun('LyON9x3D', index, adsPerBlock, thesec);
    }  


 if (playlistnumb === 3) {
// geopolitica 
            playfun('5iqCUArm', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 33) {
// geopolitica 
            playfun('5iqCUArm', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 333) {
// geopolitica 
            playfun('5iqCUArm', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 3333) {
// geopolitica 
            playfun('5iqCUArm', index, adsPerBlock, thesec);
    } 
    
               
 if (playlistnumb === 4) {
// plataforma 
            playfun('qQ5Fr1mn', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 44) {
// plataforma 
            playfun('qQ5Fr1mn', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 444) {
// plataforma 
            playfun('qQ5Fr1mn', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 4444) {
// plataforma 
            playfun('qQ5Fr1mn', index, adsPerBlock, thesec);
    }        


 if (playlistnumb === 5) {
// informa 
            playfun('MbTfPGxc', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 55) {
// informa 
            playfun('MbTfPGxc', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 555) {
// informa 
            playfun('MbTfPGxc', index, adsPerBlock, thesec);
    }
 if (playlistnumb === 5555) {
// informa 
            playfun('MbTfPGxc', index, adsPerBlock, thesec);
    }            


 if (playlistnumb === 6) {
// remind 
            playfun('FPapq1k8', index, adsPerBlock, thesec);
    }  
 if (playlistnumb === 66) {
// remind 
            playfun('FPapq1k8', index, adsPerBlock, thesec);
    }  
 if (playlistnumb === 666) {
// remind 
            playfun('FPapq1k8', index, adsPerBlock, thesec);
    }  
 if (playlistnumb === 6666) {
// remind 
            playfun('FPapq1k8', index, adsPerBlock, thesec);
    }          


    if (playlistnumb === 7) {
// encuentro 
            playfun('pXJWiS8T', index, adsPerBlock, thesec);
    }
    if (playlistnumb === 77) {
// encuentro 
            playfun('pXJWiS8T', index, adsPerBlock, thesec);
    }
    if (playlistnumb === 777) {
// encuentro 
            playfun('pXJWiS8T', index, adsPerBlock, thesec);
    }
    if (playlistnumb === 7777) {
// encuentro 
            playfun('pXJWiS8T', index, adsPerBlock, thesec);
    }        

    if (playlistnumb === 8) {
// fermentados 
            playfun('03I06oNn', index, adsPerBlock, thesec);
    }
    if (playlistnumb === 88) {
// fermentados 
            playfun('03I06oNn', index, adsPerBlock, thesec);
    }
    if (playlistnumb === 888) {
// fermentados 
            playfun('03I06oNn', index, adsPerBlock, thesec);
    }






    if (playlistnumb === 9) {
// poptime
            playfun('RqUwolce', index, adsPerBlock, thesec);
    }  
    if (playlistnumb === 99) {
// poptime
            playfun('RqUwolce', index, adsPerBlock, thesec);
    }  
    if (playlistnumb === 999) {
// poptime
            playfun('RqUwolce', index, adsPerBlock, thesec);
    }  
    if (playlistnumb === 9999) {
// poptime
            playfun('RqUwolce', index, adsPerBlock, thesec);
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

$( "#myElement551" ).remove();
//consultorio 0:30 530


if (theprogram === 2 ) {

 Account.getPrograma('LyON9x3D').then(function(response) {

              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);






var a = moment({ hour:06, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (1800 - remaining);


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

    if (bloks>2){
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
}

})
}




//encuentro1 - 1 h.    6-7
if (theprogram === 7 ) {

Account.getPrograma('pXJWiS8T').then(function(response) {

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
        changeschedule(7, 0, adsPerBlock, seconds2);

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
        changeschedule(7, 1, adsPerBlock, seconds2);

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
        changeschedule(7, 2, lastadblock, seconds2);

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
        changeschedule(7, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(7, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(7, 5, lastadblock, seconds2);

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
        changeschedule(7, 6, lastadblock, seconds2);

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




//poptime1  - 1 h - 7-8
if (theprogram === 9 ) {

Account.getPrograma('RqUwolce').then(function(response) {


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






var a = moment({ hour:08, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (3600 - remaining)


    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(9, 0, adsPerBlock, seconds2);

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
        changeschedule(9, 1, adsPerBlock, seconds2);

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
        changeschedule(9, 2, lastadblock, seconds2);

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
        changeschedule(9, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(9, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(9, 5, lastadblock, seconds2);

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
        changeschedule(9, 6, lastadblock, seconds2);

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







//geopolitica1  - 0:30h - 8-830
if (theprogram === 3 ) {

Account.getPrograma('5iqCUArm').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);




var a = moment({ hour:08, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);


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

    if (bloks>2){
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
}

})
}




//plataforma1 - 0:30h - 830-9
if (theprogram === 4 ) {

Account.getPrograma('qQ5Fr1mn').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);





var a = moment({ hour:09, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);// clock time


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

    if (bloks>2){
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
}

})
}





//informa1 -0:30h - 9-930
if (theprogram === 5) {

Account.getPrograma('MbTfPGxc').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);





var a = moment({ hour:09, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)
var seconds = (1800 - remaining);



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

    if (bloks>2){
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
}




})
}





//fermentados  - 1h -9:30-10:30
if (theprogram === 8 ) {

Account.getPrograma('03I06oNn').then(function(response) {



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







var a = moment({ hour:10, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (3600 - remaining)


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

    if (bloks>4){
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








//consultorio2 - 0:30h - 1030-11
if (theprogram === 22 ) {

Account.getPrograma('LyON9x3D').then(function(response) {



              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);





var a = moment({ hour:11, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)
 var seconds = (1800 - remaining);// clock time


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

    if (bloks>2){
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
}


})
}





//encuentro2  - 1h - 11-12
if (theprogram === 77 ) {


Account.getPrograma('pXJWiS8T').then(function(response) {


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




var a = moment({ hour:12, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (3600 - remaining); // clock time



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(77, 0, adsPerBlock, seconds2);

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
        changeschedule(77, 1, adsPerBlock, seconds2);

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
        changeschedule(77, 2, lastadblock, seconds2);

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
        changeschedule(77, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(77, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(77, 5, lastadblock, seconds2);

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
        changeschedule(77, 6, lastadblock, seconds2);

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








//poptime2 - 1h  - 12-1
if (theprogram === 99 ) {

Account.getPrograma('RqUwolce').then(function(response) {


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





var a = moment({ hour:13, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remainingg ' + remaining)


 var seconds = (3600 - remaining);



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(99, 0, adsPerBlock, seconds2);

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
        changeschedule(99, 1, adsPerBlock, seconds2);

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
        changeschedule(99, 2, lastadblock, seconds2);

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
        changeschedule(99, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(99, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(99, 5, lastadblock, seconds2);

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
        changeschedule(99, 6, lastadblock, seconds2);

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





//plataforma2  - 0:30 - 1-130
if (theprogram === 44 ) {

Account.getPrograma('qQ5Fr1mn').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);




var a = moment({ hour:13, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);



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

    if (bloks>2){
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
}


})
}







//informa2  00:30 - 130-2
if (theprogram === 55 ) {

Account.getPrograma('MbTfPGxc').then(function(response) {



              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);






var a = moment({ hour:14, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)
var seconds = (1800 - remaining);


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

    if (bloks>2){
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
}





})
}





//fermentados 1h - 2-3
if (theprogram === 88 ) {

Account.getPrograma('03I06oNn').then(function(response) {


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





var a = moment({ hour:15, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (3600 - remaining)


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

    if (bloks>4){
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


    if (bloks>6){
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

})
}





//consultorio3 - 030h - 3-330
if (theprogram === 222 ) {

Account.getPrograma('LyON9x3D').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);






var a = moment({ hour:15, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);




    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(222, 0, adsPerBlock, seconds2);

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
        changeschedule(222, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>2){
    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(222, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
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












//encuentro3 - 1h - 330-430
if (theprogram === 777 ) {

Account.getPrograma('pXJWiS8T').then(function(response) {


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





var a = moment({ hour:16, minute:30 });
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
        changeschedule(777, 0, adsPerBlock, seconds2);

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
        changeschedule(777, 1, adsPerBlock, seconds2);

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
        changeschedule(777, 2, lastadblock, seconds2);

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
        changeschedule(777, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(777, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(777, 5, lastadblock, seconds2);

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
        changeschedule(777, 6, lastadblock, seconds2);

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







//poptime3 - 1h - 430-530
if (theprogram === 999 ) {

Account.getPrograma('RqUwolce').then(function(response) {


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





var a = moment({ hour:17, minute:30 });
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
        changeschedule(999, 0, adsPerBlock, seconds2);

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
        changeschedule(999, 1, adsPerBlock, seconds2);

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
        changeschedule(999, 2, lastadblock, seconds2);

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
        changeschedule(999, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(999, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(999, 5, lastadblock, seconds2);

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
        changeschedule(999, 6, lastadblock, seconds2);

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








//plataforma3 - 030h - 530-6
if (theprogram === 444 ) {

Account.getPrograma('qQ5Fr1mn').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);




var a = moment({ hour:18, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);



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

    if (bloks>2){
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
}



})
}





//informa3 - 030h - 6-630
if (theprogram === 555 ) {

Account.getPrograma('MbTfPGxc').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);




var a = moment({ hour:18, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);


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

    if (bloks>2){
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
}


})
}




//fermentados - 1h - 630-7:30
if (theprogram === 888 ) {

Account.getPrograma('03I06oNn').then(function(response) {



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





var a = moment({ hour:19, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (3600 - remaining)


    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(888, 0, adsPerBlock, seconds2);

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
        changeschedule(888, 1, adsPerBlock, seconds2);

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
        changeschedule(888, 2, lastadblock, seconds2);

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
        changeschedule(888, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(888, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(888, 5, lastadblock, seconds2);

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
        changeschedule(888, 6, lastadblock, seconds2);

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






//consultorio4 - 030h - 730-8
if (theprogram === 2222 ) {

Account.getPrograma('LyON9x3D').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);




var a = moment({ hour:20, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);


    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(2222, 0, adsPerBlock, seconds2);

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
        changeschedule(2222, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>2){
    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(2222, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
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









//encuentro4 - 1h - 8-9
if (theprogram === 7777 ) {

Account.getPrograma('pXJWiS8T').then(function(response) {


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
        changeschedule(7777, 0, adsPerBlock, seconds2);

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
        changeschedule(7777, 1, adsPerBlock, seconds2);

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
        changeschedule(7777, 2, lastadblock, seconds2);

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
        changeschedule(7777, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(7777, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(7777, 5, lastadblock, seconds2);

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
        changeschedule(7777, 6, lastadblock, seconds2);

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








//poptime4 - 1h - 9-10
if (theprogram === 9999 ) {

Account.getPrograma('RqUwolce').then(function(response) {


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




var a = moment({ hour:22, minute:00 });
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
        changeschedule(9999, 0, adsPerBlock, seconds2);

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
        changeschedule(9999, 1, adsPerBlock, seconds2);

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
        changeschedule(9999, 2, lastadblock, seconds2);

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
        changeschedule(9999, 3, lastadblock, seconds2);

        var salto = (time7 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>4){
    if  ((seconds > time7)  && (seconds < time9)) {
        console.log('seconds ' + seconds)
        if ( seconds < time8) {
        var seconds2 = (seconds - time7)
        }  else {
         var  seconds2 = t5
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(9999, 4, lastadblock, seconds2);

        var salto = (time9 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }
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
        changeschedule(9999, 5, lastadblock, seconds2);

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
        changeschedule(9999, 6, lastadblock, seconds2);

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





//plataforma4 - 030h - 10-1030
if (theprogram === 4444 ) {

Account.getPrograma('qQ5Fr1mn').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);





var a = moment({ hour:22, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (1800 - remaining);



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(4444, 0, adsPerBlock, seconds2);

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
        changeschedule(4444, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>2){
    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(4444, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
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







//informa4 - 030h - 10-11
if (theprogram === 5555 ) {

Account.getPrograma('MbTfPGxc').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);





var a = moment({ hour:23, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(5555, 0, adsPerBlock, seconds2);

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
        changeschedule(5555, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>2){
    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(5555, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
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







//remind4 - 030h - 11-1130
if (theprogram === 6666 ) {

Account.getPrograma('FPapq1k8').then(function(response) {


              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);






var a = moment({ hour:23, minute:30 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

var seconds = (1800 - remaining);



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
        changeschedule(6666, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>2){
    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(6666, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
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








//consultorio5 - 030h -1130-12
if (theprogram === 22222 ) {

Account.getPrograma('LyON9x3D').then(function(response) {



              t1 = response.data.time1;
              t2 = response.data.time2;
              t3 = response.data.time3;

              adsPerBlock = response.data.adsPerBlock;
              lastadblock = response.data.lasadblock;
              adssecondsblok = response.data.adssecondsblok;  
              bloks = response.data.bloks;  


     time1 = Number(t1) + Number(adssecondsblok);
     time2 = Number(time1) + Number(t2);
     time3 = Number(time2) + Number(adssecondsblok);
     time4 = Number(time3) + Number(t3);
     time5 = Number(time4) + Number(adssecondsblok);





var a = moment({ hour:24, minute:00 });
var b = moment();

var remaining = a.diff(b, 'seconds');
console.log('remaining ' + remaining)

 var seconds = (1800 - remaining);



    if  ((seconds > 0) && (seconds < time1)) {
        console.log('seconds ' + seconds)
        if ( seconds < t1) {
        var seconds2 = (seconds - 0)
        }  else {
         var  seconds2 = t1
        }
        console.log('seconds2 ' + seconds2)        
        changeschedule(22222, 0, adsPerBlock, seconds2);

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
        changeschedule(22222, 1, adsPerBlock, seconds2);

        var salto = (time3 - seconds)
        console.log('salto ' + salto)
        var timer2 = moment.duration(salto, "seconds").timer({  
        wait: moment.duration(1, "seconds"),
        loop: false,
        }, function() { 
            timer()
        });
    }

    if (bloks>2){
    if  ((seconds > time3)  && (seconds < time5)) {
        console.log('seconds ' + seconds)
        if ( seconds < time4) {
        var seconds2 = (seconds - time3)
        }  else {
         var  seconds2 = t3
        }
        console.log('seconds2 ' + seconds2)
        changeschedule(22222, 2, lastadblock, seconds2);

        var salto = (time5 - seconds)
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




var time233 = function() {
$scope.obj23_1 = { value1: false };
$scope.obj23_2 = { value2: false };
$scope.obj23_3 = { value3: false };
$scope.obj23_4 = { value4: false };

$scope.objS23_1 = { valueS1: false };
$scope.objS23_2 = { valueS2: false };
$scope.objS23_3 = { valueS3: false };
$scope.objS23_4 = { valueS4: false };

$scope.objtA = { valueA: true};



//block1
        if (moment().minutes(0).format('h:mm a') === "12:00 am") {
            $scope.program23_1 = 'Cierre';
      $scope.objS23_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 am") {
            $scope.program23_2 = 'Cierre';
            if((moment().format('h:mm a') >= "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };  
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 am") {
            $scope.program23_3 = 'Cierre';
      $scope.objS23_3 = { valueS3: true };
            if((moment().format('h:mm a') > "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 am") {
            $scope.program23_4 =  'Cierre';
      $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            }; 
        };



        //block1-2
        if (moment().minutes(0).format('h:mm a') === "1:00 am") {
            $scope.program23_1 = 'Cierre';
      $scope.objS23_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "1:00 am") & (moment().format('h:mm a') < "1:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 am") {
            $scope.program23_2 =  'Cierre' ;
            if((moment().format('h:mm a') >= "1:30 am") & (moment().format('h:mm a') < "2:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            } 

        };

        if (moment().minutes(60).format('h:mm a') === "2:00 am") {
            $scope.program23_3 = 'Cierre';
      $scope.objS23_3 = { valueS3: true };
            if((moment().format('h:mm a') > "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 am") {
            $scope.program23_4 = 'Cierre';
      $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            }; 
        }; 


        //block2
        if (moment().minutes(0).format('h:mm a') === "2:00 am") {
            $scope.program23_1 = 'Cierre';
      $scope.objS23_1 = { valueS1: true };
           if((moment().format('h:mm a') >= "2:00 am") & (moment().format('h:mm a') < "2:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 am") {
            $scope.program23_2 = 'Cierre';
            if((moment().format('h:mm a') >= "2:30 am") & (moment().format('h:mm a') < "3:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 am") {
            $scope.program23_3 = 'Cierre';
      $scope.objS23_3 = { valueS3: true };
            if((moment().format('h:mm a') > "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 am") {
            $scope.program23_4 =  'Cierre' ;
      $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        };

        //block2-2
        if (moment().minutes(0).format('h:mm a') === "3:00 am") {
            $scope.program23_1 = 'Cierre';
      $scope.objS23_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "3:00 am") & (moment().format('h:mm a') < "3:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "3:30 am") {
            $scope.program23_2 =  'Cierre' ;
            if((moment().format('h:mm a') >= "3:30 am") & (moment().format('h:mm a') < "4:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 am") {
            $scope.program23_3 = 'Cierre';
      $scope.objS23_3 = { valueS3: true };
            if((moment().format('h:mm a') > "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "4:30 am") {
            $scope.program23_4 = 'Cierre';
      $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            }; 
        }; 


        //block3
        if (moment().minutes(0).format('h:mm a') === "4:00 am") {
            $scope.program23_1 = 'Cierre';
      $scope.objS23_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "4:00 am") & (moment().format('h:mm a') < "4:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 am") {
            $scope.program23_2 = 'Cierre';
            if((moment().format('h:mm a') >= "4:30 am") & (moment().format('h:mm a') < "5:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "5:00 am") {
            $scope.program23_3 = 'Cierre';
      $scope.objS23_3 = { valueS3: true };
            if((moment().format('h:mm a') > "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 am") {
            $scope.program23_4 =  'Cierre' ;
      $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            };
        };


        //block3-2
        if (moment().minutes(0).format('h:mm a') === "5:00 am") {
            $scope.program23_1 = 'Cierre';
      $scope.objS23_1 = { valueS1: true };
            if((moment().format('h:mm a') >= "5:00 am") & (moment().format('h:mm a') < "5:30 am")) {
                $scope.program23 =  'Cierre' ;
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 am") {
            $scope.program23_2 =  'El Consultorio' ;
           $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "5:30 am") & (moment().format('h:mm a') < "6:00 am")) {
                $scope.program23 = 'El Consultorio';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-06:00 AM';
                runthetime(2);
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 am") {
            $scope.program23_3 = 'Encuentro';
            if((moment().format('h:mm a') > "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program23 =  'Informa TVX' ;
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '06:00-07:30 AM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 am") {
            $scope.program23_4 = 'Encuentro';
            $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program23 =  'Informa TVX' ;
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '06:00-07:30 AM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            } 
        }; 


        //block4
        if (moment().minutes(0).format('h:mm a') === "6:00 am") {
            $scope.program23_1 = 'Encuentro';
            if((moment().format('h:mm a') >= "6:00 am") & (moment().format('h:mm a') < "6:30 am")) {
                $scope.program23 =  'Encuentro' ;
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '06:00-07:30 AM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(7);                
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 am") {
            $scope.program23_2 = 'Encuentro';
            if((moment().format('h:mm a') >= "6:30 am") & (moment().format('h:mm a') < "7:00 am")) {
                $scope.program23 =  'Encuentro' ;
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '06:00-07:30 AM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(7);                
            } 
              $scope.obj23_2 = { value2: true };              
              $scope.objS23_2 = { valueS2: true };
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 am") {
            $scope.program23_3 = 'Pop Time';
            if((moment().format('h:mm a') > "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program23 =  'Pop Time' ;
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '06:00-07:30 AM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 am") {
            $scope.program23_4 =  'Pop Time';
            $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program23 =  'Class Icons' ;
                $scope.desc23 = 'Exitos Musicales';
                $scope.ptime23 = '07:30-08:00 AM'; 
            } 
        };


        //block4-2
        if (moment().minutes(0).format('h:mm a') === "7:00 am") {
            $scope.program23_1 = 'Pop Time';
            if((moment().format('h:mm a') >= "7:00 am") & (moment().format('h:mm a') < "7:30 am")) {
                $scope.program23 =  'Pop Time' ;
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '06:00-07:30 AM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(9);                
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 am") {
            $scope.program23_2 =  'Pop Time';
            if((moment().format('h:mm a') >= "7:30 am") & (moment().format('h:mm a') < "8:00 am")) {
                $scope.program23 =  'Pop Time' ;
                $scope.desc23 = 'Exitos Musicales';
                $scope.ptime23 = '07:30-08:00 AM'; 
                runthetime(9);                
            } 
            $scope.obj23_2 = { value2: true };              
            $scope.objS23_2 = { valueS2: true };
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 am") {
            $scope.program23_3 = 'Geopolitica';
            if((moment().format('h:mm a') > "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program23 =  'GNX' ;
                $scope.desc23 = 'Musica';
                $scope.ptime23 = '08:00-09:00 AM'; 
            };
            $scope.obj23_3 = { value3: true };              
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 am") {
            $scope.program23_4 = 'Plataforma';
            if((moment().format('h:mm a') > "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program23 =  'GNX' ;
                $scope.desc23 = 'Musica';
                $scope.ptime23 = '08:00-09:00 AM'; 
            } 
        }; 


        //block5
        if (moment().minutes(0).format('h:mm a') === "8:00 am") {
            $scope.program23_1 = 'Geopolitica';
            if((moment().format('h:mm a') >= "8:00 am") & (moment().format('h:mm a') < "8:30 am")) {
                $scope.program23 =  'Geopolitica' ;
                $scope.desc23 = 'Musica';
                $scope.ptime23 = '08:00-09:00 AM'; 
                runthetime(3);
            };
            $scope.obj23_1 = { value1: true };              
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 am") {
            $scope.program23_2 = 'Plataforma';
            $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "8:30 am") & (moment().format('h:mm a') < "9:00 am")) {
                $scope.program23 =  'Plataforma' ;
                $scope.desc23 = 'Musica';
                $scope.ptime23 = '08:00-09:00 AM'; 
                runthetime(4);                
            }; 
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 am") {
            $scope.program23_3 = 'Informa Tvx';
            if((moment().format('h:mm a') > "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program23 = 'Asia Shake';
                $scope.desc23 = 'La mejor muisca de Asia';
                $scope.ptime23 = '09:00-10:00 AM'; 
            } 
            $scope.obj23_3 = { value3: true };              
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 am") {
            $scope.program23_4 =  'Remind';
            if((moment().format('h:mm a') > "9:30 am") & (moment().format('h:mm a') < "10:00 am")) {
                $scope.program23 = 'Asia Shake';
                $scope.desc23 = 'La mejor muisca de Asia';
                $scope.ptime23 = '09:00-10:00 AM'; 
            }; 
        };


        //block5-2
        if (moment().minutes(0).format('h:mm a') === "9:00 am") {
            $scope.program23_1 = 'Informa Tvx';
            if((moment().format('h:mm a') >= "9:00 am") & (moment().format('h:mm a') < "9:30 am")) {
                $scope.program23 = 'Informa Tvx';
                $scope.desc23 = 'La mejor muisca de Asia';
                $scope.ptime23 = '09:00-10:00 AM'; 
                runthetime(5);                
            } 
            $scope.obj23_1 = { value1: true };              
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 am") {
            $scope.program23_2 =  'fermentados';
            if((moment().format('h:mm a') >= "9:30 am") & (moment().format('0h:mm a') < "10:00 am")) {
                $scope.program23 = 'Remind';
                $scope.desc23 = 'La mejor muisca de Asia';
                $scope.ptime23 = '09:00-10:00 AM';
                runthetime(8); 
            };
            $scope.obj23_2 = { value2: true };              
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 am") {
            $scope.program23_3 = 'El Consultorio'; 
            if((moment().format('h:mm a') > "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
               $scope.program23 = 'Los Deportologos'; 
                $scope.desc23 = 'Lo mejor en Deportes';
                $scope.ptime23 = '10:00-11:00 AM'; 
            } 
            $scope.obj23_3 = { value3: true };              
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 am") {
            $scope.program23_4 = 'Geopolitica';
            if((moment().format('h:mm a') > "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
               $scope.program23 = 'Los Deportologos'; 
                $scope.desc23 = 'Lo mejor en Deportes';
                $scope.ptime23 = '10:00-11:00 AM'; 
            } 
        }; 


        //block6
        if (moment().minutes(0).format('h:mm a') === "10:00 am") {
            $scope.program23_1 = 'fermentados';
            if((moment().format('h:mm a') >= "10:00 am") & (moment().format('h:mm a') < "10:30 am")) {
               $scope.program23 = 'El Consultorio'; 
                $scope.desc23 = 'Lo mejor en Deportes';
                $scope.ptime23 = '10:00-11:00 AM'; 
                runthetime(8);                
            } 
            $scope.obj23_1 = { value1: true };              
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 am") {
            $scope.program23_2 = 'consultorio'; 
            $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "10:30 am") & (moment().format('h:mm a') < "11:00 am")) {
               $scope.program23 = 'Geopolitica'; 
                $scope.desc23 = 'Lo mejor en Deportes';
                $scope.ptime23 = '10:00-11:00 AM';
                runthetime(22); 
            } 
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 am") {
            $scope.program23_3 = 'Encuentro';
            if((moment().format('h:mm a') > "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program23 = 'Videotopico';
                $scope.desc23 = 'Videos Musicales';
                $scope.ptime23 = '11:00-11:30 AM'; 
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 am") {
            $scope.program23_4 =  'Encuentro' ;
            if((moment().format('h:mm a') > "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program23 =  'Anime' ;
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '11:30-12:30 AM'; 
            } 
            $scope.objS23_4 = { valueS4: true };
        };



        //block 6-2

        if (moment().minutes(0).format('h:mm a') === "11:00 am") {
            $scope.program23_1 = 'Encuentro';
            if((moment().format('h:mm a') >= "11:00 am") & (moment().format('h:mm a') < "11:30 am")) {
                $scope.program23 = 'Encuentro';
                $scope.desc23 = 'Videos Musicales';
                $scope.ptime23 = '11:00-11:30 AM';
                runthetime(77); 
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 am") {
            $scope.program23_2 =  'Encuentro' ;
            if((moment().format('h:mm a') >= "11:30 am") & (moment().format('h:mm a') < "12:00 pm")) {
                $scope.program23 =  'Encuentro' ;
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '11:30-12:30 AM';
                runthetime(77); 
            }; 
              $scope.obj23_2 = { value2: true };              
              $scope.objS23_2 = { valueS2: true };
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 pm") {
            $scope.program23_3 = 'Pop Time';
            if((moment().format('h:mm a') > "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program23 =  'Anime' ;
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '11:30-12:30 AM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 pm") {
            $scope.program23_4 = 'Pop Time';
            if((moment().format('h:mm a') > "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program23 = 'Informa TVX';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '12:30-01:30 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            } 
            $scope.objS23_4 = { valueS4: true };
        }; 


        //block7
        if (moment().minutes(0).format('h:mm a') === "12:00 pm") {
            $scope.program23_1 = 'Pop Time';
            if((moment().format('h:mm a') >= "12:00 pm") & (moment().format('h:mm a') < "12:30 pm")) {
                $scope.program23 =  'Pop Time' ;
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '11:30-12:30 AM'; 
                runthetime(99);
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "12:30 pm") {
            $scope.program23_2 = 'Pop Time';
            if((moment().format('h:mm a') >= "12:30 pm") & (moment().format('h:mm a') < "1:00 pm")) {
                $scope.program23 = 'Pop Time';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '12:30-01:30 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(99);
            }
              $scope.obj23_2 = { value2: true };              
              $scope.objS23_2 = { valueS2: true };
        }; 

        if (moment().minutes(60).format('h:mm a') === "1:00 pm") {
            $scope.program23_3 = 'Plataforma';
            $scope.obj23_3 = { value3: true };
            if((moment().format('h:mm a') > "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program23 = 'Informa TVX';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '12:30-01:30 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            };
        }; 

        if (moment().minutes(90).format('h:mm a') === "1:30 pm") {
            $scope.program23_4 =  'Informa Tvx' ;
            if((moment().format('h:mm a') > "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program23 =  'En Vivo' ;
                $scope.desc23 = 'En Vivo';
                $scope.ptime23 = '01:30-02:00 PM'; 
            }         
          };

        //block7-2
        if (moment().minutes(0).format('h:mm a') === "1:00 pm") {
            $scope.program23_1 = 'Plataforma';
            $scope.obj23_1 = { value1: true };
            if((moment().format('h:mm a') >= "1:00 pm") & (moment().format('h:mm a') < "1:30 pm")) {
                $scope.program23 = 'Plataforma';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '12:30-01:30 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(44);
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "1:30 pm") {
            $scope.program23_2 =  'Informa Tvx';
            $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "1:30 pm") & (moment().format('h:mm a') < "2:00 pm")) {
                $scope.program23 =  'Informa Tvx' ;
                $scope.desc23 = 'En Vivo';
                $scope.ptime23 = '01:30-02:00 PM';
                runthetime(55); 
            };
        };

        if (moment().minutes(60).format('h:mm a') === "2:00 pm") {
            $scope.program23_3 = 'Remind';
            $scope.obj23_3 = { value3: true };
            if((moment().format('h:mm a') > "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program23 = 'Novoscopio';
                $scope.desc23 = 'Musica Nueva';
                $scope.ptime23 = '02:00-02:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "2:30 pm") {
            $scope.program23_4 = 'El Consultorio';
            if((moment().format('h:mm a') > "2:30 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program23 =  'Conceptos' ;
                $scope.desc23 = 'Videos Musicales';
                $scope.ptime23 = '02:30-03:30 PM'; 
            };
        }; 


        //block8
        if (moment().minutes(0).format('h:mm a') === "2:00 pm") {
            $scope.program23_1 = 'fermentados';
            $scope.obj23_1 = { value1: true };
             if((moment().format('h:mm a') >= "2:00 pm") & (moment().format('h:mm a') < "2:30 pm")) {
                $scope.program23 = 'Remind';
                $scope.desc23 = 'Musica Nueva';
                $scope.ptime23 = '02:00-02:30 PM'; 
                runthetime(88);
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "2:30 pm") {
            $scope.program23_2 = 'fermentados';
            if((moment().format('h:mm a') >= "2:30 pm") & (moment().format('h:mm a') < "3:00 pm")) {
                $scope.program23 =  'El Consultorio' ;
                $scope.desc23 = 'Videos Musicales';
                $scope.ptime23 = '02:30-03:30 PM'; 
                runthetime(88);
            } 
            $scope.obj23_2 = { value2: true };              
        }; 

        if (moment().minutes(60).format('h:mm a') === "3:00 pm") {
            $scope.program23_3 = 'Geopolitica';
            $scope.obj23_3 = { value3: true };
            if((moment().format('h:mm a') > "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program23 =  'Lasercat' ;
                $scope.desc23 = 'Videos Musicales';
                $scope.ptime23 = '02:30-03:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "3:30 pm") {
            $scope.program23_4 =  'Encuentro' ;
            if((moment().format('h:mm a') > "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program23 =  'Pop Market' ;
                $scope.desc23 = 'Musica Pop';
                $scope.ptime23 = '03:30-04:30 PM'; 
            } 
        };


        //block 8-2
        if (moment().minutes(0).format('h:mm a') === "3:00 pm") {
            $scope.program23_1 =  'consultorio';
            $scope.obj23_1 = { value1: true };
            if((moment().format('h:mm a') >= "3:00 pm") & (moment().format('h:mm a') < "3:30 pm")) {
                $scope.program23 =  'Geopolitica' ;
                $scope.desc23 = 'Videos Musicales';
                $scope.ptime23 = '02:30-03:30 PM';
                runthetime(222); 
            }
       };

        if (moment().minutes(30).format('h:mm a') === "3:30 pm") {
            $scope.program23_2 =  'Encuentro' ;
            if((moment().format('h:mm a') >= "3:30 pm") & (moment().format('h:mm a') < "4:00 pm")) {
                $scope.program23 =  'Encuentro' ;
                $scope.desc23 = 'Musica Pop';
                $scope.ptime23 = '03:30-04:30 PM';
                runthetime(777); 
            }
        };

        if (moment().minutes(60).format('h:mm a') === "4:00 pm") {
            $scope.program23_3 =  'Encuentro' ;
            $scope.obj23_3 = { value3: true };
            $scope.objS23_3 = { valueS3: true };
            if((moment().format('h:mm a') > "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program23 =  'Pop Market' ;
                $scope.desc23 = 'Musica Pop';
                $scope.ptime23 = '03:30-04:30 PM';
            } 
        };

        if (moment().minutes(90).format('h:mm a') === "4:30 pm") {
            $scope.program23_4 =  'Pop Time' ;
            if((moment().format('h:mm a') > "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program23 =  'Alterado' ;
                $scope.desc23 = 'Musica Alternativa';
                $scope.ptime23 = '04:30-05:30 PM'; 
            } 
        };



      //block9
        if (moment().minutes(0).format('h:mm a') === "4:00 pm") {
            $scope.program23_1 = 'Encuentro';
            $scope.obj23_1 = { value1: true };
            if((moment().format('h:mm a') >= "4:00 pm") & (moment().format('h:mm a') < "4:30 pm")) {
                $scope.program23 =  'Encuentro' ;
                $scope.desc23 = 'Musica Pop';
                $scope.ptime23 = '03:30-04:30 PM'; 
                runthetime(777); 
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "4:30 pm") {
            $scope.program23_2 = 'Pop Time';
            if((moment().format('h:mm a') >= "4:30 pm") & (moment().format('h:mm a') < "5:00 pm")) {
                $scope.program23 =  'Pop Time' ;
                $scope.desc23 = 'Musica Alternativa';
                $scope.ptime23 = '04:30-05:30 PM';
                runthetime(999); 
            };
        }; 


        if (moment().minutes(60).format('h:mm a') === "5:00 pm") {
            $scope.program23_3 = 'Pop Time';
            $scope.obj23_3 = { value3: true };
            $scope.objS23_3 = { valueS3: true };
            if((moment().format('h:mm a') > "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program23 =  'Alterado' ;
                $scope.desc23 = 'Musica Alternativa';
                $scope.ptime23 = '04:30-05:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "5:30 pm") {
            $scope.program23_4 =  'Plataforma';
            if((moment().format('h:mm a') > "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program23 =  'Anime';
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '05:30-07:00 PM'; 
            } 
        };




        //block9-2 
        if (moment().minutes(0).format('h:mm a') === "5:00 pm") {
            $scope.program23_1 = 'Pop Time';
            $scope.obj23_1 = { value1: true };
            if((moment().format('h:mm a') >= "5:00 pm") & (moment().format('h:mm a') < "5:30 pm")) {
                $scope.program23 =  'Pop Time' ;
                $scope.desc23 = 'Musica Alternativa';
                $scope.ptime23 = '04:30-05:30 PM';
                runthetime(999); 
            };
        }; 

        if (moment().minutes(30).format('h:mm a') === "5:30 pm") {
            $scope.program23_2 =  'Plataforma';
            if((moment().format('h:mm a') >= "5:30 pm") & (moment().format('h:mm a') < "6:00 pm")) {
                $scope.program23 =  'Plataforma';
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '05:30-07:00 PM';
                runthetime(444); 
            };
            $scope.obj23_2 = { value2: true };              
        };

        if (moment().minutes(60).format('h:mm a') === "6:00 pm") {
            $scope.program23_3 = 'Informa Tvx';
            if((moment().format('h:mm a') > "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program23 =  'Anime';
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '05:30-07:00 PM'; 
            };
            $scope.obj23_3 = { value3: true };              
        }; 

        if (moment().minutes(90).format('h:mm a') === "6:30 pm") {
            $scope.program23_4 = 'Remind'; 
            if((moment().format('h:mm a') > "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program23 =  'Anime';
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '05:30-07:00 PM'; 
            } 
        };


        //block10
        if (moment().minutes(0).format('h:mm a') === "6:00 pm") {
            $scope.program23_1 = 'Informa Tvx';
            if((moment().format('h:mm a') >= "6:00 pm") & (moment().format('h:mm a') < "6:30 pm")) {
                $scope.program23 =  'Informa Tvx';
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '05:30-07:00 PM';
                 runthetime(555);
            };
            $scope.obj23_1 = { value1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "6:30 pm") {
            $scope.program23_2 = 'fermentados';          
            $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "6:30 pm") & (moment().format('h:mm a') < "7:00 pm")) {
                $scope.program23 =  'Remind';
                $scope.desc23 = 'Entretenimiento Asiatico';
                $scope.ptime23 = '05:30-07:00 PM';
                runthetime(888); 
            };  
        }; 

        if (moment().minutes(60).format('h:mm a') === "7:00 pm") {
            $scope.program23_3 = 'El Consultorio';   
            if((moment().format('h:mm a') > "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program23 = 'Informa TVX';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '07:00-08:00 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            };
            $scope.obj23_3 = { value3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "7:30 pm") {
            $scope.program23_4 =  'Geopolitica';
            if((moment().format('h:mm a') > "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program23 = 'Informa TVX';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '07:00-08:00 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            };
        };


        //block10-2
        if (moment().minutes(0).format('h:mm a') === "7:00 pm") {
            $scope.program23_1 = 'fermentados';
            if((moment().format('h:mm a') >= "7:00 pm") & (moment().format('h:mm a') < "7:30 pm")) {
                $scope.program23 = 'El Consultorio';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '07:00-08:00 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(888);
            }
            $scope.obj23_1 = { value1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "7:30 pm") {
            $scope.program23_2 =  'consultorio';
            $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "7:30 pm") & (moment().format('h:mm a') < "8:00 pm")) {
                $scope.program23 = 'Geopolitica';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '07:00-08:00 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(2222);
            }
        };

        if (moment().minutes(60).format('h:mm a') === "8:00 pm") {
            $scope.program23_3 = 'Encuentro';
            if((moment().format('h:mm a') > "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program23 = 'Los Deportologos';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM';            
            }
        }; 

        if (moment().minutes(90).format('h:mm a') === "8:30 pm") {
            $scope.program23_4 = 'Encuentro';
            $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program23 = 'Los Deportologos';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM';            
            }
        }; 


        //block11
        if (moment().minutes(0).format('h:mm a') === "8:00 pm") {
            $scope.program23_1 = 'Encuentro';
            if((moment().format('h:mm a') >= "8:00 pm") & (moment().format('h:mm a') < "8:30 pm")) {
                $scope.program23 = 'Encuentro';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM'; 
                runthetime(7777);           
            }; 
        }; 

        if (moment().minutes(30).format('h:mm a') === "8:30 pm") {
            $scope.program23_2 = 'Encuentro';
          if((moment().format('h:mm a') >= "8:30 pm") & (moment().format('h:mm a') < "9:00 pm")) {
                $scope.program23 = 'Encuentro';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM';
                runthetime(7777);            
            }; 
            $scope.obj23_2 = { value2: true };
            $scope.objS23_2 = { valueS2: true };
        }; 

        if (moment().minutes(60).format('h:mm a') === "9:00 pm") {
            $scope.program23_3 = 'Pop Time';
            if((moment().format('h:mm a') > "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program23 = 'Los Deportologos';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM';            
            }; 
        }; 

        if (moment().minutes(90).format('h:mm a') === "9:30 pm") {
            $scope.program23_4 =  'Pop Time';
            $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('h:mm a') < "10:00 pm")) {
                $scope.program23 = 'Los Deportologos';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM';            
            }; 
        };


        //block11-2
        if (moment().minutes(0).format('h:mm a') === "9:00 pm") {
            $scope.program23_1 = 'Pop Time';
            if((moment().format('h:mm a') >= "9:00 pm") & (moment().format('h:mm a') < "9:30 pm")) {
                $scope.program23 = 'Pop Time';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM';
                runthetime(9999);            
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "9:30 pm") {
            $scope.program23_2 =  'Pop Time';
            $scope.obj23_2 = { value2: true };
            $scope.objS23_2 = { valueS2: true };
            if((moment().format('h:mm a') > "9:30 pm") & (moment().format('hh:mm a') < "10:00 pm")) {
                $scope.program23 = 'Pop Time';
                $scope.desc23 = 'Lo mejor en deportes';
                $scope.ptime23 = '08:00-10:00 PM';
                runthetime(9999);            
            };
        };

        if (moment().minutes(60).format('h:mm a') === "10:00 pm") {
            $scope.program23_3 = 'Plataforma';
            $scope.obj23_3 = { value3: true };
            if((moment().format('h:mm a') > "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program23 = 'Zona Franca';
                $scope.desc23 = 'Entrevista de interes';
                $scope.ptime23 = '10:00-10:30 PM'; 
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "10:30 pm") {
            $scope.program23_4 = 'Informa Tvx';
          if((moment().format('h:mm a') > "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program23 = 'Encuentro Economico';
                $scope.desc23 = 'Entrevista de interes';
                $scope.ptime23 = '10:30-11:00 PM'; 
            };
        }; 




        //block12
        if (moment().minutes(0).format('h:mm a') === "10:00 pm") {
            $scope.program23_1 = 'Plataforma';
            $scope.obj23_1 = { value1: true };
            if((moment().format('h:mm a') >= "10:00 pm") & (moment().format('h:mm a') < "10:30 pm")) {
                $scope.program23 = 'Plataforma';
                $scope.desc23 = 'Entrevista de interes';
                $scope.ptime23 = '10:00-10:30 PM'; 
                runthetime(4444);
            } 
        }; 

        if (moment().minutes(30).format('h:mm a') === "10:30 pm") {
            $scope.program23_2 = 'Informa Tvx';
            $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "10:30 pm") & (moment().format('h:mm a') < "11:00 pm")) {
                $scope.program23 = 'Informa Tvx';
                $scope.desc23 = 'Entrevista de interes';
                $scope.ptime23 = '10:30-11:00 PM'; 
                runthetime(5555);
            };
        }; 

        if (moment().minutes(60).format('h:mm a') === "11:00 pm") {
            $scope.program23_3 = 'Remind';
            if((moment().format('h:mm a') > "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program23 = 'Informa TVX';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '11:00-12:00 PM'; 
            } 
            $scope.obj23_3 = { value3: true };
        }; 

        if (moment().minutes(90).format('h:mm a') === "11:30 pm") {
            $scope.program23_4 =  'El Consultorio';
            if((moment().format('h:mm a') > "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program23 = 'Informa TVX';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '11:00-12:00 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
            };
        };


        //block12-2

        if (moment().minutes(0).format('h:mm a') === "11:00 pm") {
            $scope.program23_1 = 'Remind';
            if((moment().format('h:mm a') >= "11:00 pm") & (moment().format('h:mm a') < "11:30 pm")) {
                $scope.program23 = 'Remind';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '11:00-12:00 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(6666);
            } 
            $scope.obj23_1 = { value1: true };
        }; 

        if (moment().minutes(30).format('h:mm a') === "11:30 pm") {
            $scope.program23_2 =  'El Consultorio';
            $scope.obj23_2 = { value2: true };
            if((moment().format('h:mm a') >= "11:30 pm") & (moment().format('h:mm a') < "12:00 am")) {
                $scope.program23 = 'El Consultorio';
                $scope.desc23 = 'Noticias de El Salvador';
                $scope.ptime23 = '11:00-12:00 PM'; 
                $scope.program22 =  'expresa' ;
                $scope.objtA = { valueA : false };
                runthetime(22222);
            } 
        };

        if (moment().minutes(60).format('h:mm a') === "12:00 am") {
            $scope.program23_3 = 'Cierre';
            if((moment().format('h:mm a') > "12:00 am") & (moment().format('h:mm a') < "12:30 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-05:30 AM'            
            } 
        }; 

        if (moment().minutes(90).format('h:mm a') === "12:30 am") {
            $scope.desc23 = 'Cierre';
            $scope.objS23_4 = { valueS4: true };
            if((moment().format('h:mm a') > "12:30 am") & (moment().format('h:mm a') < "1:00 am")) {
                $scope.program23 = 'Cierre';
                $scope.desc23 = 'Sin transmision';
                $scope.ptime23 = '12:00-05:30 AM'            
            };
        }; 




};

time233();









 timer =  function() { 
            console.log('timer');
      $scope.$apply(function () {
      time233();
    });
    }

   

























   

 }]);

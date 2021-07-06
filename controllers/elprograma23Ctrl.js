var theApp46 = angular.module('theApp46', []);
theApp46.controller('elprograma23Ctrl', function($http, $stateParams, $scope, $auth, toastr, Account) {

var theurl = $stateParams.id;
$scope.theurl2 = $stateParams.id;



var thestring;
var playerInstance = jwplayer("myElement6")



var vidurl;
var progtime;
var json1;
var playfun = function () {
  Account.getVideoLink(theurl).then(function(response) {
    $scope.thisds = response.data;
    progtime = response.data[0].progtime;
    console.log(progtime);
    //console.log(response.data)
    $scope.thecanal = response.data[0].channel
    json1 = response.data[0].json1;
    json2 = response.data[0].json2;
    json3 = response.data[0].json3;
    json4 = response.data[0].json4;
    json5 = response.data[0].json5;
    json6 = response.data[0].json6;
    json7 = response.data[0].json7;
    json8 = response.data[0].json8;
    json9 = response.data[0].json9;
    json10 = response.data[0].json10;
    json11 = response.data[0].json11;
    json12 = response.data[0].json12;
    json13 = response.data[0].json13;
    json14 = response.data[0].json14;

    $scope.thename = response.data[0].name;
   var thelink =  response.data[0].theurl
//http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/graficovid.mp4
     thestring = "http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/" + thelink;   
     //console.log(thestring);

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
  // Account.readlocal().then(function(response) {
      $http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + json1, {
    skipAuthorization: true
      }).then(function(response) {
    $scope.thenumbs2 = response.data;
    //console.log(response.data)
    var names2 = [];
    for (var i = 0; i < $scope.thenumbs2.length; i++) {
       names2[i] = $scope.thenumbs2[i].offset;
    }
    var uniqueNames2 = [];
    $.each(names2, function(i, el){
      if($.inArray(el, uniqueNames2) === -1) uniqueNames2.push(el);
    });


  $http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + json2, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs3 = response.data;
    var names3 = [];
    for (var i = 0; i < $scope.thenumbs3.length; i++) {
       names3[i] = 600 + $scope.thenumbs3[i].offset;
    }
   // console.log(names3);
    var uniqueNames3 = [];
    $.each(names3, function(i, el){
      if($.inArray(el, uniqueNames3) === -1) uniqueNames3.push(el);
    });



$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + json3, {
  skipAuthorization: true
  }).then(function(response) {
   // console.log(response.data)
  $scope.thenumbs4 = response.data;
    var names4 = [];
    for (var i = 0; i < $scope.thenumbs4.length; i++) {
       names4[i] = 1200 + $scope.thenumbs4[i].offset;
    }
    var uniqueNames4 = [];
    $.each(names4, function(i, el){
      if($.inArray(el, uniqueNames4) === -1) uniqueNames4.push(el);
    });
    //console.log(uniqueNames4)

var  myjson4 = json4;
var  myjson5 = json5;
var  myjson6 = json6;
var  myjson7 = json7;
var  myjson8 = json8;
var  myjson9 = json9;
var  myjson10 = json10;
var  myjson11 = json11;
var  myjson12 = json12;
var  myjson13 = json13;
var  myjson14 = json14;


if (progtime < 1801) {
  myjson4 = json3
}  
if (progtime < 1801) {
  myjson5 = json3
}
if (progtime < 1801) {
  myjson6 = json3
}
if (progtime <= 3600) {
  myjson7 = json3
}
if (progtime <= 36000) {
  myjson8 = json3
}
if (progtime <= 36000) {
  myjson9 = json3
}
if (progtime <= 36000) {
  myjson10 = json3
}
if (progtime <= 36000) {
  myjson11 = json3
}
if (progtime <= 36000) {
  myjson12 = json3
}
if (progtime <= 36000) {
  myjson13 = json3
}

if (progtime <= 36000) {
  myjson14 = json3
}

//console.log('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson4)
$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson4, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs5 = response.data;
    var names5 = [];
    for (var i = 0; i < $scope.thenumbs5.length; i++) {
       names5[i] = 1800 + $scope.thenumbs5[i].offset;
    }
    var uniqueNames5 = [];
    $.each(names5, function(i, el){
      if($.inArray(el, uniqueNames5) === -1) uniqueNames5.push(el);
    });

$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson5, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs6 = response.data;
    var names6 = [];
    for (var i = 0; i < $scope.thenumbs6.length; i++) {
       names6[i] = 2400 + $scope.thenumbs6[i].offset;
    }
    var uniqueNames6 = [];
    $.each(names6, function(i, el){
      if($.inArray(el, uniqueNames6) === -1) uniqueNames6.push(el);
    });


$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson6, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs7 = response.data;
    var names7 = [];
    for (var i = 0; i < $scope.thenumbs7.length; i++) {
       names7[i] = 3000 + $scope.thenumbs7[i].offset;
    }
    var uniqueNames7 = [];
    $.each(names7, function(i, el){
      if($.inArray(el, uniqueNames7) === -1) uniqueNames7.push(el);
    });

$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson7, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs8 = response.data;
    var names8 = [];
    for (var i = 0; i < $scope.thenumbs8.length; i++) {
       names8[i] = 3600 + $scope.thenumbs8[i].offset;
    }
    var uniqueNames8 = [];
    $.each(names8, function(i, el){
      if($.inArray(el, uniqueNames8) === -1) uniqueNames8.push(el);
    });


$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson8, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs9 = response.data;
    var names9 = [];
    for (var i = 0; i < $scope.thenumbs9.length; i++) {
       names9[i] = 4200 + $scope.thenumbs9[i].offset;
    }
    var uniqueNames9 = [];
    $.each(names9, function(i, el){
      if($.inArray(el, uniqueNames9) === -1) uniqueNames9.push(el);
    });


$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson9, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs10 = response.data;
    var names10 = [];
    for (var i = 0; i < $scope.thenumbs10.length; i++) {
       names10[i] = 4800 + $scope.thenumbs10[i].offset;
    }
    var uniqueNames10 = [];
    $.each(names10, function(i, el){
      if($.inArray(el, uniqueNames10) === -1) uniqueNames10.push(el);
    });        


$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson10, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs11 = response.data;
    var names11 = [];
    for (var i = 0; i < $scope.thenumbs11.length; i++) {
       names11[i] = 5400 + $scope.thenumbs11[i].offset;
    }
    var uniqueNames11 = [];
    $.each(names11, function(i, el){
      if($.inArray(el, uniqueNames11) === -1) uniqueNames11.push(el);
    });   


$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson11, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs12 = response.data;
    var names12 = [];
    for (var i = 0; i < $scope.thenumbs12.length; i++) {
       names12[i] = 6000 + $scope.thenumbs12[i].offset;
    }
    var uniqueNames12 = [];
    $.each(names12, function(i, el){
      if($.inArray(el, uniqueNames12) === -1) uniqueNames12.push(el);
    });

$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson12, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs13 = response.data;
    var names13 = [];
    for (var i = 0; i < $scope.thenumbs13.length; i++) {
       names13[i] = 6600 + $scope.thenumbs13[i].offset;
    }

    var uniqueNames13 = [];
    $.each(names13, function(i, el){
      if($.inArray(el, uniqueNames13) === -1) uniqueNames13.push(el);
    });   

$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson13, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs14 = response.data;
    var names14 = [];
    for (var i = 0; i < $scope.thenumbs14.length; i++) {
       names14[i] = 7200 + $scope.thenumbs14[i].offset;
    }

    var uniqueNames14 = [];
    $.each(names14, function(i, el){
      if($.inArray(el, uniqueNames14) === -1) uniqueNames14.push(el);
    });   

$http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/' + myjson14, {
  skipAuthorization: true
  }).then(function(response) {
  $scope.thenumbs15 = response.data;
    var names15 = [];
    for (var i = 0; i < $scope.thenumbs15.length; i++) {
       names15[i] = 7800 + $scope.thenumbs15[i].offset;
    }
    var uniqueNames15 = [];
    $.each(names15, function(i, el){
      if($.inArray(el, uniqueNames15) === -1) uniqueNames15.push(el);
    });








  var theuniques = [];


  for (var i = 0; i < uniqueNames2.length; i++) {
    theuniques.push(uniqueNames2[i])
  }
  for (var i = 0; i < uniqueNames3.length; i++) {
    theuniques.push(uniqueNames3[i])
  }

  for (var i = 0; i < uniqueNames4.length; i++) {
    theuniques.push(uniqueNames4[i])
  }
//30
if (progtime >= 1801) {
  for (var i = 0; i < uniqueNames5.length; i++) {
    theuniques.push(uniqueNames5[i])
  }
}

if (progtime >= 1801) {
   for (var i = 0; i < uniqueNames6.length; i++) {
    theuniques.push(uniqueNames6[i])
  }

}

if (progtime >= 1801) {
   for (var i = 0; i < uniqueNames7.length; i++) {
    theuniques.push(uniqueNames7[i])
  }  
}  
//60
if (progtime >= 3601) {
   for (var i = 0; i < uniqueNames8.length; i++) {
    theuniques.push(uniqueNames8[i])
  } 
}   
if (progtime >= 3601) {
   for (var i = 0; i < uniqueNames9.length; i++) {
    theuniques.push(uniqueNames9[i])
  } 

}

if (progtime >= 3601) {
   for (var i = 0; i < uniqueNames10.length; i++) {
    theuniques.push(uniqueNames10[i])
  }  
}

//90
if (progtime >= 5401) {
   for (var i = 0; i < uniqueNames11.length; i++) {
    theuniques.push(uniqueNames11[i])
  }  
}


if (progtime >= 5401) {
   for (var i = 0; i < uniqueNames12.length; i++) {
    theuniques.push(uniqueNames12[i])
  }  
}
 

if (progtime >= 5401) {
   for (var i = 0; i < uniqueNames13.length; i++) {
    theuniques.push(uniqueNames13[i])
  }  
}
//120
if (progtime >= 5401) {
   for (var i = 0; i < uniqueNames13.length; i++) {
    theuniques.push(uniqueNames13[i])
  }  
}

if (progtime >= 5401) {
   for (var i = 0; i < uniqueNames14.length; i++) {
    theuniques.push(uniqueNames14[i])
  }  
}
 
if (progtime >= 5401) {
   for (var i = 0; i < uniqueNames15.length; i++) {
    theuniques.push(uniqueNames15[i])
  }  
}












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
        
        }
        }}
        }}}}}}}}}}}}}}
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
}


console.log('myuniques4 ' + $scope.myuniques4)
     })

      })

      })
      })
      })
      })
      })
      })
      })
      })
      })

     })    

    })    

     })    

  })

}
playfun();


var index; 



$scope.show1 = function(){
    playerInstance.seek($scope.myuniques3[0]);
    jwplayer().on('seeked', function(){
      index = 0;
      playerInstance.pause();
      //console.log(index0)
    })
}

$scope.show2 = function(){
    playerInstance.seek($scope.myuniques3[1]);
    jwplayer().on('seeked', function(){
      index = 1;      
      playerInstance.pause();
    })      
}

$scope.show3 = function(){
    playerInstance.seek($scope.myuniques3[2]);
    jwplayer().on('seeked', function(){
      index = 2;      
      playerInstance.pause();
    })      
}

$scope.show4 = function(){
    playerInstance.seek($scope.myuniques3[3]);
    jwplayer().on('seeked', function(){
      index = 3;      
      playerInstance.pause();
    })      
}


$scope.show5 = function(){
    playerInstance.seek($scope.myuniques3[4]);
    jwplayer().on('seeked', function(){
      index = 4;      
      playerInstance.pause();
    })      
}

$scope.show6 = function(){
    playerInstance.seek($scope.myuniques3[5]);
    jwplayer().on('seeked', function(){
      index = 5;      
      playerInstance.pause();
    })      
}

$scope.show7 = function(){
    playerInstance.seek($scope.myuniques3[6]);
    jwplayer().on('seeked', function(){
      index = 6;      
      playerInstance.pause();
    })      
}

$scope.show8 = function(){
    playerInstance.seek($scope.myuniques3[7]);
    jwplayer().on('seeked', function(){
      index = 7;      
      playerInstance.pause();
    })      
}

$scope.show9 = function(){
    playerInstance.seek($scope.myuniques3[8]);
    jwplayer().on('seeked', function(){
      index = 8;      
      playerInstance.pause();
    })      
}

$scope.show10 = function(){
    playerInstance.seek($scope.myuniques3[9]);
    jwplayer().on('seeked', function(){
      index = 9;      
      playerInstance.pause();
    })      
}

$scope.show11 = function(){
    playerInstance.seek($scope.myuniques3[10]);
    jwplayer().on('seeked', function(){
      index = 10;      
      playerInstance.pause();
    })      
}

$scope.show12 = function(){
    playerInstance.seek($scope.myuniques3[11]);
    jwplayer().on('seeked', function(){
      index = 11;      
      playerInstance.pause();
    })      
}

$scope.show13 = function(){
    playerInstance.seek($scope.myuniques3[12]);
    jwplayer().on('seeked', function(){
      index = 12;      
      playerInstance.pause();
    })      
}

$scope.show14 = function(){
    playerInstance.seek($scope.myuniques3[13]);
    jwplayer().on('seeked', function(){
      index = 13;      
      playerInstance.pause();
    })      
}

$scope.show15 = function(){
    playerInstance.seek($scope.myuniques3[14]);
    jwplayer().on('seeked', function(){
      index = 14;
      playerInstance.pause();
    })      
}

$scope.show16 = function(){
    playerInstance.seek($scope.myuniques3[15]);
    jwplayer().on('seeked', function(){
      index = 15;      
      playerInstance.pause();
    })      
}

$scope.show17 = function(){
    playerInstance.seek($scope.myuniques3[16]);
    jwplayer().on('seeked', function(){
      index = 16;      
      playerInstance.pause();
    })      
}

$scope.show18 = function(){
    playerInstance.seek($scope.myuniques3[17]);
    jwplayer().on('seeked', function(){
      index = 17;      
      playerInstance.pause();
    })      
}

$scope.show19 = function(){
    playerInstance.seek($scope.myuniques3[18]);
    jwplayer().on('seeked', function(){
      index = 18;      
      playerInstance.pause();
    })      
}

$scope.show20 = function(){
    playerInstance.seek($scope.myuniques3[19]);
    jwplayer().on('seeked', function(){
      index = 19;      
      playerInstance.pause();
    })      
}

$scope.show21 = function(){
    playerInstance.seek($scope.myuniques3[20]);
    jwplayer().on('seeked', function(){
      index = 20;      
      playerInstance.pause();
    })      
}

$scope.show22 = function(){
    playerInstance.seek($scope.myuniques3[21]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}

$scope.show23 = function(){
    playerInstance.seek($scope.myuniques3[22]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}

$scope.show24 = function(){
    playerInstance.seek($scope.myuniques3[23]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}

$scope.show25 = function(){
    playerInstance.seek($scope.myuniques3[24]);
    jwplayer().on('seeked', function(){
      playerInstance.pause();
    })      
}

$scope.getpos2 = function() {

  $scope.myuniques4[index] = $scope.myuniques4[index + 1]
  $scope.myuniques3[index] = $scope.myuniques3[index + 1]

  $scope.myuniques4[index + 1 ] = $scope.myuniques4[index + 2]
  $scope.myuniques3[index + 1 ] = $scope.myuniques3[index + 2]

  $scope.myuniques4[index + 2 ] = $scope.myuniques4[index + 3]
  $scope.myuniques3[index + 2 ] = $scope.myuniques3[index + 3]

  $scope.myuniques4[index + 3 ] = $scope.myuniques4[index + 4]
  $scope.myuniques3[index + 3 ] = $scope.myuniques3[index + 4]

  $scope.myuniques4[index + 4 ] = $scope.myuniques4[index + 5]
  $scope.myuniques3[index + 4 ] = $scope.myuniques3[index + 5]

  $scope.myuniques4[index + 5 ] = $scope.myuniques4[index + 6]
  $scope.myuniques3[index + 5 ] = $scope.myuniques3[index + 6]

  $scope.myuniques4[index + 6 ] = $scope.myuniques4[index + 7]
  $scope.myuniques3[index + 6 ] = $scope.myuniques3[index + 7]

  $scope.myuniques4[index + 7 ] = $scope.myuniques4[index + 8]
  $scope.myuniques3[index + 7 ] = $scope.myuniques3[index + 8]

  $scope.myuniques4[index + 8 ] = $scope.myuniques4[index + 9]
  $scope.myuniques3[index + 8 ] = $scope.myuniques3[index + 9]

  $scope.myuniques4[index + 9 ] = $scope.myuniques4[index + 10]
  $scope.myuniques3[index + 9 ] = $scope.myuniques3[index + 10]

  $scope.myuniques4[index + 10 ] = $scope.myuniques4[index + 11]
  $scope.myuniques3[index + 10 ] = $scope.myuniques3[index + 11]  

  $scope.myuniques4[index + 11 ] = $scope.myuniques4[index + 12]
  $scope.myuniques3[index + 11 ] = $scope.myuniques3[index + 12]

  $scope.myuniques4[index + 12 ] = $scope.myuniques4[index + 13]
  $scope.myuniques3[index + 12 ] = $scope.myuniques3[index + 13]

  $scope.myuniques4[index + 13 ] = $scope.myuniques4[index + 14]
  $scope.myuniques3[index + 13 ] = $scope.myuniques3[index + 14]

  $scope.myuniques4[index + 14 ] = $scope.myuniques4[index + 15]
  $scope.myuniques3[index + 14 ] = $scope.myuniques3[index + 15]    

  $scope.myuniques4[index + 15 ] = $scope.myuniques4[index + 16]
  $scope.myuniques3[index + 15 ] = $scope.myuniques3[index + 16]  

  $scope.myuniques4[index + 16 ] = $scope.myuniques4[index + 17]
  $scope.myuniques3[index + 16 ] = $scope.myuniques3[index + 17]

  $scope.myuniques4[index + 17 ] = $scope.myuniques4[index + 18]
  $scope.myuniques3[index + 17 ] = $scope.myuniques3[index + 18]    
}


$scope.getpos = function() {
  console.log('gopos')

  $scope.myuniques3[index + 18] = $scope.myuniques3[index + 17]
  $scope.myuniques4[index + 18] = $scope.myuniques4[index + 17]

  $scope.myuniques3[index + 17] = $scope.myuniques3[index + 16]
  $scope.myuniques4[index + 17] = $scope.myuniques4[index + 16]

  $scope.myuniques3[index + 16] = $scope.myuniques3[index + 15]
  $scope.myuniques4[index + 16] = $scope.myuniques4[index + 15]

  $scope.myuniques3[index + 15] = $scope.myuniques3[index + 14]
  $scope.myuniques4[index + 15] = $scope.myuniques4[index + 14]

  $scope.myuniques3[index + 14] = $scope.myuniques3[index + 13]
  $scope.myuniques4[index + 14] = $scope.myuniques4[index + 13]  

  $scope.myuniques3[index + 13] = $scope.myuniques3[index + 12]
  $scope.myuniques4[index + 13] = $scope.myuniques4[index + 12]

  $scope.myuniques3[index + 12] = $scope.myuniques3[index + 11]
  $scope.myuniques4[index + 12] = $scope.myuniques4[index + 11]

  $scope.myuniques3[index + 11] = $scope.myuniques3[index + 10]
  $scope.myuniques4[index + 11] = $scope.myuniques4[index + 10]

  $scope.myuniques3[index + 10] = $scope.myuniques3[index + 9]
  $scope.myuniques4[index + 10] = $scope.myuniques4[index + 9]

  $scope.myuniques3[index + 9] = $scope.myuniques3[index + 8]
  $scope.myuniques4[index + 9] = $scope.myuniques4[index + 8]

  $scope.myuniques3[index + 8] = $scope.myuniques3[index + 7]
  $scope.myuniques4[index + 8] = $scope.myuniques4[index + 7]

  $scope.myuniques3[index + 7] = $scope.myuniques3[index + 6]  
  $scope.myuniques4[index + 7] = $scope.myuniques4[index + 6]  

  $scope.myuniques3[index + 6] = $scope.myuniques3[index + 5]    
  $scope.myuniques4[index + 6] = $scope.myuniques4[index + 5]    

  $scope.myuniques3[index + 5] = $scope.myuniques3[index + 4]
  $scope.myuniques4[index + 5] = $scope.myuniques4[index + 4]

  $scope.myuniques3[index + 4] = $scope.myuniques3[index + 3]
  $scope.myuniques4[index + 4] = $scope.myuniques4[index + 3]

  $scope.myuniques3[index + 3] = $scope.myuniques3[index + 2]
  $scope.myuniques4[index + 3] = $scope.myuniques4[index + 2]

  $scope.myuniques3[index + 2] = $scope.myuniques3[index + 1]
  $scope.myuniques4[index + 2] = $scope.myuniques4[index + 1]

  $scope.myuniques3[index + 1] = $scope.myuniques3[index]
  $scope.myuniques4[index + 1] = $scope.myuniques4[index]


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











  $scope.savetime = function(){
    var myuni = [];
    myuni = $scope.myuniques4;
    console.log($scope.myuniques4)
    console.log($scope.myuniques4.length)

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
    // var blok2 = ($scope.myuniques3[3] - $scope.myuniques3[2])
    var blok2 =  moment($scope.myuniques4[3], "hh:mm:ss").diff(moment($scope.myuniques4[2], "hh:mm:ss"), 'seconds');
    // var blok3 = ($scope.myuniques3[5] - $scope.myuniques3[4])
    var blok3 =  moment($scope.myuniques4[5], "hh:mm:ss").diff(moment($scope.myuniques4[4], "hh:mm:ss"), 'seconds');
    // var blok4 = ($scope.myuniques3[7] - $scope.myuniques3[6])
    var blok4 =  moment($scope.myuniques4[7], "hh:mm:ss").diff(moment($scope.myuniques4[6], "hh:mm:ss"), 'seconds');    
    // var blok5 = ($scope.myuniques3[9] - $scope.myuniques3[8])
    var blok5 =  moment($scope.myuniques4[9], "hh:mm:ss").diff(moment($scope.myuniques4[8], "hh:mm:ss"), 'seconds');    
    // var blok6 = ($scope.myuniques3[11] - $scope.myuniques3[10])
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

//Account.updatePrograma(theurl,bloks,blok1,blok2,blok3,blok4,blok5,blok6,blok7,blok8,blok9,blok10,secondsAdsBlok,adsPerBlock2,lasadblock);

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





    // Account.cutVideos(theurl, thestring, $scope.myuniques4).then(function(response) {
    //   console.log(response)
    // })
  }

  });

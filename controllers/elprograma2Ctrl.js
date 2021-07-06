var theApp11 = angular.module('theApp11',  ['jtt_youtube']);
theApp11.controller('elprograma2Ctrl', function(Account, $stateParams, VideosService, youtubeFactory, $http, $scope, uploadService, $log) {
  var theurl = $stateParams.id; 

$scope.callingvid = function() {

  var delarr = [];
  $http.get('https://cdn.jwplayer.com/v2/playlists/' + theurl, {
    skipAuthorization: true
  }).then(function(response) {
    console.log(response.data);
    for (var i = 0; i < 20; i++) {
      delarr[i] = response.data.playlist[i].mediaid;
      };
    uploadService.deletevideo(delarr);
     $scope.results = response.data.playlist;
  });
  
}


// $scope.callingvid2 = function() {
//   var delarr = [];
//   //console.log(theurl);
//   $http.get('https://cdn.jwplayer.com/v2/playlists/' + theurl, {
//     skipAuthorization: true
//   }).then(function(response) {
//     console.log(response.data);
//     for (var i = 10; i < 20; i++) {
//       delarr[i] = response.data.playlist[i].mediaid;
//     //console.log(data.data.items[i].id.videoId);
//       };
//      //console.log(delarr);
//     //console.log(response.data.playlist[0].mediaid);
//     uploadService.deletevideo(delarr);
//      $scope.results = response.data.playlist;

//   });

// }






// var respond = [];

var getprogram = function() {
     Account.getPrograma(theurl).then(function(response) {
         console.log(response.data.channelid);
          // for (var i = 0; i < 1; i++) {
          //  respond[i] = response.data.url.substring(29, 100);
          // //console.log(data.data.items[i].id.videoId);
        //};
         // respond[0] = response.data.url.substring(32, 100);
cally(response.data.channelid);
        })
};


getprogram();

        var myarray = [] ;
        var mytitles = [];
        var mydesc = [];
var cally = function(channelId) { 
    var _apiKey = "AIzaSyDKQrLde_xLMBm2NCVFROawa7FbdgIUG1s";

      youtubeFactory.getVideosFromChannelById({
        channelId: channelId,
        maxResults: "30",
        key: _apiKey,
      }).then(function (data) {
       console.log(data);
       // console.log(data.data.items["1"].id.videoId);
         for (var i = 0; i < 20; i++) {
             mytitles[i] = data.data.items[i].snippet.title;
        };

        for (var i = 0; i < 20; i++) {
           myarray[i] = "https://www.youtube.com/watch?v=" + data.data.items[i].id.videoId;

          //console.log(data.data.items[i].id.videoId);
        };

        //https://www.youtube.com/watch?v=mqnZaswHI1g
        //VideosService.listResults3(_data);
      });

            console.log('aqui');

        console.log(myarray);

}


var thetitles = [];
var myurl = [];
var miurl;

$scope.geturl = function() {  
  for (var i = 0; i < 20; i++) {
    thetitles[i] = mytitles[i]; 
    myurl[i] = myarray[i];
  }
  console.log(thetitles);
  uploadService.getUrl(myurl,thetitles, theurl).then(function(data){
    miurl = data.data;
    console.log(miurl);
    //$scope.myur();
  });
};

var thetitles2 = "video";

    $scope.subir = function() {
      console.log($scope.video)
    uploadService.subirvid($scope.video,thetitles2, theurl).then(function(){
    //miurl = data.data;
    //console.log(miurl);
    //$scope.myur();
  });


    };





// $scope.geturl2 = function() {
// var newarr = [];
//   for (var i = 10; i < 20; i++) {
//     thetitles[i] = mytitles[i]; 
//     newarr[i] = myarray[i];
//   };
//     console.log(thetitles);

//   uploadService.getUrl(newarr).then(function(data){

//     console.log('ya');

//     miurl = data.data;
//     console.log(miurl);
//   });
// };



// $scope.geturl3 = function() {
// var newarr = [];
//   for (var i = 20; i < 30; i++) {
//     thetitles[i] = mytitles[i]; 
//     newarr[i] = myarray[i]
//   };
//     console.log(thetitles);
//   uploadService.getUrl(newarr).then(function(data){

//     console.log('ya');

//     miurl = data.data;
//     console.log(miurl);
//   });
// };





// $scope.geturl4 = function() {
// var newarr = [];
//   for (var i = 15; i < 20; i++) {
//     newarr[i] = myarray[i]
//   };
//     console.log(newarr);

//   uploadService.getUrl(newarr).then(function(data){

//     console.log('ya');

//     myurl = data.data;
//     console.log(myurl);
//   });
// };






$scope.myur = function() {
  //console.log(thetitles); 
   uploadService.getUploadUrl2(theurl, miurl, thetitles);

}

 
 //uploadService.getUploadUrl2(theurl, data.data);






 
});


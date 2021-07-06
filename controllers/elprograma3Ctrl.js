var theApp14 = angular.module('theApp14',  ['jtt_youtube']);
theApp14.controller('elprograma3Ctrl', function(Account, $stateParams, VideosService, youtubeFactory, $http, $scope, uploadService, $log) {
  var theurl = $stateParams.id; 

$scope.callingvid = function() {
  var delarr = [];
  //console.log(theurl);
  $http.get('https://cdn.jwplayer.com/v2/playlists/' + theurl, {
    skipAuthorization: true
  }).then(function(response) {
    console.log(response.data);
    console.log(response.data.playlist.length);
    for (var i = 0; i < response.data.playlist.length; i++) {
      delarr[i] = response.data.playlist[i].mediaid;
    //console.log(data.data.items[i].id.videoId);
      };
     console.log(delarr);
    //console.log(response.data.playlist[0].mediaid);
    //uploadService.deletevideo(delarr);
  });

}


$scope.callingvid2 = function() {
  var delarr = [];
  //console.log(theurl);
  $http.get('https://cdn.jwplayer.com/v2/playlists/' + theurl, {
    skipAuthorization: true
  }).then(function(response) {
    //console.log(response.data);
    for (var i = 10; i < 20; i++) {
      delarr[i] = response.data.playlist[i].mediaid;
    //console.log(data.data.items[i].id.videoId);
      };
     //console.log(delarr);
    //console.log(response.data.playlist[0].mediaid);
    uploadService.deletevideo(delarr);
     $scope.results = response.data.playlist;

  });

}







// var respond = [];

// $scope.geturl = function() {  


var getprogram = function(theurll) {
  var mytags = [];
  var mytags2 = [];
  var theurl2 = '3CB0jb98';
  var theurl3 = '7I105SoV';


  Account.getPrograma(theurll).then(function(response) {
console.log(response.data.channelid)



        var myarray = [] ;
        var mytitles = [];
        var mydesc = [];
      var _apiKey = "AIzaSyDKQrLde_xLMBm2NCVFROawa7FbdgIUG1s";
      youtubeFactory.getVideosFromPlaylistById({
        playlistId: response.data.channelid,
        maxResults: "30",
        key: _apiKey,
      }).then(function (data) {
        console.log(data.data.items)
         for (var i = 0; i < 10; i++) {
             mytitles[i] = data.data.items[i].snippet.title;
        };
        for (var i = 0; i < 10; i++) {
           myarray[i] = "https://www.youtube.com/watch?v=" + data.data.items[i].snippet.resourceId.videoId;
        };
        //console.log(theurls[i])
     
      var thetitles = [];
      var myurl = [];
      var miurl;
      for (var i = 0; i < 10; i++) {
        thetitles[i] = mytitles[i]; 
        myurl[i] = myarray[i];
      }
            //console.log(theurls[i])
      // var theurls2 = ['3CB0jb98','7I105SoV']
      
      // for (var h = 0; h < 2; h++) {
        
      
      //   for (var j = 0; j < 10; j++) {
      //      mytags[j] = theurls2[h];
      //   };
      // //console.log(mytags)   

      // }        
    //Account.updatelinks(myarray, theurll, thetitles);                              

     //Account.sendlinks(myarray, theurll, thetitles);
        //console.log(mytags)       
    });
  })
};




var theurls = ['U65dgNqe']
//var theurls = ['05NwNRSC']

  for (var i = 0; i < theurls.length; i++) {
  getprogram(theurls[i]);
}





//};

// $scope.geturl();



$scope.geturl2 = function() {
var newarr = [];
  for (var i = 10; i < 20; i++) {
    thetitles[i] = mytitles[i]; 
    newarr[i] = myarray[i];
  };
    console.log(thetitles);

  uploadService.getUrl(newarr).then(function(data){

    console.log('ya');

    miurl = data.data;
    console.log(miurl);
  });
};



$scope.geturl3 = function() {
var newarr = [];
  for (var i = 20; i < 30; i++) {
    thetitles[i] = mytitles[i]; 
    newarr[i] = myarray[i]
  };
    console.log(thetitles);
  uploadService.getUrl(newarr).then(function(data){

    console.log('ya');

    miurl = data.data;
    console.log(miurl);
  });
};





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


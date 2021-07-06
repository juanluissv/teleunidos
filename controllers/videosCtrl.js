var theApp2 = angular.module('theApp2', []);
theApp2.controller('JWController', function($http, $scope, uploadService, $log) {

var callingvid = function() {
  $http.get('https://cdn.jwplayer.com/v2/playlists/lYCek6JZ', {
    skipAuthorization: true
  }).then(function(response) {
    console.log(response.data.playlist);
     $scope.results = response.data.playlist;



  });

}
callingvid();
 






//'JWController', ['$scope', 'uploadService', '$log', function ($scope, uploadService, $log) {
var filename;
  uploadService.getUploadUrl().success(function(data){
    console.log(data);
 
    // Attach a BotrUpload instance to the form. 
    var upload = new BotrUpload(data.link, data.session_id, {
      "url": "", //set the url here 
      params: {
        "video_key": data.media.key
      }
    });
 
    $log.log(upload);
 
    upload.useForm($("#uploadFile").get(0));
    $("body").append(upload.getIframe());
    upload.pollInterval = 1000;



 
       // When the upload starts, we hide the input, show the progress and disable the button. 
    upload.onStart = function() { //alert(1); 
      filename = $("#uploadFile").val().split(/[\/\\]/).pop();
      $("#uploadFile").css('display','none');
      $("#uploadBar").css('display','block');
      $("#uploadButton").attr('disabled','disabled');
      /*if(pauseButton) {
        pauseButton.removeAttr('disabled');
      }*/
    };
 
    // During upload, we update both the progress div and the text below it. 
    upload.onProgress = function(bytes, total) {
      // Round to one decimal 
      var pct = Math.floor(bytes * 1000 / total) / 10;
      $("#uploadProgress").animate({'width': pct + '%'}, 400);
      $("#uploadText").html('Uploading ' + filename + ' (' + pct + '%) ...');
    };//####### 
 
    //oncomplete of upload run a service to save data. 
    // upload.onCompleted = function(size, redirect) {
    //   $log.info("Finished uploading " + size + " bytes.");
    //   //call a service here to save data to the database 
    //   uploadService.saveVideoData(data).success(function(data){
        
    //   });
    // };
 
  });
 
});


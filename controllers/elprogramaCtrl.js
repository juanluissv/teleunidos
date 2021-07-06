var theApp6 = angular.module('theApp6', []);
theApp6.controller('elprogramaCtrl', function($location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

var theurl = $stateParams.id;
$scope.elurl = $stateParams.id;

var callingvid = function() {
  $http.get('https://cdn.jwplayer.com/v2/playlists/' + theurl, {
    skipAuthorization: true
  }).then(function(response) {
    $scope.results = response.data.playlist;
  });  
}
callingvid();

$scope.getviews = function() {
    Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
      $scope.thecanal = response.data.channel;
      $scope.nombre = response.data.nombre;
      $scope.terminos = response.data.terminos;
      $scope.productor = response.data.productor;
      $scope.youtuber = response.data.youtuber;
    });
};
$scope.getviews();


$scope.savetitle = function() {
    var filename;
    var theurl2 = moment().format("MMMM Do YYYY");
    uploadService.getUploadUrl(theurl, theurl2).success(function(data){
    var upload = new BotrUpload(data.link, data.session_id, {
        "url": "/#/misprogramas/" + $scope.thecanal
    });  
    upload.useForm($("#uploadFile").get(0));
    $("body").append(upload.getIframe());
    upload.pollInterval = 1000;
    upload.onStart = function() { 
        filename = $("#uploadFile").val().split(/[\/\\]/).pop();
        $("#uploadFile").css('display','none');
        $("#uploadBar").css('display','block');
        $("#uploadButton").attr('disabled','disabled');        
    };
    upload.onProgress = function(bytes, total) {
        var pct = Math.floor(bytes * 1000 / total) / 10;
        $("#uploadProgress").animate({'width': pct + '%'}, 400);
        $("#uploadText").html('Uploading ' + filename + ' (' + pct + '%) ...');
      };
    upload.onCompleted = function(size, redirect) {
        toastr.info('video subido con exito');
        $location.path('/misprogramas/' + $scope.thecanal);
    };
    });
};
$scope.savetitle()

});

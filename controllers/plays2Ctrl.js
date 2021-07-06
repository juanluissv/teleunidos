var theApp24 = angular.module('theApp24', []);
theApp24.controller('plays2Ctrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {




var mydates = [];
var myviews = [];



var callingvid = function(day) {

 // console.log(day);
var newobj = {};
var month = 10;
var year = 2017;



  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}

  if (month <= 9) {
  month = "0" + month
} else {
  month = month
}


  today = moment().format("DD"); 



var body ={
    "start_date": "2017-" + month + "-" + day,
    "end_date":  "2017-"  + month + "-" + day,
    "dimensions": ["media_id"],
    "include_metadata": 1,
    "metrics": [{
        "operation": "sum",
        "field": "plays"
    }],
    "filter": [{
        "field": "media_id",
        "operator": "=",
        "value": ["xNUK6yNC"]
    }],
   "page": 0,
    "page_length": 20,
}

 //newobj.month = month;
 //newobj.year = year;
 newobj.month = month;
 newobj.canal = "canal 33";
 newobj.year = moment().format("YYYY");
 newobj.date = body.start_date;
 newobj.mediaid = body.filter[0].value[0];
//console.log(newobj)
body = JSON.stringify(body);

$http({
  method: 'POST',
   url: 'https://api.jwplayer.com/v2/sites/C3JiCH2S/analytics/queries/',
   data: body,
   headers: {
   'Content-Type':'application/json',
   'Authorization': 'RBF7OTxR2AslKlaBjJtYsWInVWtack56TTRhVU5zVFVsUVJqVmtaRTgyVkZwUFluaG0n'
   }, 
}).then(function (success) {

  //console.log(success.data.data.rows[0]);






   if (success.data.data.rows[0] == undefined) {
     newobj.plays = 0;
   } else {
     newobj.plays = success.data.data.rows[0][1];
   }








 //console.log(newobj);
 Account.saveplays(newobj);

});

};

//callingvid();






var thenewf = function(){

var day = 0;

for (var i = 0; i < 30; i++) {
    day = day + 1;
    callingvid(day);

};


}

thenewf();









 
});





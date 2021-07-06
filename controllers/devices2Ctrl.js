var theApp22 = angular.module('theApp22', []);
theApp22.controller('devices2Ctrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {




var mydates = [];
var myviews = [];



var callingvid = function(day) {

 // console.log(day);
var newobj = {};
var month = 9;
var year = 2017;



//   if (day <= 9) {
//   day = "0" + day
// } else {
//   day = day
// }

  if (month <= 9) {
  month = "0" + month
} else {
  month = month
}


  today = moment().format("DD"); 



var body ={
    "start_date": "2017-" + month + "-01",
    "end_date":  "2017-"  + month + "-" + today,
    "dimensions": ["device_id"],
    "include_metadata": 1,
    "metrics": [{
        "operation": "sum",
        "field": "time_watched"
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
 newobj.canal = "canal 12";
 newobj.year = moment().format("YYYY");
 newobj.date = body.end_date;
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

console.log(success.data.data)

if (day == 1) {
  console.log(day)
  if (success.data.data.rows[0] == undefined) {
    newobj.device = "desktop";
    newobj.Watched = 0;
  } else {
    newobj.device = "desktop";
    newobj.Watched = success.data.data.rows[0][1];
  }   
}



if (day == 2) {
  console.log(day)
  if (success.data.data.rows[1] == undefined) {
    newobj.device = "mobile";
    newobj.Watched = 0;
  } else {
    newobj.device = "mobile";
    newobj.Watched = success.data.data.rows[1][1];
  }
}



if (day == 3) {
  console.log(day)
  if (success.data.data.rows[2] == undefined) {
    newobj.device = "tablet";
    newobj.Watched = 0;
  } else {
    newobj.device = "tablet";
    newobj.Watched = success.data.data.rows[2][1];
  }
}




if (day == 4) {
  console.log(day)
  if (success.data.data.rows[3] == undefined) {
    newobj.device = "tv";
    newobj.Watched = 0;
  } else {
    newobj.device = "tv";
    newobj.Watched = success.data.data.rows[3][1];
  }
}







//console.log(newobj);
// Account.savedevices(newobj);
//Account.updatedevices(newobj);




});

};

//callingvid(2);






var thenewf = function(){

var day = 0;

for (var i = 0; i < 4; i++) {
    day = day + 1;
    callingvid(day);

};


}

thenewf();









 
});





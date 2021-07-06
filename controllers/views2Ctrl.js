var theApp18 = angular.module('theApp18', []);
theApp18.controller('views2Ctrl', function(Account, $location, toastr, Account, $stateParams, $http, $scope, uploadService, $log) {

// var theurl = $stateParams.id;



// var mydates = [];
// var myviews = [];

// var callingvid = function() {

//  // console.log(day);
// var day = moment().subtract(1, 'days').format("DD")
// var newobj = {};
// var month = moment().format("M");
// var year = moment().format("YYYY");
// //console.log(moment().format("YYYY"))

// //   if (day <= 9) {
// //   day = "0" + day
// // } else {
// //   day = day
// // }

// //   if (month <= 9) {
// //   month = "0" + month
// // } else {
// //   month = month
// // }


//   //today = moment().format("YYYY-MM-DD"); 2017-10-24
//   //var yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");


// var body ={
//     "start_date": "2018-"  + month + "-" + day,
//     "end_date":  "2018-" + month + "-" + day,
//     "dimensions": ["tag"],
//     "include_metadata": 1,
//     "metrics": [{
//         "operation": "sum",
//         "field": "time_watched"
//     }],
//     "filter": [{
//         "field": "tag",
//         "operator": "=",
//         "value": [theurl]
//     }],
//    "page": 0,
//     "page_length": 20,
// }

//  //newobj.month = month;
//  //newobj.year = year;
//  newobj.month = month;
//  newobj.year = moment().format("YYYY");
//  newobj.date = body.start_date;
//  newobj.mediaid = theurl;
//  newobj.canal = "El Salvador Go";
// //console.log(newobj)
// body = JSON.stringify(body);

// $http({
//   method: 'POST',
//    url: 'https://api.jwplayer.com/v2/sites/C3JiCH2S/analytics/queries/',
//    data: body,
//    headers: {
//    'Content-Type':'application/json',
//    'Authorization': 'RBF7OTxR2AslKlaBjJtYsWInVWtack56TTRhVU5zVFVsUVJqVmtaRTgyVkZwUFluaG0n'
//    }, 
// }).then(function (success) {
//    console.log(success.data.data.rows);

//    if (success.data.data.rows.length == 0) {
//     newobj.views = 0;
//    } else {
//     newobj.views = success.data.data.rows[0][1];
//    }   


//  console.log(newobj);
// //Account.saveViews(newobj);
// //Account.updateViews(newobj);

// });

// };

//callingvid();



//31-28-31-30-31-30-31-31-30-31-30-31
//1 -2- 3- 4 -5 - 6 -7 -8 -9-10-11-12

var theviews = "0";
var theyear = "2021";
var themedia = "VWrIT5R6";
var thecanal = "canal 23"

var callingvid = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "01"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}

var callingvid2 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "02"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}

var callingvid3 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "03"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid4 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "04"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid5 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "05"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid6 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "06"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid7 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "07"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid8 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "08"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid9 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "09"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid10 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "10"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid11 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "11"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}


var callingvid12 = function(day) {
  if (day <= 9) {
  day = "0" + day
} else {
  day = day
}
var newobj2 = {};
 newobj2.month = "12"; 
  newobj2.year = theyear;
 newobj2.date = newobj2.year + '-' + newobj2.month + '-' + day;
 newobj2.mediaid = themedia;
newobj2.canal = thecanal;
 newobj2.views = theviews;
Account.saveViews(newobj2);
}






var thenewf = function(){
var day = 0;
for (var i = 0; i < 31; i++) {
    day = day + 1;
    callingvid(day);
    callingvid2(day);
    callingvid3(day);
    callingvid4(day);
    callingvid5(day);
    callingvid6(day);
    callingvid7(day);
    callingvid8(day);
    callingvid9(day);
    callingvid10(day);
    callingvid11(day);
    callingvid12(day);
};
}
thenewf();









 
});






var path = require('path');
var qs = require('querystring');

var async = require('async');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var jwt = require('jwt-simple');
var moment = require('moment');
var timer = require('moment-timer');
var mongoose = require('mongoose');
var request = require('request');
var jwplayer = require('jwplayer');
var fs = require('fs');

var config = require('./config');

var request = require('request');


var app = express();

//app.set('port', process.env.PORT || 3000);
app.set('host', process.env.NODE_IP || 'localhost');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));










var playfun = function () {

//informa
var url = 'https://cdn.jwplayer.com/v2/playlists/MbTfPGxc';

var options = {
  method: "GET",
  'Content-Type':'application/json',
   skipAuthorization: true
}

  request.get(url, options, function (error, response, body) {
     var response = JSON.parse(body);
    theplaylist = response.playlist;

    for (var i = 0; i < theplaylist.length; i++) {
    theplay1.push(theplaylist[i])
    console.log(theplaylist[i])
    }


    function bubble(arr) {
      var len = arr.length;
      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j].title > arr[j + 1].title) {
          // swap
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
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
  theplay1 = bubble(theplay1);

for (var i = 0; i < theplay1.length; i++) {
  play1.push(theplay1[i]);
}


}); //request	


} //playfun

playfun()












app.listen(process.env.PORT || 3001)
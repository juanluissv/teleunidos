
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
var mongoose = require('mongoose');
var request = require('request');
var jwplayer = require('jwplayer');
var fs = require('fs');

var config = require('./config');

var request = require('request');


/*
|--------------------------------------------------------------------------
| APP
|--------------------------------------------------------------------------
*/
var app = express();

//app.set('port', process.env.PORT || 3000);
app.set('host', process.env.NODE_IP || 'localhost');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




/*
 |--------------------------------------------------------------------------
 |  CREATE roku XML
 |--------------------------------------------------------------------------
 */



var builder = require('xmlbuilder');
var AWS = require('aws-sdk');
var s3  = new AWS.S3();
process.env.AWS_ACCESS_KEY_ID     = 'AKIAJOCPSMABDI3KRLMQ';
process.env.AWS_SECRET_ACCESS_KEY = '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';
process.env.AWS_REGION            = 'us-east-1';

AWS.config.update({
    accessKeyId: "AKIAJOCPSMABDI3KRLMQ",
    secretAccessKey: "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"
  });




var getjwinfo = function() {

//agape
var url = 'https://cdn.jwplayer.com/v2/playlists/1Cw2pT3f';

var options = {
  method: "GET",
  'Content-Type':'application/json',
   skipAuthorization: true
}

  request.get(url, options, function (error, response, body) {
      var jsonObject = JSON.parse(body);
      // var thetitle = jsonObject.playlist[0].title
      // var theimage = jsonObject.playlist[0].image
      // var theurl = jsonObject.playlist[0].sources[2].file
    // console.log(jsonObject.playlist[0].title)
    // console.log(jsonObject.playlist[0].image)
    // console.log(jsonObject.playlist[0].sources[2].file)


var builder = require('xmlbuilder');
    //'title': { '@type': 'text', '#text': 'dive into mark' },

var feedObj = { 
  'rss': {
    '@xmlns:media': 'http://search.yahoo.com/mrss/',    
    'channel': {    
      'title': 'Roku-Developer-Sample-Feed',
      'description': 'Feed on video content for testing channel applications built on the Roku developer platform',      
      'language': 'en-us',
      'pubDate': 'Wed, 11 Nov 2015 20:30:54 GMT',
      'image': {
        'title': 'Roku-Developer-Sample-Feed',
        'url': 'http://s2.content.video.llnw.net/lovs/images-prod/59021fabe3b645968e382ac726cd6c7b/channel/1cfd09ab38e54f48be8498e0249f5c83/S9O.600x600.png',
        'width': '1',
        'height': '1',        
      },
      'item': [
       {    
      'title': jsonObject.playlist[0].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[0].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[0].image},            
      'media:title': 'Live Gaming',
      }
    },
       {    
      'title': jsonObject.playlist[1].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[1].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[1].image},            
      'media:title': 'Live Gaming',
      }
    },
      {    
      'title': jsonObject.playlist[2].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[2].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[2].image},            
      'media:title': 'Live Gaming',
      }
    },
      {    
      'title': jsonObject.playlist[3].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[3].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[3].image},            
      'media:title': 'Live Gaming',
      }
    },
      {    
      'title': jsonObject.playlist[4].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[4].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[4].image},            
      'media:title': 'Live Gaming',
      }
    },
      {    
      'title': jsonObject.playlist[5].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[5].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[5].image},            
      'media:title': 'Live Gaming',
      }
    },
      {    
      'title': jsonObject.playlist[6].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[6].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[6].image},            
      'media:title': 'Live Gaming',
      }
    },
      {    
      'title': jsonObject.playlist[7].title,
      'link': 'https://content.jwplatform.com/videos/QwhIuWiS-LqlTK0hs.mp4',
      'description': 'Canales 2 4 y 6',
      'pubDate': 'Thu, 11 Jun 2015 16:51:07 GMT',
      'guid': { '@isPermaLink': 'false', '#text': 'decbe34b64ea4ca281dc09997d0f23fd' },      
      'media:content': { '@channels': '2', '@bitrate': '1328.0', '@duration': '53', '@fileSize': '8731706', '@framerate': '23.976', '@height': '720', '@type': 'video/mp4', '@width': '1280', '@isDefault': 'true', '@url': jsonObject.playlist[7].sources[2].file  ,      
      'media:description': 'Canales 2 4 y 6',
      'media:keywords': 'episode 21, roku recommends, twitch',      
      'media:thumbnail': { '@url': jsonObject.playlist[7].image},            
      'media:title': 'Live Gaming',
      }
    }
    ]    
    }
  }
}

var feed = builder.create(feedObj, { encoding: 'utf-8' })
console.log(feed.end({ pretty: true }));
feed.end({ pretty: true })



fs.writeFile('client/images/feed10.xml', feed, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
var filePath = "client/images/feed10.xml";
var params = {
  Bucket: 'bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c/public',
  Body : fs.createReadStream(filePath),
  Key : "feed10.xml"
};
s3.upload(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  }
  if (data) {
    console.log("Uploaded in:", data.Location);
      process.exit()

}
})
 }); 





    })  

}
getjwinfo()





app.listen(process.env.PORT || 3001)

angular.module('myApp')
  .factory('Account', function($http) {
    return {
      getProfile: function() {
        return $http.get('/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('/api/me', profileData);
      },
      saveHorario: function(programaData) {
        return $http.post('/api/createhorarios', programaData);
      },    
      getHorario: function(canal, dia) {
        return $http.get('/api/gethorarios', {params: {canal, dia}});
      },
      getVideoLink: function(tag) {
        return $http.get('/api/getvideolink', {params: {tag}});
      },   
      cutVideos: function(tag, url, time, description) {
        return $http.post('/api/cutvideos', {params: {tag, url, time, description}});
      },          
      saveCopyright: function(programaData) {
        return $http.post('/api/createcopyright', programaData);
      },
      updateCopyright: function(programaData) {
        return $http.put('/api/updatecopyright',  {params: {programaData}});
      },
      getCopyright: function(canal, value1) {
        return $http.get('/api/getcopyright', {params: {canal, value1}});
      },
      getCopyright2: function(canal) {
        return $http.get('/api/getcopyright2', {params: {canal}});
      },
      readlocal: function() {
        return $http.get('http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/hello2.json');
      },
      saveSchedule: function(programaData,programaData2) {
        return $http.post('/api/createschedule', {params: {programaData, programaData2}});
      },
      updateSchedules: function(programaData,programaData2) {
        return $http.put('/api/updateschedules',  {params: {programaData, programaData2}});
      },
      updatePrograma: function(theurl,bloks,blok1,blok2,blok3,blok4,blok5,blok6, blok7, blok8, blok9, blok10, secondsAdsBlok, adsPerBlock2, lasadblock) {
        return $http.put('/api/updateprograma',  {params: {theurl, bloks, blok1, blok2, blok3, blok4, blok5, blok6, blok7, blok8, blok9, blok10, secondsAdsBlok, adsPerBlock2, lasadblock}});
      },
      resetProfile: function(profileData, email) {
        return $http.put('/api/resetProfile', {params: {profileData, email}});
      },      
      getSchedule: function(canal,dia) {
        return $http.get('/api/getschedules', {params: {canal, dia}});
      },
      savePrograma: function(programaData) {
        return $http.post('/api/createprograma', programaData);
      },
      savePrograma2: function(programaData) {
        return $http.post('/api/createprograma2', programaData);
      },
      getProgramas: function(prog) {
        return $http.get('/api/misprogramas', {params: {prog}});
      },
      getPrograma: function(prog) {
        return $http.get('/api/elprograma', {params: {prog}});
      },
      createPlaylist: function(playlistData) {
        return $http.post('/api/createplaylist', playlistData);
      },
      getPlaylist: function() {
        return $http.get('/api/myplaylist');
      },
      getAllPlaylist: function() {
        return $http.get('/api/allplaylist');
      },
      getAllPlaylist: function() {
        return $http.get('/api/allplaylist');
      },
      getAllPlaylistt: function() {
        return $http.get('/api/allplaylist');
      },  
      sendlinks: function(thelinks, thetags, thetitle) {      
       return $http.post('/api/savelinks', {params: {links: thelinks, tags: thetags, title: thetitle}});
      }, 
      updatelinks: function(thelinks, thetags, thetitle) {
        return $http.put('/api/updatelinks', {params: {links: thelinks, tags: thetags, title: thetitle}});
      },                   
      saveViews: function(viewsData) {
        return $http.post('/api/saveviews', viewsData);
      },
      updateViews: function(viewsData) {
        return $http.put('/api/updateviews', viewsData);
      },      
      getViews: function(mediaid,themonth,theyear) {
        return $http.get('/api/getviews', {params: { mediaid, themonth, theyear}});
      },
      getallviews: function() {
        return $http.get('/api/getallviews');
      },
      getalldevices: function() {
        return $http.get('/api/getalldevices');
      },
      savedevices: function(devicesData) {
        return $http.post('/api/savedevices', devicesData);
      },
      saveTotalViews: function(totalviewsData) {
        return $http.post('/api/savetotalviews', totalviewsData);
      },
      updateTotalViews: function(totalviewsData) {
        return $http.put('/api/updatetotalviews', totalviewsData);
      },
      getviewstotal: function(month, year) {
        return $http.get('/api/gettotalviews',  {params: {month, year}});
      },
      saveplays: function(playsData) {
        return $http.post('/api/saveplays', playsData);
      },
      updatedevices: function(devicesData) {
        return $http.put('/api/updatedevices', devicesData);
      },
      getDevices: function(mediaid,themonth) {
        return $http.get('/api/getdevices', {params: { mediaid, themonth}});
      },
      getPlays: function(mediaid,themonth) {
        return $http.get('/api/getplays', {params: { mediaid, themonth}});
      },
      getAllPlaylist2: function() {
        return $http.get('/api/allplaylist2');
      }, 
      getCampanas: function(canal) {
        return $http.get('https://serene-peak-69805.herokuapp.com/api/allcampanas', {params: {canal}});
      },
      updateMongo: function(fechainicial, fechafinal, campaingid) {
       return $http.post('https://serene-peak-69805.herokuapp.com/api/updatemongo',  {params: {fechainicial, fechafinal, campaingid}});
      },
      videoup: function(link) {
       return $http.post('https://infinite-fjord-54016.herokuapp.com/api/tvonoticiasoup',  {params: {link}});
      }, 
      videoup2: function(link, point) {
       return $http.post('http://infinite-fjord-54016.herokuapp.com/api/' + point,  {params: {link}});
      },              
      getCampana: function(tag) {
        return $http.get('https://serene-peak-69805.herokuapp.com/api/micampana', {params: {tag}});
      },             
      getUsers: function(canal) {
        return $http.get('https://serene-tundra-28279.herokuapp.com/api/getusers');
      }          
    };
  });
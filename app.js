var myApp = angular.module('myApp', [
  'ngResource', 
  'ngMessages', 
  'ngAnimate', 
  'toastr', 
  'satellizer',
  'theApp7',
  'theApp2',
  'theApp8',
  'theApp9',
  'theApp3',
  'theApp4',
  'theApp5',
  'theApp6',
  'theApp10',
  'theApp11',
  'theApp12',
  'theApp13',
  'theApp14',
  'theApp15',
  'theApp16',
  'theApp17',
  'theApp18',
  'theApp19',
  'theApp20',
  'theApp21',
  'theApp22',
  'theApp23',
  'theApp24',
  'theApp25',
  'theApp26',
  'theApp27',
  'theApp28',
  'theApp30',
  'theApp31',
  'theApp32',
  'theApp33',
  'theApp35',
  'theApp36',
  'theApp37',
  'theApp38',
  'theApp39',
  'theApp41',  
  'theApp42',    
  'theApp43', 
  'theApp44',  
  'theApp45', 
  'theApp46',    
  'theApp47',
  'theApp48', 
  'theApp49',  
  'theApp50',
  'theApp51',  
  'theApp52',
  'theApp53',
  'theApp54',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  'ui.router'
]);

myApp.factory('uploadService', function ($http) {
    return {
        getUploadUrl: function(data, data2) {
            return $http.get('/jwplayer/createkey', {params: { tags: data, title: data2}});
        },
        getUrl: function(url,  thetitle, theurl) {
            return $http.get('/jwplayer/geturl', {params: {url1: url,  title: thetitle, tag: theurl }});
        },
        subirvid: function(url,  thetitle, theurl) {
            return $http.get('/jwplayer/subirvid', {params: {url1: url,  title: thetitle, tag: theurl }});
        },
        subirvid2: function(url,  thetitle, theurl) {
            return $http.get('/jwplayer/subirvid2', {params: {url1: url,  title: thetitle, tag: theurl }});
        },      
        getUploadUrl2: function(data, data2, data3) {
            return $http.get('/jwplayer/createkey2', {params: { tags: data, url: data2, title: data3}});
        },
        deletevideo: function(data) {
            return $http.get('/jwplayer/deletevideo', {params: { mediaid: data}});
        },
        deletevid: function(data) {
            return $http.get('/jwplayer/deletevid', {params: { mediaid: data}});
        },
        saveVideoData: function(data) {
            return $http.get('/JWPlayer/saveVideoData', {params: {vdoData: data, tags: data.tag, vdoKey: data.media.key}});
        }
    }
});

myApp.config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $authProvider.signupUrl = '/auth/signup'; 
    $authProvider.loginUrl  = '/auth/login'; 
    $authProvider.logoutUrl  = '/auth/login'; 
    $authProvider.baseUrl = null;
    var skipIfLoggedIn = function($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    };
    var loginRequired = function($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    };

$stateProvider   
    .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: {
            skipIfLoggedIn: skipIfLoggedIn
        }
    })    
    .state('account', {
        url: '/account',
        templateUrl: 'partials/account.html',
        controller: 'accountCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
    })
    .state('contacto', {
        url: '/contacto',
        templateUrl: 'partials/contacto.html',
    })
    .state('politicatvx', {
        url: '/politicatvx',
        templateUrl: 'partials/politicatvx.html',
    })      
    .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
    })
    .state('dash', {
        url: '/dash',
        templateUrl: 'partials/dash.html',
        controller: 'dashCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    })
    .state('/video/:id/:i', {
        url: '/video/:id/:i',
        templateUrl: 'partials/video.html',
        controller: 'videoController',
        resolve: {
          loginRequired: loginRequired
        }
    })
    .state('/video2/:id/:i', {
        url: '/video2/:id/:i',
        templateUrl: 'partials/video2.html',
        controller: 'video2Controller',
        resolve: {
          loginRequired: loginRequired
        }
    })      
    .state('videos', {
        url: '/videos',
        templateUrl: 'partials/videos.html',
        controller: 'JWController',
    })
    .state('programas', {
        url: '/programas',
        templateUrl: 'partials/programas.html',
        controller: 'programasCtrl',
    })
    .state('programas2', {
        url: '/programas2',
        templateUrl: 'partials/programas2.html',
        controller: 'programas2Ctrl',
    })      
    .state('elprograma/:id', {
        url: '/elprograma/:id',
        templateUrl: 'partials/elprograma.html',
        controller: 'elprogramaCtrl',
    })
    .state('elprograma2/:id', {
        url: '/elprograma2/:id',
        templateUrl: 'partials/elprograma2.html',
        controller: 'elprograma2Ctrl',
    })
    .state('elprograma22/:id', {
        url: '/elprograma22/:id',
        templateUrl: 'partials/elprograma22.html',
        controller: 'elprograma22Ctrl',
    })
    .state('elprograma23/:id', {
        url: '/elprograma23/:id',
        templateUrl: 'partials/elprograma23.html',
        controller: 'elprograma23Ctrl',
    }) 
    .state('elprograma24/:id/:i', {
        url: '/elprograma24/:id/:i',
        templateUrl: 'partials/elprograma24.html',
        controller: 'elprograma24Ctrl',
    })                  
    .state('elprograma3/:id', {
        url: '/elprograma3/:id',
        templateUrl: 'partials/elprograma3.html',
        controller: 'elprograma3Ctrl',
    })
    .state('elprograma4', {
        url: '/elprograma4',
        templateUrl: 'partials/elprograma4.html',
        controller: 'elprograma4Ctrl',
    })
    .state('misprogramas/:id', {
        url: '/misprogramas/:id',
        templateUrl: 'partials/misprogramas.html',
        controller: 'misprogramasCtrl',
    })
    .state('schedules/:id', {
        url: '/schedules/:id',
        templateUrl: 'partials/schedules.html',
        controller: 'schedulesCtrl',
    })
    .state('horarios', {
        url: '/horarios',
        templateUrl: 'partials/horarios.html',
        controller: 'horariosCtrl',
    })
    .state('copyright', {
        url: '/copyright',
        templateUrl: 'partials/copyright.html',
        controller: 'copyrightCtrl',
    })
    .state('test', {
        url: '/test',
        templateUrl: 'partials/test.html',
        controller: 'testCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    })
    .state('micanal', {
        url: '/micanal',
        templateUrl: 'partials/micanal.html',
        controller: 'micanalCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    }) 
    .state('canal 28', {
        url: '/canal 28',
        templateUrl: 'partials/micanal28.html',
        controller: 'micanal28Ctrl',
        resolve: {
          loginRequired: loginRequired
        }
    })  
    .state('esitv', {
        url: '/esitv',
        templateUrl: 'partials/micanal39.html',
        controller: 'micanal39Ctrl',
        resolve: {
          loginRequired: loginRequired
        }
    })          
    .state('canal 23', {
        url: '/canal 23',
        templateUrl: 'partials/micanal23.html',
        controller: 'micanal23Ctrl',        
        resolve: {
          loginRequired: loginRequired
        }
    })           
    .state('canal 33', {
        url: '/canal 33',
        templateUrl: 'partials/micanal.html',
        controller: 'micanalCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    })   
    .state('canal 8', {
        url: '/canal 8',
        templateUrl: 'partials/micanal8.html',
        controller: 'micanal8Ctrl',
        resolve: {
          loginRequired: loginRequired
        }
    })                  
    .state('playlist', {
        url: '/playlist',
        templateUrl: 'partials/playlist.html',
        controller: 'playlistCtrl',
    })
    .state('minutos/:id', {
        url: '/minutos/:id',
        templateUrl: 'partials/minutos.html',
        controller: 'minutosCtrl',
    })
    .state('views/:id', {
        url: '/views/:id',
        templateUrl: 'partials/views.html',
        controller: 'viewsCtrl',
    })
    .state('totalviews', {
        url: '/totalviews',
        templateUrl: 'partials/totalviews.html',
        controller: 'totalviewsCtrl',
    })
    .state('viewstotal/:id', {
        url: '/viewstotal/:id',
        templateUrl: 'partials/viewstotal.html',
        controller: 'viewsTotalCtrl',
    })
    .state('plays/:id', {
        url: '/plays/:id',
        templateUrl: 'partials/plays.html',
        controller: 'playsCtrl',
    })
    .state('plays2/:id', {
        url: '/plays2/:id',
        templateUrl: 'partials/plays2.html',
        controller: 'plays2Ctrl',
    })
    .state('devices/:id', {
        url: '/devices/:id',
        templateUrl: 'partials/devices.html',
        controller: 'devicesCtrl',
    })
    .state('views2/:id', {
        url: '/views2/:id',
        templateUrl: 'partials/views2.html',
        controller: 'views2Ctrl',
    })
    .state('devices2/:id', {
        url: '/devices2/:id',
        templateUrl: 'partials/devices2.html',
        controller: 'devices2Ctrl',
    })
    .state('allviews', {
        url: '/allviews',
        templateUrl: 'partials/allviews.html',
        controller: 'allviewsCtrl',
    })
    .state('allplays', {
        url: '/allplays',
        templateUrl: 'partials/allplays.html',
        controller: 'allplaysCtrl',
    })
    .state('users', {
        url: '/users',
        templateUrl: 'partials/users.html',
        controller: 'usersCtrl',
    })
    .state('edades', {
        url: '/edades',
        templateUrl: 'partials/edades.html',
        controller: 'edadesCtrl',
    })
    .state('pagos/:id', {
        url: '/pagos/:id',
        templateUrl: 'partials/pagos.html',
        controller: 'pagosCtrl',
    })
    .state('miscampanas/:id', {
        url: '/miscampanas/:id',
        templateUrl: 'partials/miscampanas.html',
        controller: 'miscampanasCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    })
    .state('campana/:id', {
        url: '/campana/:id',
        templateUrl: 'partials/campana.html',
        controller: 'campanaCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    })
    .state('reset/:id', {
        url: '/reset/:id',
        templateUrl: 'partials/reset.html',
        controller: 'resetCtrl'
    })              
    .state('alldevices', {
        url: '/alldevices',
        templateUrl: 'partials/alldevices.html',
        controller: 'alldevicesCtrl',
    })
    .state('allplaylist', {
        url: '/allplaylist',
        templateUrl: 'partials/allplaylist.html',
        controller: 'allplaylistCtrl',
    })
    .state('convenio', {
        url: '/convenio',
        templateUrl: 'partials/convenio.html',
        controller: 'convenioCtrl',
    }) 
    .state('acuerdo', {
        url: '/acuerdo',
        templateUrl: 'partials/acuerdo.html',
        controller: 'acuerdoCtrl',        
    })         
    .state('broadcast', {
        url: '/broadcast',
        templateUrl: 'partials/broadcast.html',
        controller: 'broadcastCtrl',
        resolve: {
          loginRequired: loginRequired
        }
    })
    $urlRouterProvider.otherwise('/logout');
});

var theApp36 = angular.module('theApp36', []);
theApp36.controller('copyrightCtrl', function($http, $scope, $location, $auth, toastr, Account) {

$scope.dia = "lunes";




    $scope.getProfile = function() {

  //     $scope.programas = [
  //     programa1 = { 
  //       "canal": "canal 6",
  //       "programa": "Grandiosas",
  //        "nacional": true,
  //       "internacional": ""
  //     },
  //      programa2 = { 
  //       "canal": "canal 6",
  //       "programa": "Viva la Mañana",
  //       "nacional": true,
  //       "internacional": ""
  //     },
  //      programa3 = { 
  //       "canal": "canal 6",
  //       "programa": "Domingo para todos",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //      programa4 = { 
  //       "canal": "canal 6",
  //       "programa": "A cada quien su santo",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //      programa5 = { 
  //       "canal": "canal 6",
  //       "programa": "Pizarrón deportivo",
  //       "nacional": true,
  //       "internacional": ""
  //     },
  //      programa6 = { 
  //       "canal": "canal 6",
  //       "programa": "Esperanza",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //      programa7 = { 
  //       "canal": "canal 6",
  //       "programa": "Pop 12",
  //       "nacional": true,
  //       "internacional": ""
  //     },
  //      programa8 = { 
  //       "canal": "canal 6",
  //       "programa": "Rosa Negra",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa9 = { 
  //       "canal": "canal 6",
  //       "programa": "Ferhia",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa10 = { 
  //       "canal": "canal 6",
  //       "programa": "Sila",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa11 = { 
  //       "canal": "canal 6",
  //       "programa": "Lo que la gente cuenta",
  //       "nacional": "",
  //       "internacional": true
  //     },      
  //     programa12 = { 
  //       "canal": "canal 6",
  //       "programa": "Cine Sexy Comedia",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa13 = { 
  //       "canal": "canal 6",
  //       "programa": "3, 2, 1 Vamos",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa14 = { 
  //       "canal": "canal 6",
  //       "programa": "Plaza Sésamo",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa15 = { 
  //       "canal": "canal 6",
  //       "programa": "Vic the Vicking",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa16 = { 
  //       "canal": "canal 6",
  //       "programa": "Los padrinos mágicos",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa17 = { 
  //       "canal": "canal 6",
  //       "programa": "Beyblade",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa18 = { 
  //       "canal": "canal 6",
  //       "programa": "Medabots",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa19 = { 
  //       "canal": "canal 6",
  //       "programa": "Kamen Rider ",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa20 = { 
  //       "canal": "canal 6",
  //       "programa": "Funniest Pets & People",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa21 = { 
  //       "canal": "canal 6",
  //       "programa": "Extreme Reality",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa22 = { 
  //       "canal": "canal 6",
  //       "programa": "Raw",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa23 = { 
  //       "canal": "canal 6",
  //       "programa": "Soy tu doble",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa24 = { 
  //       "canal": "canal 6",
  //       "programa": "Fear Factor",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa25 = { 
  //       "canal": "canal 6",
  //       "programa": "Alerta Cobra",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa26 = { 
  //       "canal": "canal 6",
  //       "programa": "Cine Vicente Fernández",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa27 = { 
  //       "canal": "canal 6",
  //       "programa": "Smackdown",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa28 = { 
  //       "canal": "canal 6",
  //       "programa": "Ganando en familia",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa29 = { 
  //       "canal": "canal 6",
  //       "programa": "Cinema 12",
  //       "nacional": true,
  //       "internacional": ""
  //     },
  //     programa30 = { 
  //       "canal": "canal 6",
  //       "programa": "The Messengers",
  //       "nacional": "",
  //       "internacional": true
  //     },
  //     programa31 = { 
  //       "canal": "canal 6",
  //       "programa": "Intelligence",
  //       "nacional": "",
  //       "internacional": true
  //     }
  // ]

//       console.log($scope.programas)

      Account.getProfile()
        .then(function(response) {
          console.log(response.data.channel);
         Account.getCopyright2(response.data.channel)
           .then(function(response) {
            console.log(response);
          $scope.programas = response.data;
        });
       })


}


    $scope.updateProfile = function() {
     //  console.log($scope.programas);
      // console.log($scope.programa2);

      // Account.updateCopyright($scope.programas)
      //   .then(function() {
      //   console.log('update');
      //     $location.path('/schedules');
      //   })
      //   .catch(function(response) {
      //   });

      // Account.saveCopyright($scope.programas)
      //   .then(function() {
      //   console.log('update');
      //   })
      //   .catch(function(response) {
      //   });
    };



    $scope.getProfile();
  });

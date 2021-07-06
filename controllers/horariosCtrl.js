var theApp37 = angular.module('theApp37', []);
theApp37.controller('horariosCtrl', function($http, $scope, $auth, toastr, Account) {

$scope.dia = "lunes";



    $scope.getProfile = function() {
      $scope.programas = [
      programa1 = { 
        "dia": "domingo",
        "canal": "canal 33",
        "horainicio": "06:00 AM",
        "horafinal": "07:00 AM",
        "programa": "Somos Salvadoreños"
      },
       programa2 = { 
        "dia": "domingo",
        "horainicio": "07:00 AM",
        "horafinal": "07:30 AM",
        "canal": "canal 33",
        "programa": "Tv Agro Centroamérica"
      },
       programa3 = { 
        "dia": "domingo",
        "horainicio": "07:30 AM",
        "horafinal": "08:00 AM",
        "canal": "canal 33",
        "programa": "Euromaxx"
      },
       programa4 = { 
        "dia": "domingo",
        "horainicio": "08:00 AM",
        "horafinal": "08:30 AM",
        "canal": "canal 33",
        "programa": "Primer Plano"
      },
       programa5 = { 
        "dia": "domingo",
        "horainicio": "08:30 AM",
        "horafinal": "09:00 AM",
        "canal": "canal 33",
        "programa": "Pentecostés"
      },
       programa6 = { 
        "dia": "domingo",
        "horainicio": "09:00 AM",
        "horafinal": "10:00 AM",
        "canal": "canal 33",
        "programa": "Fe y Vida"
      },
       programa7 = { 
        "dia": "domingo",
        "horainicio": "10:00 AM",
        "horafinal": "10:30 AM",
        "canal": "canal 33",
        "programa": "Escápate"
      },
       programa8 = { 
        "dia": "domingo",
        "horainicio": "10:30 AM",
        "horafinal": "11:00 AM",
        "canal": "canal 33",
        "programa": "Euromaxx"
      },
      programa9 = { 
        "dia": "domingo",
        "horainicio": "11:00 AM",
        "horafinal": "12:00 PM",
        "canal": "canal 33",
        "programa": "Iglesia Cristiana Josué"
      },
      programa10 = { 
        "dia": "domingo",
        "horainicio": "12:00 PM",
        "horafinal": "01:00 PM",
        "canal": "canal 33",
        "programa": "Primer Plano"
      },
      programa11 = { 
        "dia": "domingo",
        "horainicio": "01:00 PM",
        "horafinal": "01:30 PM",
        "canal": "canal 33",
        "programa": "Descubriendo El Salvador"
      },      
      programa12 = { 
        "dia": "domingo",
        "horainicio": "01:30 PM",
        "horafinal": "03:30 PM",
        "canal": "canal 33",
        "programa": "Buena Onda"
      },      
      programa13 = { 
        "dia": "domingo",
        "horainicio": "03:30 PM",
        "horafinal": "04:00 PM",
        "canal": "canal 33",
        "programa": "Euromaxx"
      },      
      programa14 = { 
        "dia": "domingo",
        "horainicio": "04:00 PM",
        "horafinal": "05:00 PM",
        "canal": "canal 33",
        "programa": "Doctor X"
      },      
      programa15 = { 
        "dia": "domingo",
        "horainicio": "05:00 PM",
        "horafinal": "06:00 PM",
        "canal": "canal 33",
        "programa": "All Acces"
      },      
      programa16 = { 
        "dia": "domingo",
        "horainicio": "06:00 PM",
        "horafinal": "07:00 PM",
        "canal": "canal 33",
        "programa": "La Mejor Noticia"
      },      
      programa17 = { 
        "dia": "domingo",
        "horainicio": "07:00 PM",
        "horafinal": "07:30 PM",
        "canal": "canal 33",
        "programa": "Expedientes 33"
      },      
      programa18 = { 
        "dia": "domingo",
        "horainicio": "07:30 PM",
        "horafinal": "09:00 PM",
        "canal": "canal 33",
        "programa": "Focos"
      },      
      programa19 = { 
        "dia": "domingo",
        "horainicio": "09:00 PM",
        "horafinal": "09:30 PM",
        "canal": "canal 33",
        "programa": "Speed Tv"
      },      
      programa20 = { 
        "dia": "domingo",
        "horainicio": "09:30 PM",
        "horafinal": "10:00 PM",
        "canal": "canal 33",
        "programa": "Así Ocurrió en America"
      },      
      programa21 = { 
        "dia": "domingo",
        "horainicio": "10:00 PM",
        "horafinal": "10:30 PM",
        "canal": "canal 33",
        "programa": "Euromaxx"
      },      
      programa22 = { 
        "dia": "domingo",
        "horainicio": "10:30 PM",
        "horafinal": "11:00 PM",
        "canal": "canal 33",
        "programa": "Global 3000"
      }
];
//       console.log($scope.programas)


      // Account.getProfile()
      //   .then(function(response) {
      //     console.log(response.data.channel);
      //    Account.getSchedule(response.data.channel, $scope.dia)
      //      .then(function(response) {
      //       console.log(response);
      //     $scope.programas = response.data;
      //   });
      //     Account.getCopyright(response.data.channel)
      //      .then(function(response) {
      //       console.log(response);
      //    // $scope.programas = response.data;
      //   });           
      //})



      // Account.getProfile()
      //   .then(function(response) {
      //     console.log(response.data.channel);
      //    Account.getCopyright(response.data.channel)
      //      .then(function(response) {
      //       console.log(response);
      //     $scope.programas = response.data;
      //   });
      //  })



      }

    $scope.updateProfile = function() {
       console.log($scope.programas);
      // console.log($scope.programa2);

      Account.saveHorario($scope.programas)
        .then(function() {
        console.log('update');
        })
        .catch(function(response) {
        });
    };



    $scope.getProfile();
  });

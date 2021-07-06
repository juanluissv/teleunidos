var theApp37 = angular.module('theApp37', []);
theApp37.controller('horariosCtrl', function($http, $scope, $auth, toastr, Account) {

$scope.dia = "lunes";



    $scope.getProfile = function() {
      // $scope.programas = [
      // programa1 = { 
      //   "dia": "lunes",
      //   "canal": "canal 33",
      //   "horainicio": "11:00 AM",
      //   "horafinal": "12:00 PM",
      //   "programainicial": "showbiz"
      // },
      //  programa2 = { 
      //   "dia": "lunes",
      //   "horainicio": "06:00 PM",
      //   "horafinal": "06:30 PM",
      //   "canal": "canal 33",
      //   "programainicial": "Dinero CNN"
      // }
      //  programa3 = { 
      //   "dia": "lunes",
      //   "horainicio": "07:30 AM",
      //   "horafinal": "08:00 AM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      //  programa4 = { 
      //   "dia": "lunes",
      //   "horainicio": "08:00 AM",
      //   "horafinal": "08:30 AM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      //  programa5 = { 
      //   "dia": "lunes",
      //   "horainicio": "09:30 AM",
      //   "horafinal": "10:00 AM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      //  programa6 = { 
      //   "dia": "lunes",
      //   "horainicio": "10:00 AM",
      //   "horafinal": "11:30 AM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      //  programa7 = { 
      //   "dia": "lunes",
      //   "horainicio": "11:30 AM",
      //   "horafinal": "12:00 PM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      //  programa8 = { 
      //   "dia": "lunes",
      //   "horainicio": "01:00 PM",
      //   "horafinal": "02:30 PM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      // programa9 = { 
      //   "dia": "lunes",
      //   "horainicio": "03:00 PM",
      //   "horafinal": "03:30 PM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      // programa10 = { 
      //   "dia": "lunes",
      //   "horainicio": "03:30 PM",
      //   "horafinal": "04:00 PM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },
      // programa11 = { 
      //   "dia": "lunes",
      //   "horainicio": "09:30 PM",
      //   "horafinal": "10:30 PM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // },      
      // programa12 = { 
      //   "dia": "lunes",
      //   "horainicio": "10:30 PM",
      //   "horafinal": "11:30 PM",
      //   "canal": "canal 33",
      //   "programainicial": ""
      // }
//];
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
      // console.log($scope.programa1);
      // console.log($scope.programa2);

      Account.saveSchedule($scope.programas)
        .then(function() {
        console.log('update');
        })
        .catch(function(response) {
        });
    };



    $scope.getProfile();
  });

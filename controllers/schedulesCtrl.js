var theApp35 = angular.module('theApp35', []);
theApp35.controller('schedulesCtrl', ['$scope', '$stateParams', 'orderByFilter', '$http', '$auth', 'toastr', 'Account', function($scope,  $stateParams,  orderBy, $http, $auth, toastr, Account) {


$scope.dia = "lunes";

$scope.getviews = function() {
  Account.getProfile().then(function(response) {
      $scope.theview = response.data.live;
      $scope.thecanal = response.data.channel;
        $scope.nombre = response.data.nombre;
      
         theurl = response.data.live;
  });

};
$scope.getviews();

var mydia = "lunes"
var micanal = "esitv"


    $scope.getProfile = function() {
//       $scope.programas = [
//       programa1 = { 
//         "dia": mydia,
//         "canal": micanal,
//         "horainicio": "12:00 AM",
//         "horafinal": "05:30 AM",
//        },
//       programa2 = { 
//         "dia": mydia,
//         "canal": micanal,
//         "horainicio": "05:30 AM",
//         "horafinal": "06:00 AM"
//         },
//       programa3 = { 
//         "dia": mydia,
//         "canal": micanal,
//         "horainicio": "06:00 AM",
//         "horafinal": "06:30 AM"
//       },
//        programa4 = { 
//         "dia": mydia,
//         "horainicio": "06:30 AM",
//         "horafinal": "07:00 AM",
//         "canal": micanal
//       },
//        programa5 = { 
//         "dia": mydia,
//         "horainicio": "07:00 AM",
//         "horafinal": "07:30 AM",
//         "canal": micanal
//       },
//        programa6 = { 
//         "dia": mydia,
//         "horainicio": "07:30 AM",
//         "horafinal": "08:00 AM",
//         "canal": micanal
//       },
//        programa7 = { 
//         "dia": mydia,
//         "horainicio": "08:00 AM",
//         "horafinal": "08:30 AM",
//         "canal": micanal
//       },
//        programa8 = { 
//         "dia": mydia,
//         "horainicio": "08:30 AM",
//         "horafinal": "09:00 AM",
//         "canal": micanal
//       },
//        programa9 = { 
//         "dia": mydia,
//         "horainicio": "09:00 AM",
//         "horafinal": "09:30 AM",
//         "canal": micanal
//       },
//        programa10 = { 
//         "dia": mydia,
//         "horainicio": "09:30 AM",
//         "horafinal": "10:00 AM",
//         "canal": micanal
//       },
//       programa11 = { 
//         "dia": mydia,
//         "horainicio": "10:00 AM",
//         "horafinal": "10:30 AM",
//         "canal": micanal
//       },
//       programa12 = { 
//         "dia": mydia,
//         "horainicio": "10:30 AM",
//         "horafinal": "11:00 AM",
//         "canal": micanal
//       },
//       programa13 = { 
//         "dia": mydia,
//         "horainicio": "11:00 AM",
//         "horafinal": "11:30 AM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa14 = { 
//         "dia": mydia,
//         "horainicio": "11:30 AM",
//         "horafinal": "12:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa15 = { 
//         "dia": mydia,
//         "horainicio": "12:00 PM",
//         "horafinal": "12:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa16 = { 
//         "dia": mydia,
//         "horainicio": "12:30 PM",
//         "horafinal": "01:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa17 = { 
//         "dia": mydia,
//         "horainicio": "01:00 PM",
//         "horafinal": "01:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa18 = { 
//         "dia": mydia,
//         "horainicio": "01:30 PM",
//         "horafinal": "02:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa19 = { 
//         "dia": mydia,
//         "horainicio": "02:00 PM",
//         "horafinal": "02:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },
//       programa20 = { 
//         "dia": mydia,
//         "horainicio": "02:30 PM",
//         "horafinal": "03:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa21 = { 
//         "dia": mydia,
//         "horainicio": "03:00 PM",
//         "horafinal": "03:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa22 = { 
//         "dia": mydia,
//         "horainicio": "03:30 PM",
//         "horafinal": "04:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa23 = { 
//         "dia": mydia,
//         "horainicio": "04:00 PM",
//         "horafinal": "04:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa24 = { 
//         "dia": mydia,
//         "horainicio": "04:30 PM",
//         "horafinal": "05:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa25 = { 
//         "dia": mydia,
//         "horainicio": "05:00 PM",
//         "horafinal": "05:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa26 = { 
//         "dia": mydia,
//         "horainicio": "05:30 PM",
//         "horafinal": "06:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa27 = { 
//         "dia": mydia,
//         "horainicio": "06:00 PM",
//         "horafinal": "06:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa28 = { 
//         "dia": mydia,
//         "horainicio": "06:30 PM",
//         "horafinal": "07:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa29 = { 
//         "dia": mydia,
//         "horainicio": "07:00 PM",
//         "horafinal": "07:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa30 = { 
//         "dia": mydia,
//         "horainicio": "07:30 PM",
//         "horafinal": "08:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa31 = { 
//         "dia": mydia,
//         "horainicio": "08:00 PM",
//         "horafinal": "08:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa32 = { 
//         "dia": mydia,
//         "horainicio": "08:30 PM",
//         "horafinal": "09:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa33 = { 
//         "dia": mydia,
//         "horainicio": "09:00 PM",
//         "horafinal": "09:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa34 = { 
//         "dia": mydia,
//         "canal": micanal,
//         "horainicio": "09:30 PM",
//         "horafinal": "10:00 PM",
//         "programainicial": ""
//       },
//       programa35 = { 
//         "dia": mydia,
//         "horainicio": "10:00 PM",
//         "horafinal": "10:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa36 = { 
//         "dia": mydia,
//         "horainicio": "10:30 PM",
//         "horafinal": "11:00 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa37 = { 
//         "dia": mydia,
//         "horainicio": "11:00 PM",
//         "horafinal": "11:30 PM",
//         "canal": micanal,
//         "programainicial": ""
//       },      
//       programa38 = { 
//         "dia": mydia,
//         "horainicio": "11:30 PM",
//         "horafinal": "12:00 AM",
//         "canal": micanal,
//         "programainicial": ""
//       }
// ];


}

var value1 = false;
var value2 = true;
  var thearray = [];
  $scope.theprog =  $stateParams.id;




var mydatum = function() {


  $scope.getPrograma = function() {
    Account.getProgramas($scope.theprog).then(function(response) {
    $scope.datum = response.data  
      console.log('datum')  
      console.log($scope.datum)


  Account.getSchedule($scope.theprog, $scope.dia).then(function(response) {
    $scope.programatics2 = response.data;

    function bubble_Sort(a) {
      var swapp;
      var n =  $scope.programatics2.length-1;
      var x=a;
      do {
          swapp = false;
          for (var i=0; i < n; i++)
          {
              if ( (moment($scope.programatics2[i].horainicio, "h:mm A").format("HH:mm")) > (moment($scope.programatics2[i + 1].horainicio, "h:mm A").format("HH:mm")) )
              {
                var temp = $scope.programatics2[i];
                $scope.programatics2[i] = $scope.programatics2[i+1];
                $scope.programatics2[i+1] = temp;
                swapp = true;
              }
              }
              n--;
            } while (swapp);
        return $scope.programatics2; 
      }
      $scope.programas = bubble_Sort($scope.programatics2)
      //$scope.programafinales = $scope.programas;
      console.log($scope.programafinales)
    });

    Account.getSchedule($scope.theprog, $scope.dia).then(function(response) {
      $scope.programafinales = response.data;
      console.log('programafinales')
      console.log($scope.programafinales)
      });
    })
  };
$scope.getPrograma()

}
mydatum()











    $scope.updateProfile = function() {
      console.log($scope.programas)
console.log('m')
         console.log($scope.programafinales)
       //Account.saveSchedule($scope.programas, $scope.programafinales)
      //   .then(function() {
      //   console.log('save');
      //   })

      Account.updateSchedules($scope.programas, $scope.programafinales).then(function() {
        console.log('update');
        toastr.info('Tus cambios han sido guardados');
        })
    };



    $scope.getProfile();
  }]);

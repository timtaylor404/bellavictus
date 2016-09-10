angular.module('FarmersMarket', [])
      .controller('FarmersController', fController)
//.factory('farmZips',farmFactory)


fController.$inject = ['farmZips', '$http'];
//farmFactory.$inject = ["$http"]


function fController(farmZips, $http) {
      var fCtrl = this;

      fCtrl.getCity = function () {
            var zip = fCtrl.findZip(fCtrl.city)
            console.log(zip);
            if ($http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zip)
                  .then(function (response) {
                        console.log("response from API:", response.data);

                  })


//               } else {

//               }
//               // $http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zip )
//               //       .then(function(response){
//               //       console.log("response from API:", response.data);

//               // });
//          }

//           fCtrl.findZip = function(city){
//             var zipcodesFound = farmZips.cityList
//             .filter(function(cityGroup){
//               // console.log(cityGroup.City, city.toUpperCase())
//               return cityGroup.City === city.toUpperCase();
//             })
//             console.log(zipcodesFound)
//             return zipcodesFound.pop()
//           }
//     }

// function farmFactory ($http) {
//   var data = {};

//   $http.get( "/citylist.json")
//     .then(function(res){
//         data.cityList = res.data;
//         console.log(res);
//     });

//   return data;

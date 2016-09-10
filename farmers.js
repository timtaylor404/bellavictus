angular.module('FarmersMarket', [])
        .controller('FarmersController', fController)


fController.$inject = ['$http'];


function fController($http) {
        var fCtrl = this;
        fCtrl.marketInfo = [];
        fCtrl.restaurants = [];

        fCtrl.getGroups = function () {
                $http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + fCtrl.zip)
                        .then(function (response) {
                                console.log("response from API:", response.data);
                                // fCtrl.data = response.data;

                                for (var i = 0; i < Math.min(response.data.results.length, 4); i++) {
                                        //  console.log("hello",response.data.results[i])
                                        (function (i) {


                                                $http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + response.data.results[i].id)
                                                        .then(function (res) {
                                                                console.log("response from API2:", res.data);
                                                                res.data.marketdetails.marketname = response.data.results[i].marketname;
                                                                fCtrl.marketInfo.push(res.data.marketdetails)
                                                        })
                                        })(i);
                                }
                        })


        }

        //  This is the Function to recieve restaurant data from yelp API
        // also remember to place the yelp api logo in your midterm

        fCtrl.getRestaurant = function () {
                // console.log("call")
        
                $http({
                        url: 'https://api.foursquare.com/v2/venues/search',
                        method: "JSONP",
                        params: {
                                // response: 'response.data.results.name',
                                client_id: 'QXCAVJVN4HSKK1ZVC3QRL4P0D0B4ZSEEY14MO4VFF42RCGS0',
                                client_secret: 'U5EBPYAYWIOAAGBKJASNXWN4N3WPOWGNEPVATU1L0XQW2MCR',
                                v:'20140806',
                                near:'boulder+colorado',
                                fCtrl:'zip',
                                query:'organic restaurants',
                                callback:'JSON_CALLBACK',

                        }
                })
                        .then(function (res) {
                                console.log("response from API:", res.data);
                                var name = res.data.response.venues[0].name;
                                fCtrl.restaurants.name = res.data.response.venues.name;
                                console.log("the name is  " + name);
                        })
        }







        //         var fCtrl.data
        // fCtrl.ID = fCtrl.yourCity.id;
        // fCtrl.marketInfo = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + id + fCtrl.yourCity.id;
        // fCtrl.market = fCtrl.yourCity.mktDetail;

}
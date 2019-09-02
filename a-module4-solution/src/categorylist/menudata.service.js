(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];

function MenuDataService($http) {
  // service = this;不要省略var！！！！
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    })
    .then(function (response) {
      // console.log("MenuDataService is reached");
      // console.log(response.data);
      return response.data;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json?",
      params:{category: categoryShortName}
      // params:{category: "categoryShortName"}
      // url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
    })
    .then(function(response) {
      // console.log(response);
      return response.data.menu_items;
    });
  };

}

})();
//
// service.getAllCategories = function() {
//     return $http({
//         method: "GET",
//         url: (ApiBasePath + '/categories.json')
//     }).then(function(response) {;
//         return response.data;
//     });
// };



  // service.getAllCategories = function () {
  //   // console.log("this is reached");
  //   return $http({
  //     method: "GET",
  //     url: "https://davids-restaurant.herokuapp.com/categories.json"
  //   });
  // 错误示范

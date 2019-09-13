(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','Food2ForkApi'];
function MenuService($http,ApiPath,Food2ForkApi) {
  var service = this;
  service.user = {};

  service.saveUser = function (user) {
    service.user = user;
    console.log('user saved');
    console.log('the user:', service.user);
  }

  service.getUser = function () {
    return service.user;
  }

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getFavoriteDish = function (shortname) {

    return $http.get(ApiPath + '/menu_items/' + shortname + '.json');
  };

  service.searchRecipe = function (recipename) {
    var promise = $http.get(Food2ForkApi + recipename);
    // var str = Food2ForkApi + recipename;
    // console.log(str);
    return promise.then(function(response) {
      return response.data;
    });
  };

}

})();

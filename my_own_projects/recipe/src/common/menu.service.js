(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http,ApiPath) {
  var service = this;
  service.user = {};
  service.puppyRecipe = '';

  service.saveUser = function (user) {
    service.user = user;
    console.log('user saved');
    console.log('the user:', service.user);
  };

  service.getUser = function () {
    return service.user;
  };

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
      // console.log(response);
      return response.data;
    });
  };


  service.getFavoriteDish = function (shortname) {
    return $http.get(ApiPath + '/menu_items/' + shortname + '.json');
  };



  service.saveSearch = function (puppyRecipe) {
    console.log(puppyRecipe);
    service.puppyRecipe = puppyRecipe;
    console.log('search item saved!');
    console.log('the item is', service.puppyRecipe);
  };



  service.searchRecipe = function (recipename) {
    console.log("not working!");
    // var promise = $http.get(RecipePuppy +'?q=' + recipename);
    // return promise.then(function(response) {
    //   console.log(response.data);
    //   return response.data;
  }

}

})();

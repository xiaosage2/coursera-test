(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath'," https://davids-restaurant.herokuapp.com")
.directive('foundItems',foundItems);


function foundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope:{
         foundItems: '<',
         onRemove: '&'
     },
    controller: NarrowItDownController,
    controllerAs: 'ctrl1',
    bindToController: true
  };
  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var ctrl1 = this;
  ctrl1.searchItem = '';
  ctrl1.message = '';
  // ctrl1.found = [];

  ctrl1.retriveMatchedMenuItem = function (searchItem) {
    var promise = MenuSearchService.getMatchedMenuItems(searchItem);
    // console.log(promise);
    promise.then(function (items){
        if (items && items.length > 0){
            ctrl1.found = items;
            // console.log(ctrl1.found);
        }
        else{
          ctrl1.found = [];
          ctrl1.message = "Nothing found";
        }
      }
    );
    return ctrl1.found;
  };

  ctrl1.removeMatchedMenuItem = function (itemIndex) {
    ctrl1.found.splice(itemIndex,1);
  }
}


MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
  var service = this;

// *****
  service.getMatchedMenuItems = function (searchItem) {

    return $http({
        method: 'GET',
      url: (ApiBasePath  + '/menu_items.json')
      })  // http returns a promise to concatenate
    .then(function (response) {
      foundItems = [];
      // console.log(response);
      for(var i = 0; i < response.data['menu_items'].length; i++)
      {
        if (searchItem && response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchItem) != -1) {
          foundItems.push(response.data['menu_items'][i]);
        }
      }
        // console.log(foundItems);
        return foundItems;
    });
  };
}

})();
(function () {
'use strict';

// angular.module('data')
angular.module('MenuApp')
.controller('MenucategoryController', MenucategoryController);

MenucategoryController.$inject= ['MenuDataService','categories'];

function MenucategoryController(MenuDataService, categories) {
  var mainList = this;
  // mainList.xiaosage = "lalalala";
  mainList.categories = categories;
  // console.log(categories);
  // console.log("MenucategoryController reached");
  // console.log(mainList.categories);
}



// MenucategoryController.$inject = ['MenuDataService'];
//
// function MenucategoryController(MenuDataService) {
//   var mainList = this;
//   // mainList.xiaosage = "lalalala";
//   console.log("MenucategoryController reached");
//   console.log(mainList.categories);
//
// }

})();

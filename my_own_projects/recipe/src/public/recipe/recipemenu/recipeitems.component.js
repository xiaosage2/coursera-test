(function () {
'use strict';

angular.module('public')
.component('recipeItems',{
  templateUrl:'src/public/recipe/recipemenu/recipeitems.component.html',
  bindings:{
    item: '<'
  }
});

})();

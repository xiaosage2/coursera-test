(function() {
'use strict';

angular.module('public')
.controller('RecipeSearchController',RecipeSearchController);

RecipeSearchController.$inject=['recipes'];
function RecipeSearchController(recipes) {
  var recipectrl = this;
  // recipectrl.searchrecipe = '';
  recipectrl.count = recipes.count;
  recipectrl.recipes = recipes.recipes;
  console.log(recipectrl.recipes);
  // console.log(recipectrl.searchrecipe);
}


})();

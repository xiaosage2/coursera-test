(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup',{
      url: '/signup',
      templateUrl: 'src/public/sign-up/sign-up.html',
      controller: 'SignupController as signctrl'
    })
    .state('public.myinfo',{
      url: '/myinfo',
      templateUrl:'src/public/myinfo/myinfo.html',
      controller: 'ShowInfoController as infoctrl',
      resolve:{
        info: ['MenuService',function (MenuService) {
            return MenuService.getUser();
        }]
      }
    })
    .state('public.recipe',{
      url:'/recipe',
      templateUrl:'src/public/recipe/public.recipe.html',
      controller:'SearchPreController as searchctrl'
    })
    .state('public.recipemenu',{
      url:'/recipemenu',
      templateUrl:'src/public/recipe/recipemenu/recipemenu.html',
      controller:'RecipeSearchController as recipectrl',
      resolve:{
        recipes:['MenuService',function (MenuService) {
          // console.log(MenuService.searchRecipe('Chinese'));
          return MenuService.searchRecipe(MenuService.searchrecipe);
        }]
      }
    });



}
})();

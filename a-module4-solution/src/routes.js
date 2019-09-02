(function () {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider) {

  // redirct to home page if no link mateches
  $urlRouterProvider.otherwise('/');

  // set up ui states
  $stateProvider

  .state('home',{
    url: '/',
    templateUrl: 'src/categorylist/template/home.template.html'
  })

  .state('menucategory',{
    url: '/menucategory',
    templateUrl: 'src/categorylist/template/menucategory.template.html',
    controller: "MenucategoryController as mainList",
    resolve: {
      categories:['MenuDataService',function (MenuDataService) {
        // console.log(MenuDataService.getAllCategories());
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items',{
    url:'/items/{short_name}',
    templateUrl:'src/categorylist/template/menuitems.template.html',
    controller:"MenuitemsController as itemlist",
    resolve:{
      items:['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
        // console.log(MenuDataService.getItemsForCategory($stateParams.short_name));
        return MenuDataService.getItemsForCategory($stateParams.short_name);
      }]
    }
  });

}


})();

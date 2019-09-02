(function () {
'use strict';

angular.module('MenuApp')//? why not use module 'data'
.component('categories',{
  templateUrl: 'src/categorylist/template/menucategory.details.template.html',
  bindings:{
    categories: '<'
  }
});



})();

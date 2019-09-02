(function () {
'use strict';

angular.module('MenuApp')
.component('itemslist',{
  templateUrl: 'src/categorylist/template/menuitems.details.template.html',
  bindings:{
    items: '<'
  }
});



})();

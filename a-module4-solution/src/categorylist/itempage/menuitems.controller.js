(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuitemsController',MenuitemsController);

MenuitemsController.$inject = ['items'];

function MenuitemsController(items) {
  var itemlist = this;

  itemlist.items = items;
  // console.log('MenuitemsController is ok');
  // console.log(itemlist.items);

}



})();

(function () {
'use strict';

angular.module('public')
.controller('SearchPreController',SearchPreController);

SearchPreController.$inject = ['MenuService'];
function SearchPreController(MenuService) {
    var searchctrl = this;

    searchctrl.searchrecipe = '';

    searchctrl.submit = function (search) {
      MenuService.saveSearch(search);
    };
}

})();

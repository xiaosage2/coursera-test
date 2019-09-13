(function () {
'use strict';

angular.module('public')
.controller('SignupController',SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signctrl = this;

  signctrl.user = {};
  signctrl.user.favoritecategory = {};

  signctrl.submit = function (shortname) {
    console.log('the shortname of the favorite dish:', shortname);
    var promise = MenuService.getFavoriteDish(shortname);
    // console.log(promise);
    promise.then(function (response) {
      signctrl.user.favoritecategory = response.data;
      // console.log(signctrl.user.favoritecategory);
      MenuService.saveUser(signctrl.user);
      signctrl.user.show = true;
    }, function (error) {
      console.log(error);
      signctrl.user.showerror = true;
    });


  };
}

})();

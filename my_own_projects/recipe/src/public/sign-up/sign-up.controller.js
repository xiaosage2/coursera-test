(function () {
'use strict';

angular.module('public')
.controller('SignupController',SignupController);

SignupController.$inject = ['MenuService','$state'];
function SignupController(MenuService,$state) {
  var signctrl = this;

  signctrl.user = {};
  signctrl.user.favoritecategory = {};

  signctrl.submit = function (shortname) {
    console.log('the shortname of the favorite dish:', shortname);
    var promise = MenuService.getFavoriteDish(shortname);
    // console.log("promise data",promise);
    promise.then(function (response) {
      signctrl.user.favoritecategory = response.data;
      // console.log("response.data",signctrl.user.favoritecategory);
      MenuService.saveUser(signctrl.user);
      signctrl.user.show = true;
      $state.go('public.myinfo');
    }, function (error) {
      console.log(error);
      signctrl.user.showerror = true;
    });


  };
}

})();

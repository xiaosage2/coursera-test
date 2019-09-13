( function () {
'use strict';

angular.module('public')
.controller('ShowInfoController',ShowInfoController);

ShowInfoController.$inject = ['info','ApiPath'];
function ShowInfoController(info,ApiPath) {
  var infoctrl = this;
  infoctrl.ApiPath = ApiPath;

  if(angular.equals(info,{}))
  {
      infoctrl.showerror = true;
  }
  else {
    infoctrl.info = info;
    infoctrl.showerror = false;
  }


  console.log('ShowInfoController',infoctrl.info);
}

})();

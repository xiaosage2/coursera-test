(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var ctrl1 = this;

  ctrl1.tobuylist = ShoppingListCheckOffService.getToBuyList();

  ctrl1.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  };


}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var ctrl2 = this;
  ctrl2.boughtlist = ShoppingListCheckOffService.getBoughtList();
}


function ShoppingListCheckOffService(){
  var service = this;
  var tobuylist = [
        { itemName: "cookies", quantity: 10 },
        { itemName: "pears", quantity: 2 },
        { itemName: "beans", quantity: 6 },
        { itemName: "apples", quantity: 4 },
        { itemName: "bananas", quantity: 7 }
      ];
  var boughtlist = [];

  service.buyItem = function (itemIndex){
    var item = tobuylist[itemIndex];

    boughtlist.push(item);
    tobuylist.splice(itemIndex,1);

  };

  service.getToBuyList = function() {
    return tobuylist;
  };

  service.getBoughtList = function() {
    return boughtlist;
  };

}

})();

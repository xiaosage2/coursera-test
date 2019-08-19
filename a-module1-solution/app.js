(function() {

'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);


LunchCheckController.$inject = ['$scope'];


function LunchCheckController($scope){

  $scope.displayMessage = function(){

      if($scope.lunchdishes)
      {
        //split string
        $scope.words = $scope.lunchdishes.split(',');
        var len = $scope.words.length;
        len = len - checkForEmptyItem($scope.words);
        // console.log(len);

        // displayMessage
        if (len <= 3) {
          $scope.msg = "Enjoy!";
        }
        else {
          $scope.msg = "Too Much!";
        }
      }
      else {
          $scope.msg = "Please enter data first";
      }

  };


function checkForEmptyItem(params)
{
  var emptynum = 0; //number of empty
  for(var i = 0; i < params.length; i++)
  {
    if (!params[i])
    {
      emptynum++;
    }
  }
  return emptynum;
}



}

})();

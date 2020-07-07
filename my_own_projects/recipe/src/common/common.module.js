(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://xiaosage.herokuapp.com')
// .constant('Food2ForkApi','https://www.food2fork.com/api/search?key=c61e809d9d9efe00067b50c6734ee31b&q=')
.constant('RecipePuppy','http://www.recipepuppy.com/api/')

.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

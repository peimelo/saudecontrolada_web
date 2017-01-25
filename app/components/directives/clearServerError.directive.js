(function() {
 'use strict';

 angular
   .module('app')
   .directive('clearServerError', clearServerError);

 /** @ngInject */
 function clearServerError() {
   var directive = {
     restrict: 'A',
     require: '?ngModel',
     link: linkFunc
   };

   return directive;

   function linkFunc(scope, element, attrs, ctrl) {
     ctrl.$viewChangeListeners.push(function () {
       ctrl.$setValidity('server', true);
     });
   }
 }
})();

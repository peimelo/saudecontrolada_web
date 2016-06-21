// (function() {
//   'use strict';
//
//   angular
//     .module('app')
//     .directive('serverValidate', serverValidate);
//
//   /** @ngInject */
//   function serverValidate($rootScope, $timeout, $translate) {
//     var directive = {
//       restrict: 'A',
//       require: 'form',
//       link: linkFunc
//     };
//
//     return directive;
//
//     /** @ngInject */
//     function linkFunc($scope, $elem, $attrs, form) {
//       var invalidateField = function (field, errorType) {
//         var changeListener = function () {
//           field.$setValidity(errorType, true);
//
//           var index = field.$viewChangeListeners.indexOf(changeListener);
//           if (index > -1) {
//             field.$viewChangeListeners.splice(index, 1);
//           }
//         };
//
//         field.$setDirty();
//         field.$setValidity(errorType, false);
//         field.$viewChangeListeners.push(changeListener);
//       };
//
//       // $scope.$watch('formErrors', function (errors) {
//       $scope.$watch('serverErrors', function (errors) {
//         if (errors) {
//           angular.forEach(errors, function (error, field) {
//             if (field in form) {
//               invalidateField(form[field], 'server');
//             }
//           });
//         }
//       });
//     }
//   }
// })();

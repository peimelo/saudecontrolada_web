//(function() {
//  'use strict';
//
//  angular
//    .module('app')
//    .directive('clearServerError', clearServerError);
//
//  /** @ngInject */
//  function clearServerError() {
//    var directive = {
//      restrict: 'A',
//      scope:{'onChange':'=' },
//      require: '?ngModel',
//      link: linkFunc
//    };
//
//    return directive;
//
//    function linkFunc(scope, element, attrs, ctrl) {
//      scope.$watch('onChange', function(nVal) {
//        ctrl.$setValidity('server', true);
//      });
//      //element.on('change', function() {
//      //  scope.$apply(function() {
//      //    ctrl.$setValidity('server', true);
//      //  });
//      //});
//    }
//  }
//
//})();

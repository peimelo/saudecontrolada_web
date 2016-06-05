(function() {
  'use strict';

  angular
    .module('app')
    .directive('sideNavigation', sideNavigation);

  /** @ngInject */
  function sideNavigation($timeout) {
    var directive = {
      restrict: 'A',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, element) {
      $timeout(function(){
        element.metisMenu();
      });
    }
  }
})();

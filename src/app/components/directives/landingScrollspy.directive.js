(function() {
  'use strict';

  angular
    .module('app')
    .directive('landingScrollspy', landingScrollspy);

  /** @ngInject */
  function landingScrollspy() {
    var directive = {
      restrict: 'A',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, element) {
      element.scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
      });
    }
  }
})();

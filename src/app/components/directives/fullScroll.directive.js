(function() {
  'use strict';

  angular
    .module('app')
    .directive('fullScroll', fullScroll);

  /** @ngInject */
  function fullScroll($timeout) {
    var directive = {
      restrict: 'A',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, element) {
      $timeout(function() {
        element.slimscroll({
          height: '100%',
          railOpacity: 0.9
        });
      });
    }
  }
})();

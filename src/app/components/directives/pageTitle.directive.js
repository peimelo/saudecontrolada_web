(function() {
  'use strict';

  angular
    .module('app')
    .directive('pageTitle', pageTitle);

  /** @ngInject */
  function pageTitle($rootScope, $timeout) {
    var directive = {
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, element) {
      var listener = function(event, toState) {
        // Default title - load on Dashboard 1
        var title = 'Saúde Controlada | Cuidando de você';
        // Create your own title pattern
        if (toState.data && toState.data.pageTitle) {
          title = toState.data.pageTitle + ' | Saúde Controlada';
        }
        $timeout(function() {
          element.text(title);
        });
      };
      $rootScope.$on('$stateChangeStart', listener);
    }
  }
})();

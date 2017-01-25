(function() {
  'use strict';

  angular
    .module('app')
    .directive('pageTitle', pageTitle);

  /** @ngInject */
  function pageTitle($rootScope, $timeout, $translate) {
    var directive = {
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, element) {
      var listener = function(event, toState) {
        var title = 'Saúde Controlada | Cuidando de você';

        if (toState.data && toState.data.pageTitle) {
          $translate(toState.data.pageTitle).then(function(pageTitle) {
            title = pageTitle + ' | Saúde Controlada';
          });
        }
        $timeout(function() {
          element.text(title);
        });
      };

      $rootScope.$on('$stateChangeStart', listener);
    }
  }
})();

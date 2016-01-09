(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($log, Permission, $rootScope) {
    permission();
    $log.debug('runBlock end');

    /** @ngInject */
    function permission() {
      // logged
      Permission.defineRole('logged', function() {
        if ($rootScope.user) {
          return true;
        }
        return false;
      });
    }

  }

})();

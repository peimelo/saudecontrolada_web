(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($log, Permission, toastr, $rootScope) {
    permission();
    $log.debug('runBlock end');

    /** @ngInject */
    function permission() {
      // logged
      Permission.defineRole('logged', function() {
        if ($rootScope.authentication_token) {
          return true;
        }
        else {
          // toastr.warning('Favor fazer o login para entrar.');
          return false;
        }
      });
    }

  }

})();

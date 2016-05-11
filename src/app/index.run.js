(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($confirmModalDefaults, $log, Permission, $rootScope) {
    angularConfirModal();
    permission();

    $log.debug('runBlock end');

    function angularConfirModal() {
      $confirmModalDefaults.defaultLabels.title = 'Confirmação';
      $confirmModalDefaults.defaultLabels.ok = 'Sim';
      $confirmModalDefaults.defaultLabels.cancel = 'Não';
    }

    function permission() {
      // logged
      Permission.defineRole('logged', function() {
        if ($rootScope.authentication_token) {
          return true;
        }
        else {
          return false;
        }
      });
    }
  }

})();

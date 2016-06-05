(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($confirmModalDefaults, $log, Permission, $rootScope, $state) {
    angularConfirmModal();
    permission();
    state();

    $log.debug('runBlock end');

    // TODO: translate
    function angularConfirmModal() {
      $confirmModalDefaults.defaultLabels.title = 'Confirmação';
      $confirmModalDefaults.defaultLabels.ok = 'Sim';
      $confirmModalDefaults.defaultLabels.cancel = 'Não';
    }

    function permission() {
      // logged
      Permission.defineRole('logged', function() {
        if ($rootScope.authenticationToken) {
          return true;
        }
        else {
          return false;
        }
      });
    }

    function state() {
      $rootScope.$state = $state;
    }
  }
})();

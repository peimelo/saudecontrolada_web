(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($confirmModalDefaults, $log, Permission, $rootScope,
                    $state, $templateCache) {
    angularConfirmModal();
    blockUIConfigTemplate();
    permission();
    state();

    $log.debug('runBlock end');

    // TODO: translate
    function angularConfirmModal() {
      $confirmModalDefaults.defaultLabels.title = 'Confirmação';
      $confirmModalDefaults.defaultLabels.ok = 'Sim';
      $confirmModalDefaults.defaultLabels.cancel = 'Não';
    }

    function blockUIConfigTemplate() {
      $templateCache.put('angular-block-ui/angular-block-ui.ng.html',
        '<div class="block-ui-overlay"></div> \
        <div class="block-ui-message-container" aria-live="assertive" aria-atomic="true"> \
          <div class="block-ui-message" ng-class="$_blockUiMessageClass"> \
            <p class="text-center"><i class="fa fa-heartbeat fa-2x"></i></p>  \
            <div class="sk-spinner sk-spinner-three-bounce"> \
              <div class="sk-bounce1"></div> \
              <div class="sk-bounce2"></div> \
              <div class="sk-bounce3"></div> \
            </div> \
          </div> \
        </div>'
      );
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

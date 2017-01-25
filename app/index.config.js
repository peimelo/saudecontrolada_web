(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config(blockUIConfig, gravatarServiceProvider, $httpProvider,
                  $logProvider, moment) {
    blockUIConfigTemplate();
    enabledLog();
    gravatarConfig();
    httpProviderConfig();
    momentConfig();

    function blockUIConfigTemplate() {
      blockUIConfig.templateUrl = 'angular-block-ui/angular-block-ui.ng.html';
    }

    function enabledLog() {
      $logProvider.debugEnabled(true);
    }

    function gravatarConfig() {
      gravatarServiceProvider.defaults = {
        size     : 48,
        'default': 'mm'  // Mystery man as default for missing avatars
      };
    }

    function httpProviderConfig() {
      $httpProvider.interceptors.push('httpInterceptor');
    }

    function momentConfig() {
      moment.locale('pt-br');
    }
  }
})();

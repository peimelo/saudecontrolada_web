(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config(gravatarServiceProvider, $httpProvider, $logProvider, moment, toastr) {
    enabledLog();
    gravatarConfig();
    httpProviderConfig();
    momentConfig();
    toastrConfig();

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

    function toastrConfig() {
      toastr.options.timeOut = 7000;
      toastr.options.positionClass = 'toast-top-center';
      toastr.options.preventDuplicates = true;
      toastr.options.progressBar = true;
    }
  }
})();

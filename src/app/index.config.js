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
      toastr.options.timeOut = 4000;
      toastr.options.positionClass = 'toast-top-right';
      toastr.options.preventDuplicates = true;
      toastr.options.progressBar = true;
    }
  }

})();

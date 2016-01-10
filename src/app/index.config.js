(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, moment, toastr, $httpProvider) {
    enabledLog();
    httpProviderConfig();
    momentConfig();
    toastrConfig();

    function enabledLog() {
      $logProvider.debugEnabled(true);
    }

    function httpProviderConfig() {
      $httpProvider.interceptors.push('httpInterceptor');
    }

    function momentConfig() {
      moment.locale('pt-br');
    }

    function toastrConfig() {
      toastr.options.timeOut = 3000;
      toastr.options.positionClass = 'toast-top-right';
      toastr.options.preventDuplicates = true;
      toastr.options.progressBar = true;
    }
  }

})();

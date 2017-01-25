(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('accredit', {
        abstract: true,
        templateUrl: 'app/accredit/accredit.html'
      });
  }
})();

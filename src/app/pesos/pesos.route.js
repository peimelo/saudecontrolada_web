(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('pesos', {
      url: '/pesos',
      controller: 'PesosController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'Pesos',
        permissions: {
          only: ['logged'],
          redirectTo: 'login'
        }
      },
      templateUrl: 'app/pesos/pesos.html'
    });
  }
})();

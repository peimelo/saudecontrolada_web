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
        pageTitle: 'WEIGHTS',
        permissions: {
          only: ['logged'],
          redirectTo: 'accredit.login'
        }
      },
      ncyBreadcrumb: {
        label: 'Pesos',
        parent: 'home'
      },
      templateUrl: 'app/pesos/pesos.html'
    });
  }
})();

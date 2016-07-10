(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('weights', {
      url: '/weights',
      controller: 'WeightsController',
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
      templateUrl: 'app/weights/weights.html'
    });
  }
})();

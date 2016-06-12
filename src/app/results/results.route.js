(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('results', {
      url: '/results',
      controller: 'ResultsController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'RESULTS',
        permissions: {
          only: ['logged'],
          redirectTo: 'accredit.login'
        }
      },
      ncyBreadcrumb: {
        label: 'Results',
        parent: 'home'
      },
      templateUrl: 'app/results/results.html'
    });
  }
})();

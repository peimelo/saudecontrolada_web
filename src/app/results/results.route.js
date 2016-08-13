(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('results', {
        abstract: true,
        controller: 'ResultsController',
        controllerAs: 'vm',
        url: '/results',
        templateUrl: 'app/components/views/layouts/content.html'
      })
      .state('results.list', {
        url: '',
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
        templateUrl: 'app/results/results.list.html'
      })
      .state('results.detail', {
        url: '/:id',
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
        templateUrl: 'app/results/results.detail.html'
      });
  }
})();

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
        templateUrl: 'app/components/views/layouts/content.html'
      })
      .state('results.list', {
        url: '/results',
        controller: 'ResultsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'TESTS_RESULTS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        ncyBreadcrumb: {
          label: 'Resultado de Exames',
          parent: 'home'
        },
        params: {
          page: null,
        },
        templateUrl: 'app/results/results.list.html'
      })
      .state('results.detail', {
        url: '/:id',
        controller: 'ResultsDetailController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'TESTS_RESULTS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        ncyBreadcrumb: {
          label: 'Detalhe',
          parent: 'results.list'
        },
        params: {
          page: null,
        },
        templateUrl: 'app/results/results.detail.html'
      });
  }
})();

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
        templateUrl: 'app/components/views/layouts/content.html',
        url: '/results'
      })
      .state('results.list', {
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
          page: null
        },
        templateUrl: 'app/results/results.list.html',
        url: ''
      })
      .state('results.detail', {
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
          id: null,
          page: null,
          result: null
        },
        resolve: {
          exams:  function(examsService) {
            return examsService.getExams();
          }
        },
        templateUrl: 'app/results/results.detail.html',
        url: '/:id'
      });
  }
})();

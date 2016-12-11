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
        data: {
          pageIcon: 'fa fa-file-text-o',
          pageTitle: 'TESTS_RESULTS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        templateUrl: 'app/components/views/layouts/content.html',
        url: '/results'
      })
      .state('results.list', {
        controller: 'ResultsController',
        controllerAs: 'vm',
        params: {
          page: null
        },
        templateUrl: 'app/results/results.list.html',
        url: ''
      })
      .state('results.detail', {
        controller: 'ResultsDetailController',
        controllerAs: 'vm',
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

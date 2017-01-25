(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('exams_graphics', {
        abstract: true,
        templateUrl: 'app/components/views/layouts/content.html',
        url: '/exams_graphics'
      })
      .state('exams_graphics.list', {
        controller: 'ExamsGraphicsListController',
        controllerAs: 'vm',
        data: {
          pageIcon: 'fa fa-line-chart',
          pageTitle: 'Gráficos de Exames',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        ncyBreadcrumb: {
          label: 'Gráficos dos Resultados de Exames',
          parent: 'home'
        },
        params: {
          page: null
        },
        templateUrl: 'app/exams-graphics/exams-graphics.list.html',
        url: ''
      })
      .state('exams_graphics.detail', {
        controller: 'ExamsGraphicsDetailController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Gráficos de Exames',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        params: {
          id: null,
          exam: null,
          page: null
        },
        resolve: {
          exams:  function(examsService) {
            return examsService.getExams();
          }
        },
        templateUrl: 'app/exams-graphics/exams-graphics.detail.html',
        url: '/:id'
      });
  }
})();

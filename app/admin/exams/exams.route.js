(function () {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.examsList', {
        controller: 'ExamsController',
        controllerAs: 'vm',
        data: {
          pageIcon: 'fa fa-flask',
          pageTitle: 'EXAMS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        params: {
          page: null
        },
        templateUrl: 'app/admin/exams/exams.html',
        url: '/exams'
      })
      .state('admin.examsDetail', {
        controller: 'ExamsDetailController',
        controllerAs: 'vm',
        data: {
          pageDetailIcon: 'fa fa-list-ol',
          pageDetailTitle: 'VALUES',
          pageIcon: 'fa fa-flask',
          pageTitle: 'EXAMS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        params: {
          id: null,
          page: null,
          exam: null
        },
        resolve: {
          references:  function(referencesService) {
            return referencesService.getAll();
          },
          units:  function(unitsService) {
            return unitsService.getUnits();
          }
        },
        templateUrl: 'app/admin/exams/exams.detail.html',
        url: '/exams/:id'
      });
  }
})();

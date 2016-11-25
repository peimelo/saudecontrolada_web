(function () {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.exams', {
        url: '/exams',
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
        ncyBreadcrumb: {
          label: 'Exams'
        },
        templateUrl: 'app/admin/exams/exams.html'
      });
  }
})();

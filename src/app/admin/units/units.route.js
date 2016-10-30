(function () {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.units', {
        url: '/units',
        controller: 'UnitsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'UNITS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        ncyBreadcrumb: {
          label: 'Units'
        },
        templateUrl: 'app/admin/units/units.html'
      });
  }
})();

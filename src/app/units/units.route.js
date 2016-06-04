(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('units', {
      url: '/units',
      controller: 'UnitsController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'UNITS',
        permissions: {
          only: ['logged'],
          redirectTo: 'login'
        }
      },
      ncyBreadcrumb: {
        label: 'Units',
        parent: 'home'
      },
      templateUrl: 'app/units/units.html'
    });
  }
})();

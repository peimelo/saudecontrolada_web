(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Painel',
          permissions: {
            only: ['logged'],
            redirectTo: 'login'
          }
        }
      });
  }

})();

(function() {
  'use strict';

  angular
    .module('app.weights')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('weights', {
        abstract: true,
        templateUrl: 'app/components/views/layouts/content.html'
      })
      .state('weights.list', {
        url: '/weights',
        controller: 'WeightsController',
        controllerAs: 'vm',
        data: {
          pageIcon: 'fa fa-balance-scale',
          pageTitle: 'WEIGHTS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        ncyBreadcrumb: {
          label: 'Pesos',
          parent: 'home'
        },
        templateUrl: 'app/weights/weights.html'
      });
  }
})();

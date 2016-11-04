(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('results.graphics', {
        url: '/results_graphics',
        controller: 'ResultsGraphicsController',
        controllerAs: 'vm',
        data: {
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
        templateUrl: 'app/results-graphics/results-graphics.list.html'
      });
  }
})();

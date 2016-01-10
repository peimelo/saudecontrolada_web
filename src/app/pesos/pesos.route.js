(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('pesos', {
        url: '/pesos',
        templateUrl: 'app/pesos/pesos.html',
        controller: 'PesosController',
        controllerAs: 'vm',
        data: {
          permissions: {
            only: ['logged'],
            redirectTo: 'login'
          }
        }
      });
  }

})();

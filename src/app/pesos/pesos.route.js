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
        templateUrl: 'app/pesos/index.html',
        controller: 'PesosController',
        controllerAs: 'vm'
      });
  }

})();

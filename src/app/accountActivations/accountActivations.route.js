(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('ativarConta', {
        url: '/account_activations/:id',
        templateUrl: 'app/accountActivations/accountActivations.html',
        controller: 'AccountActivationsController',
        controllerAs: 'vm'
      });
  }
})();

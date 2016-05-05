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
        controller: 'AccountActivationsController',
        controllerAs: 'vm',
        templateUrl: 'app/accountActivations/accountActivations.html'
      });
  }
})();

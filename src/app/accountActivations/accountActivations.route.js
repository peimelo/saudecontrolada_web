(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('confirmAccountActivation', {
        url: '/account_activations/:id?email',
        controller: 'AccountActivationsController'
      })
      .state('resentAccountActivation', {
        url: '/account_activations',
        controller: 'AccountActivationsController',
        controllerAs: 'vm',
        templateUrl: 'app/accountActivations/accountActivations.html',
        data: {
          pageTitle: 'Ativar minha conta',
          specialClass: 'gray-bg',
        }
      });
  }
})();

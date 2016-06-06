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
      .state('accredit.resentAccountActivation', {
        url: '/account_activations',
        data: {
          pageTitle: 'Ativar minha conta',
          specialClass: 'gray-bg',
          subTitle: 'Digite seu e-mail e você receberá instruções para ativá-la.'
        },
        views: {
          '': {
            controller: 'AccountActivationsController',
            controllerAs: 'vm',
            templateUrl: 'app/accredit/accountActivations/accountActivations.html'
          },
          'footer': {
            templateUrl: 'app/accredit/footer.html'
          },
          'links': {
            templateUrl: 'app/accredit/links.html'
          }
        }
      });
  }
})();

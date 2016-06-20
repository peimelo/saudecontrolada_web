(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('confirmation', {
        url: '/confirmations/:token',
        controller: 'ConfirmationController'
      })
      .state('accredit.resentConfirmation', {
        url: '/confirmations',
        data: {
          pageTitle: 'Confirmar meu e-mail',
          specialClass: 'gray-bg',
          subTitle: 'Digite seu e-mail e você receberá instruções para confirmá-lo.'
        },
        views: {
          '': {
            controller: 'ConfirmationController',
            controllerAs: 'vm',
            templateUrl: 'app/accredit/confirmations/confirmations.html'
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

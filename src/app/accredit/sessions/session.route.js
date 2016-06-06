(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('accredit.login', {
        url: '/login',
        data: {
          pageTitle: 'Entrar',
          specialClass: 'gray-bg',
          subTitle: 'Para você ter uma vida saudável e tranquila.'
        },
        views: {
          '': {
            controller: 'SessionController',
            controllerAs: 'vm',
            templateUrl: 'app/accredit/sessions/login.html'
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

(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/sessions/login.html',
        controller: 'SessionController',
        controllerAs: 'vm'
      });
  }

})();

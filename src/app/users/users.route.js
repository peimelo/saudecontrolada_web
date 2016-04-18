(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('userEdit', {
        url: '/users/:id',
        templateUrl: 'app/users/userEdit.html',
        controller: 'UserEditController',
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

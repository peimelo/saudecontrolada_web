(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'vm',
        data: {
          permissions: {
            only: ['logged'],
            redirectTo: 'login'
          }
        }
      })
      .state('userEdit', {
        url: '/users/:id',
        templateUrl: 'app/users/userEdit.html',
        controller: 'UserEditController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Perfil',
          permissions: {
            only: ['logged'],
            redirectTo: 'login'
          }
        },
        ncyBreadcrumb: {
          label: 'Perfil',
          parent: 'home'
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/users/userNew.html',
        controller: 'UserNewController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Cadastrar-se',
          specialClass: 'gray-bg'
        }
      });
  }
})();

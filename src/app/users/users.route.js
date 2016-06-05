(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'USERS',
          permissions: {
            only: ['logged'],
            redirectTo: 'login'
          }
        },
        ncyBreadcrumb: {
          label: 'Users',
          parent: 'home'
        }
      })
      .state('admin.userEdit', {
        url: '/userEdit',
        templateUrl: 'app/users/userEdit.html',
        controller: 'UserEditController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'PROFILE',
          permissions: {
            only: ['logged'],
            redirectTo: 'login'
          }
        },
        ncyBreadcrumb: {
          label: 'Perfil'
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

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
        templateUrl: 'app/accredit/users/users.html',
        controller: 'UsersController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'USERS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        ncyBreadcrumb: {
          label: 'Users',
          parent: 'home'
        }
      })
      .state('admin.userEdit', {
        url: '/userEdit',
        templateUrl: 'app/accredit/users/userEdit.html',
        controller: 'UserEditController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'PROFILE',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        ncyBreadcrumb: {
          label: 'Perfil'
        }
      })
      .state('accredit.signup', {
        url: '/signup',
        data: {
          pageTitle: 'Cadastrar-se',
          specialClass: 'gray-bg',
          subTitle: 'Um sistema feito para ajudá-lo a cuidar da sua saúde.'
        },
        views: {
          '': {
            controller: 'UserNewController',
            controllerAs: 'vm',
            templateUrl: 'app/accredit/users/userNew.html',
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

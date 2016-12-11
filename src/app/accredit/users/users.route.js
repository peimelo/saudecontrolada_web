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
        controller: 'UsersController',
        controllerAs: 'vm',
        data: {
          pageIcon: 'fa fa-users',
          pageTitle: 'USERS',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        templateUrl: 'app/accredit/users/users.html'
      })
      .state('admin.userEdit', {
        url: '/userEdit',
        controller: 'UserEditController',
        controllerAs: 'vm',
        data: {
          pageIcon: 'fa fa-cog',
          pageTitle: 'PROFILE',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        templateUrl: 'app/accredit/users/userEdit.html'
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

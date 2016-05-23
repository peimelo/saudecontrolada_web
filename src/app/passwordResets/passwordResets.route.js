(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('forgot', {
        url: '/forgot',
        controller: 'PasswordResetsController',
        controllerAs: 'vm',
        templateUrl: 'app/passwordResets/forgot.html',
        data: {
          pageTitle: 'Redefinir minha senha',
          specialClass: 'gray-bg',
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          }
        }
      })
      .state('passwordReset', {
        url: '/password_resets/:id?email',
        controller: 'PasswordResetsController',
        controllerAs: 'vm',
        templateUrl: 'app/passwordResets/passwordReset.html',
        data: {
          pageTitle: 'Redefinir minha senha',
          specialClass: 'gray-bg',
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          }
        }
      });
  }
})();

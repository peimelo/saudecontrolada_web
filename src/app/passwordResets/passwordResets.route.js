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
        templateUrl: 'app/passwordResets/forgot.html',
        controller: 'PasswordResetsController',
        controllerAs: 'vm',
        data: {
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          }
        }
      })
      .state('passwordReset', {
        url: '/password_resets/:id',
        templateUrl: 'app/passwordResets/passwordReset.html',
        controller: 'PasswordResetsController',
        controllerAs: 'vm',
        data: {
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          }
        }
      });
  }
})();

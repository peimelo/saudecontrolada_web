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
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          }
        }
      })
      .state('passwordReset', {
        url: '/password_resets/:id/email/:email',
        controller: 'PasswordResetsController',
        controllerAs: 'vm',
        templateUrl: 'app/passwordResets/passwordReset.html',
        data: {
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          }
        }
      });
  }
})();

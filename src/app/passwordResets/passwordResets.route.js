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
        data: {
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          }
        },
        templateUrl: 'app/passwordResets/forgot.html'
      })
      .state('passwordReset', {
        url: '/password_resets/:id/email/:email',
        controller: 'PasswordResetsController',
        controllerAs: 'vm',
        data: {
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          },
        templateUrl: 'app/passwordResets/passwordReset.html'
        }
      });
  }
})();

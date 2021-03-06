(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('accredit.forgot', {
        url: '/forgot',
        data: {
          pageTitle: 'Redefinir minha senha',
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          },
          specialClass: 'gray-bg',
          subTitle: 'Digite seu e-mail e você receberá instruções para redefiní-la.'
        },
        views: {
          '': {
            controller: 'PasswordResetsController',
            controllerAs: 'vm',
            templateUrl: 'app/accredit/passwords/forgot.html',
          },
          'footer': {
            templateUrl: 'app/accredit/footer.html'
          },
          'links': {
            templateUrl: 'app/accredit/links.html'
          }
        }
      })
      .state('accredit.passwordReset', {
        url: '/passwords/:token',
        data: {
          pageTitle: 'Redefinir minha senha',
          specialClass: 'gray-bg',
          permissions: {
            except: ['logged'],
            redirectTo: 'home'
          },
          subTitle: 'Digite sua nova senha com a confirmação.'
        },
        views: {
          '': {
            controller: 'PasswordResetsController',
            controllerAs: 'vm',
            templateUrl: 'app/accredit/passwords/passwordReset.html',
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

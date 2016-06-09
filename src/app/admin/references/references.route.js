(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.references', {
      url: '/references',
      controller: 'ReferencesController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'REFERENCES',
        permissions: {
          only: ['logged'],
          redirectTo: 'accredit.login'
        }
      },
      ncyBreadcrumb: {
        label: 'References'
      },
      templateUrl: 'app/admin/references/references.html'
    });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        abstract: true,
        url: "/admin",
        templateUrl: "app/components/views/layouts/content.html",
        ncyBreadcrumb: {
          label: 'Admin',
          parent: 'home'
        }
      })
  }
})();

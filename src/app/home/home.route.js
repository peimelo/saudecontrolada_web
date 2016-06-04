(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        // controller: 'HomeController',
        // controllerAs: 'vm',
        data: { specialClass: 'landing-page' },
        ncyBreadcrumb: {
          label: 'Home'
        }
      });
  }
})();

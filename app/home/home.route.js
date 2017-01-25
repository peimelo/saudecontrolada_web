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
        template: '<home></home>',
        data: { specialClass: 'landing-page' },
        ncyBreadcrumb: {
          label: 'Home'
        }
      });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        data: { specialClass: 'landing-page' },
        ncyBreadcrumb: { label: 'Home' },
        template: '<home></home>',
        url: '/'
      });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('alimentation', {
        abstract: true,
        data: {
          pageIcon: 'fa fa-cutlery',
          pageTitle: 'ALIMENTATION',
          permissions: {
            only: ['logged'],
            redirectTo: 'accredit.login'
          }
        },
        templateUrl: 'app/components/views/layouts/content.html',
        url: '/alimentations'
      })
      .state('alimentation.list', {
        controller: 'AlimentationListController',
        controllerAs: 'vm',
        params: {
          page: null
        },
        templateUrl: 'app/alimentations/alimentation.list.html',
        url: ''
      })
      .state('alimentation.detail', {
        controller: 'AlimentationDetailController',
        controllerAs: 'vm',
        data: {
          pageDetailIcon: 'fa fa-spoon',
          pageDetailTitle: 'FOODS'
        },
        params: {
          id: null,
          page: null,
          alimentation: null
        },
        resolve: {
          foods: function(foodService) {
            return foodService.getAll();
          },
          meals:  function(mealService) {
            return mealService.getAll();
          }
        },
        templateUrl: 'app/alimentations/alimentation.detail.html',
        url: '/:id'
      });
  }
})();

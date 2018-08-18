(function() {
  'use strict';

  angular
    .module('app')
    .factory('mealService', mealService);

  /** @ngInject */
  function mealService($http, baseUrl) {
    var meals = [];

    return {
      clear: clear,
      getAll: getAll
    };

    function clear() {
      meals = [];
    }

    function getAll() {
      if (meals.length) {
        return meals;
      }
      else {
        return $http.get(baseUrl + '/meals').then(
          function(response) {
            meals = response.data.meals;
            return response.data.meals;
          }
        );
      }
    }
  }
})();

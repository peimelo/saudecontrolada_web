(function() {
  'use strict';

  angular
    .module('app')
    .factory('foodService', foodService);

  /** @ngInject */
  function foodService($http) {
    var foods = [];

    return {
      clear: clear,
      getAll: getAll
    };

    function clear() {
      foods = [];
    }

    function getAll() {
      if (foods.length) {
        return foods;
      }
      else {
        return $http.get('/api/foods').then(
          function(response) {
            foods = response.data.foods;
            return response.data.foods;
          }
        );
      }
    }
  }
})();

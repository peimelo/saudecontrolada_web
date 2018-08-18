(function() {
  'use strict';

  angular
    .module('app')
    .factory('unitsService', unitsService);

  /** @ngInject */
  function unitsService($http, baseUrl) {
    var units = [];

    return {
      clearUnits: clearUnits,
      getUnits: getUnits
    };

    function clearUnits() {
      units = [];
    }

    function getUnits() {
      if (units.length) {
        return units;
      }
      else {
        return $http.get(baseUrl + '/units').then(
          function(response) {
            units = response.data.units;
            return response.data.units;
          }
        );
      }
    }
  }
})();

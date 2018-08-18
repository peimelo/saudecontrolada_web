(function() {
  'use strict';

  angular
    .module('app')
    .factory('AlimentationFoodResource', AlimentationFoodResource);

  /** @ngInject */
  function AlimentationFoodResource($resource, baseUrl) {
    return $resource(baseUrl + '/alimentations/:alimentation_id/alimentations_foods/:id',
      { id: '@id', alimentation_id: '@alimentation_id' },
      {
        query: { isArray: false },
        update: { method: 'PUT' }
      }
    );
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .factory('AlimentationFoodResource', AlimentationFoodResource);

  /** @ngInject */
  function AlimentationFoodResource($resource) {
    return $resource('/api/alimentations/:alimentation_id/alimentations_foods/:id',
      { id: '@id', alimentation_id: '@alimentation_id' },
      {
        query: { isArray: false },
        update: { method: 'PUT' }
      }
    );
  }
})();

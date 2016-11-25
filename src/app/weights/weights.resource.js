(function() {
  'use strict';

  angular
    .module('app.weights')
    .factory('WeightsResource', WeightsResource);

  /** @ngInject */
  function WeightsResource($resource) {
    return $resource('/api/weights/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

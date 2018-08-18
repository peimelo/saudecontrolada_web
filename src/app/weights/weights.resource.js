(function() {
  'use strict';

  angular
    .module('app.weights')
    .factory('WeightsResource', WeightsResource);

  /** @ngInject */
  function WeightsResource($resource, baseUrl) {
    return $resource(baseUrl + '/weights/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

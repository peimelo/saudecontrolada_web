(function() {
  'use strict';

  angular
    .module('app')
    .factory('UnitsResource', UnitsResource);

  /** @ngInject */
  function UnitsResource($resource, baseUrl) {
    return $resource(baseUrl + '/units/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .factory('UnitsResource', UnitsResource);

  /** @ngInject */
  function UnitsResource($resource) {
    return $resource('/api/units/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .factory('AlimentationResource', AlimentationResource);

  /** @ngInject */
  function AlimentationResource($resource) {
    return $resource('/api/alimentations/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

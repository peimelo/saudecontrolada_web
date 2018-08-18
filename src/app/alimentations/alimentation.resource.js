(function() {
  'use strict';

  angular
    .module('app')
    .factory('AlimentationResource', AlimentationResource);

  /** @ngInject */
  function AlimentationResource($resource, baseUrl) {
    return $resource(baseUrl + '/alimentations/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .factory('ReferencesResource', ReferencesResource);

  /** @ngInject */
  function ReferencesResource($resource, baseUrl) {
    return $resource(baseUrl + '/references/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

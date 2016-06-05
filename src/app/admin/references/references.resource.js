(function() {
  'use strict';

  angular
    .module('app')
    .factory('ReferencesResource', ReferencesResource);

  /** @ngInject */
  function ReferencesResource($resource) {
    return $resource('/api/references/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

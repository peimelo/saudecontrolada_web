(function() {
  'use strict';

  angular
    .module('app')
    .factory('PesosResource', PesosResource);

  /** @ngInject */
  function PesosResource($resource) {
    return $resource('/api/pesos/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

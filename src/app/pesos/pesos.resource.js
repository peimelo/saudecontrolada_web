(function() {
  'use strict';

  angular
    .module('app')
    .factory('pesosService', pesosService);

  /** @ngInject */
  function pesosService($resource) {
    return $resource('/api/pesos/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

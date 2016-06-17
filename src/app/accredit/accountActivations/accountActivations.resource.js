(function() {
  'use strict';

  angular
    .module('app')
    .factory('ActivationsResource', ActivationsResource);

  /** @ngInject */
  function ActivationsResource($resource) {
    var urlBase = '/api/confirmations/:id';

    return $resource(urlBase, { id: '@id' }, {
      update: { method: 'PUT' }
    });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .factory('ActivationsResource', ActivationsResource);

  /** @ngInject */
  function ActivationsResource($resource) {
    var urlBase = '/api/account_activations/:id';

    return $resource(urlBase, { id: '@id' }, {
      get: {
        url: urlBase + '/edit',
        method: 'GET'
      }
    });
  }
})();

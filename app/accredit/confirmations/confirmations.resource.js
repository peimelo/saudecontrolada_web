(function() {
  'use strict';

  angular
    .module('app')
    .factory('ConfirmationResource', ConfirmationResource);

  /** @ngInject */
  function ConfirmationResource($resource) {
    var urlBase = '/api/confirmations/:token';

    return $resource(urlBase, { token: '@token' }, {
      update: { method: 'PUT' }
    });
  }
})();

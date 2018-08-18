(function() {
  'use strict';

  angular
    .module('app')
    .factory('ConfirmationResource', ConfirmationResource);

  /** @ngInject */
  function ConfirmationResource($resource, baseUrl) {
    var urlBase = baseUrl + '/confirmations/:token';

    return $resource(urlBase, { token: '@token' }, {
      update: { method: 'PUT' }
    });
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .factory('PasswordResetsResource', PasswordResetsResource);

  /** @ngInject */
  function PasswordResetsResource($resource, baseUrl) {
    return $resource(baseUrl + '/passwords/:token', { token: '@token' }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();

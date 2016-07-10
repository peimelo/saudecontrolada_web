(function() {
  'use strict';

  angular
    .module('app')
    .factory('PasswordResetsResource', PasswordResetsResource);

  /** @ngInject */
  function PasswordResetsResource($resource) {
    return $resource('/api/passwords/:token', { token: '@token' }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();

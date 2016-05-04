(function() {
  'use strict';

  angular
    .module('app')
    .factory('PasswordResetsResource', PasswordResetsResource);

  /** @ngInject */
  function PasswordResetsResource($resource) {
    return $resource('/api/password_resets/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();

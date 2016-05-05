(function() {
  'use strict';

  angular
    .module('app')
    .factory('AccountActivationsService', AccountActivationsService);

  /** @ngInject */
  function AccountActivationsService($resource) {
    return $resource('/api/account_activations/:id/edit', { id: '@id' });
  }
})();

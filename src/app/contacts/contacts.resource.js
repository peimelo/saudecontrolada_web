(function() {
  'use strict';

  angular
    .module('app')
    .factory('ContactsResource', ContactsResource);

  /** @ngInject */
  function ContactsResource($resource, baseUrl) {
    return $resource(baseUrl + '/contacts/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();

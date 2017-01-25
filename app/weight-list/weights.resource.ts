(function() {
  'use strict';

  angular
    .module('app.weights')
    .factory('WeightsResource', ['$resource',
      function($resource: angular.resource.IResourceService) {
        return $resource('/api/weights/:id', { id: '@id' }, {
          query: {
            method: 'GET',
            isArray: false
          },
          update: {
            method: 'PUT'
          }
        });
      }
    ]);
})();

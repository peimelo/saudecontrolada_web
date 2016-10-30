(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResultsController', ResultsController);

  /** @ngInject */
  function ResultsController(ResultsResource, $stateParams, toaster) {
    var vm = this;

    vm.pagination = { currentPage: ($stateParams.page || 1) };
    vm.results = [];
    vm.query = query;
    vm.remove = remove;

    activate();

    function activate() {
      query();
    }

    function query() {
      ResultsResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.results = response.results;
          vm.pagination = response.meta;
        }
      );
    }

    function remove(result) {
      ResultsResource.delete({ id: result.id },
        function(response) {
          toaster.pop('success', '', response.message);
          query();
        }
      );
    }
  }
})();

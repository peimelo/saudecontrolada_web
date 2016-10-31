(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResultsGraphicsController', ResultsGraphicsController);

  /** @ngInject */
  function ResultsGraphicsController(ResultsGraphicsResource, $stateParams, toaster) {
    var vm = this;

    vm.pagination = { currentPage: ($stateParams.page || 1) };
    vm.resultsGraphics = [];
    vm.query = query;

    activate();

    function activate() {
      query();
    }

    function query() {
      ResultsGraphicsResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.resultsGraphics = response.exam_results;
          vm.pagination = response.meta;
        }
      );
    }
  }
})();

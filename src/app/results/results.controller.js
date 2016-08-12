(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResultsController', ResultsController);

  /** @ngInject */
  function ResultsController(moment, ResultsResource, $state, $timeout,
                           toaster, $uibModal) {
    var vm = this;

    vm.getResult = getResult;
    vm.pagination = { currentPage: 1 };
    vm.resultId = null;
    vm.result = {};
    vm.results = [];
    vm.query = query;
    vm.remove = remove;
    vm.showMode = { chart: true, table: true };
    vm.io = 'oi';

    activate();

    function activate() {
      query();
    }

    function getResult(result) {
      ResultsResource.get({ id: result.id },
        function(response) {
          vm.result = response;
        }
      );
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
      // ResultsResource.delete({ id: result.id },
      //   function(response) {
      //     toaster.pop('success', '', response.message);
      //     query();
      //   }
      // );
    }
  }
})();

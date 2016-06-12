(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResultsController', ResultsController);

  /** @ngInject */
  function ResultsController(moment, ResultsResource, $timeout,
                           toaster, $uibModal) {
    var vm = this;

    // vm.openModal = openModal;
    vm.pagination = { currentPage: 1 };
    vm.resultId = null;
    vm.results = [];
    vm.query = query;
    vm.remove = remove;
    vm.showMode = { chart: true, table: true };

    activate();

    function activate() {
      query();
    }

    // function openModal(resultGrid) {
    //   var modalInstance = $uibModal.open({
    //     animation: true,
    //     controller: 'ResultModalController',
    //     controllerAs: 'vm',
    //     resolve: {
    //       result: function() {
    //         return resultGrid;
    //       }
    //     },
    //     templateUrl: 'resultModal.html',
    //     windowClass: 'center-modal'
    //   });
    //
    //   modalInstance.result.then(
    //     function(result) {
    //       query();
    //       vm.resultId = result.id;
    //       $timeout(function() {
    //         vm.resultId = null;
    //       }, 5000);
    //     }
    //   );
    // }

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

(function() {
  'use strict';

  angular
    .module('app')
    .controller('UnitsController', UnitsController);

  /** @ngInject */
  function UnitsController(toaster, UnitsResource, $uibModal) {
    var vm = this;

    vm.openModal = openModal;
    vm.pagination = { currentPage: 1 };
    vm.query = query;
    vm.units = [];
    vm.remove = remove;

    activate();

    function activate() {
      query();
    }

    function openModal(unitGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'UnitModalController',
        controllerAs: 'vm',
        resolve: {
          unit: unitGrid
        },
        size: 'sm',
        templateUrl: 'unitModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function() {
          query();
        }
      );
    }

    function query() {
      UnitsResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.units = response.units;
          vm.pagination = response.meta;
        }
      );
    }

    function remove(unit) {
      UnitsResource.delete({ id: unit.id },
        function(response) {
          query();
          toaster.pop('success', '', response.message);
        }
      );
    }
  }
})();

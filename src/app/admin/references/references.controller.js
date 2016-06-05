(function() {
  'use strict';

  angular
    .module('app')
    .controller('ReferencesController', ReferencesController);

  /** @ngInject */
  function ReferencesController(toastr, ReferencesResource, $uibModal) {
    var vm = this;

    vm.openModal = openModal;
    vm.pagination = { currentPage: 1 };
    vm.query = query;
    vm.references = [];
    vm.remove = remove;

    activate();

    function activate() {
      query();
    }

    function openModal(referenceGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'ReferenceModalController',
        controllerAs: 'vm',
        resolve: {
          reference: function() {
            return referenceGrid;
          }
        },
        size: 'sm',
        templateUrl: 'referenceModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function() {
          query();
        }
      );
    }

    function query() {
      ReferencesResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.references = response.references;
          vm.pagination = response.meta;
        }
      );
    }

    function remove(unit) {
      ReferencesResource.delete({ id: unit.id },
        function(response) {
          toastr.success(response.message);
          query();
        }
      );
    }
  }
})();

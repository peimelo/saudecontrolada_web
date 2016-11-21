(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsController', ExamsController);

  /** @ngInject */
  function ExamsController(toaster, ExamsResource, $uibModal) {
    var vm = this;

    vm.openModal = openModal;
    vm.pagination = { currentPage: 1 };
    vm.query = query;
    vm.exams = [];
    vm.remove = remove;

    activate();

    function activate() {
      query();
    }

    function openModal(examGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'UnitModalController',
        controllerAs: 'vm',
        resolve: {
          exam: examGrid
        },
        size: 'sm',
        templateUrl: 'examModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function() {
          query();
        }
      );
    }

    function query() {
      ExamsResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.exams = response.exams;
          vm.pagination = response.meta;
        }
      );
    }

    function remove(exam) {
      ExamsResource.delete({ id: exam.id },
        function(response) {
          query();
          toaster.pop('success', '', response.message);
        }
      );
    }
  }
})();

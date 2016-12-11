(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsDetailController', ExamsDetailController);

  /** @ngInject */
  function ExamsDetailController(formErrorService, ExamsResource,
                                 serverValidateService, $stateParams, $timeout,
                                 toaster, $uibModal, units) {
    var vm = this;

    vm.alert = { message: 'Nenhum registro cadastrado. Clique em "Incluir".' };
    vm.formErrors = {};
    vm.page = $stateParams.page || 1;
    vm.pagination = { currentPage: 1 };
    vm.openModal = openModal;
    vm.exam = $stateParams.result;
    vm.remove = remove;
    vm.submit = submit;
    vm.units = units;

    activate();

    function activate() {
      if ($stateParams.id) {
        ExamsResource.get({ id: $stateParams.id },
          function(response) {
            vm.exam = response.exam;
            if (vm.exam.unit) {
              vm.exam.unit_id = vm.exam.unit.id;
            }
          }
        )
      }
      else {
        vm.examResults = [];
      }
    }

    function openModal(examResultGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'ExamsResultsModalController',
        controllerAs: 'vm',
        resolve: {
          examReadOnly: false,
          examResult: examResultGrid,
          resultId: vm.exam.id
        },
        size: 'lg',
        templateUrl: 'examsResultsModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function(examResult) {
          vm.examResultId = examResult.id;
          $timeout(function() {
            vm.examResultId = null;
          }, 5000);
        }
      );
    }

    function remove(examResult) {
      ExamsExamsResource.delete({ id: examResult.id, result_id: vm.exam.id },
        function(response) {
          toaster.pop('success', '', response.message);
        }
      );
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        if (vm.exam.id) {
          ExamsResource.update({ id: vm.exam.id }, vm.exam,
            function(response) {
              vm.exam = response.reg;
              toaster.pop('success', '', response.message);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          var newResult = new ExamsResource(vm.exam);

          newResult.$save(
            function(response) {
              vm.exam = response.reg;
              toaster.pop('success', '', response.message);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
      }
      else {
        formErrorService.showMessage(form);
      }
    }
  }
})();

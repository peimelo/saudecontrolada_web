(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsDetailController', ExamsDetailController);

  /** @ngInject */
  function ExamsDetailController(formErrorService, ExamsResource,
                                 serverValidateService, $stateParams, $timeout,
                                 toaster, $uibModal, units, ValoresResource) {
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
    vm.valorId = null;

    activate();

    function activate() {
      if ($stateParams.id) {
        getExams($stateParams.id);
      }
      else {
        vm.examResults = [];
      }
    }

    function getExams(id) {
      ExamsResource.get({ id: id },
        function(response) {
          vm.exam = response.exam;
          if (vm.exam.unit) {
            vm.exam.unit_id = vm.exam.unit.id;
          }
        }
      );
    }

    function openModal(valorGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'ValoresModalController',
        controllerAs: 'vm',
        resolve: {
          examId: vm.exam.id,
          valor: valorGrid
        },
        size: 'lg',
        templateUrl: 'valores-modal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function(valor) {
          vm.valorId = valor.id;
          $timeout(function() {
            vm.valorId = null;
          }, 5000);
          getExams(vm.exam.id);
        }
      );
    }

    function remove(valor) {
      ValoresResource.delete({ id: valor.id, exam_id: vm.exam.id },
        function(response) {
          getExams(vm.exam.id);
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
              getExams(response.reg.id);
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

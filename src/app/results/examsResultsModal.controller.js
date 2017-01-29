(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsResultsModalController', ExamsResultsModalController);

  /** @ngInject */
  function ExamsResultsModalController(continueIncluding, examReadOnly, examResult, examsService,
                                       ExamsResultsResource, resultId, serverValidateService,
                                       toaster, $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.continueIncluding = continueIncluding;
    vm.formErrors = {};
    vm.examReadOnly = examReadOnly;
    vm.examResult = angular.copy(examResult);
    vm.exams = [];
    vm.resultId = resultId;
    vm.submit = submit;

    activate();

    function activate() {
      vm.exams = examsService.getExams();

      if (!vm.examResult) {
        vm.examResult = { value: 0 };
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      response.reg.continueIncluding = vm.continueIncluding;
      $uibModalInstance.close(response.reg);
    }

    function submit(form) {
      if (form.$valid) {
        if (!angular.isObject(vm.examResult.exam)) {
          toaster.pop(
            'error',
            '',
            'Escreva o nome do Exame e selecione nas opções disponíveis. Se não existir, envie-nos um Contato para inserí-lo.'
          );
          return;
        }

        if (vm.examResult.id) {
          ExamsResultsResource.update(
            {
              id: vm.examResult.id,
              exam_id: vm.examResult.exam.id,
              result_id: vm.resultId,
              value: vm.examResult.value
            },
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          vm.examResult.result_id = vm.resultId;
          var newExamsResults = new ExamsResultsResource(
            {
              exam_id: vm.examResult.exam.id,
              result_id: vm.resultId,
              value: vm.examResult.value
            }
          );

          newExamsResults.$save(
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
      }
      else {
        form.submitted = true;
      }
    }
  }
})();

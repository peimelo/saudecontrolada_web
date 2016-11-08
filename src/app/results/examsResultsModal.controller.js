(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsResultsModalController', ExamsResultsModalController);

  /** @ngInject */
  function ExamsResultsModalController(serverValidateService, examResult,
                                       examsService,
                                       ExamsResultsResource, resultId, toaster, $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.formErrors = {};
    vm.examResult = angular.copy(examResult);
    vm.exams = [];
    vm.resultId = resultId;
    vm.submit = submit;
    vm.title = '';

    activate();

    function activate() {
      vm.exams = examsService.getExams();

      if (examResult) {
        vm.title = 'CHANGING';
      }
      else {
        vm.title = 'INCLUDING';
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      $uibModalInstance.close(response.reg);
    }

    function submit(form) {
      if (form.$valid) {
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

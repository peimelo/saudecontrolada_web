(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsResultsModalController', ExamsResultsModalController);

  /** @ngInject */
  function ExamsResultsModalController(moment, serverValidateService, sessionService, examResult,
                                       examsService,
                                       ExamsResultsResource, resultId, toaster, $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.formErrors = {};
    vm.examResult = examResult;
    vm.exams = [];
    vm.resultId = resultId;
    vm.submit = submit;
    vm.title = '';

    activate();

    function activate() {
      vm.exams = examsService.getExams();
      if (examResult) {
        vm.title = 'CHANGING';
        getWeight();
      }
      else {
        newWeight();
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

    function getWeight() {
      ExamsResultsResource.get({ id: examResult.id, result_id: vm.resultId },
        function(response) {
          vm.examResult = response;
        }
      );
    }

    function newWeight() {
      vm.examResult = {
        date: moment().format('YYYY-MM-DD HH:mm'),
        height: sessionService.user.height
      };
    }

    function submit(form) {
      if (form.$valid) {
        if (vm.examResult.id) {
          vm.examResult.$update(
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          var newWeight = new ExamsResultsResource(vm.examResult);

          newWeight.$save(
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

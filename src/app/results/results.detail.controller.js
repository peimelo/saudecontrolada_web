(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResultsDetailController', ResultsDetailController);

  /** @ngInject */
  function ResultsDetailController(formErrorService, ExamsResultsResource, examsService, ResultsResource,
                             serverValidateService, $stateParams, $timeout, toaster, $uibModal) {
    var vm = this;

    vm.alert = { message: 'Nenhum registro cadastrado. Clique em "Incluir".' };
    vm.formErrors = {};
    vm.examResults = [''];
    vm.getResult = getResult;
    vm.page = $stateParams.page || 1;
    vm.pagination = { currentPage: 1 };
    vm.openModal = openModal;
    vm.result = {};
    vm.examResultId = null;
    vm.remove = remove;
    vm.submit = submit;

    activate();

    function activate() {
      examsService.getExams();

      if ($stateParams.id) {
        getResult($stateParams);
      }
      else {
        vm.examResults = [];
      }
    }

    function getResult(param) {
      ResultsResource.get({ id: param.id },
        function(response) {
          vm.result = response;

          ExamsResultsResource.get({ result_id: vm.result.id, page: vm.pagination.currentPage },
            function(response) {
              vm.examResults = response.exam_results;
              vm.pagination = response.meta;
            }
          );
        }
      );
    }

    function openModal(examResultGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'ExamsResultsModalController',
        controllerAs: 'vm',
        resolve: {
          examResult: examResultGrid,
          resultId: vm.result.id
        },
        size: 'lg',
        templateUrl: 'examsResultsModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function(examResult) {
          getResult({ id: examResult.result_id });

          vm.examResultId = examResult.id;
          $timeout(function() {
            vm.examResultId = null;
          }, 5000);
        }
      );
    }

    function remove(examResult) {
      ExamsResultsResource.delete({ id: examResult.id, result_id: vm.result.id },
        function(response) {
          toaster.pop('success', '', response.message);
          getResult(vm.result);
        }
      );
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        if (vm.result.id) {
          ResultsResource.update({ id: vm.result.id }, vm.result,
            function(response) {
              getResult(vm.result);
              toaster.pop('success', '', response.message);
            }
          );
        }
        else {
          var newResult = new ResultsResource(vm.result);

          newResult.$save(
            function(response) {
              vm.result = response.reg;
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

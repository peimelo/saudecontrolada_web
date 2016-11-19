(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResultsDetailController', ResultsDetailController);

  /** @ngInject */
  function ResultsDetailController(formErrorService, ExamsResultsResource, ResultsResource,
                             serverValidateService, $stateParams, $timeout, toaster, $uibModal) {
    var vm = this;

    vm.alert = { message: 'Nenhum registro cadastrado. Clique em "Incluir".' };
    vm.formErrors = {};
    vm.examResultId = null;
    vm.examResults = [''];
    vm.getExamsResults = getExamsResults;
    vm.page = $stateParams.page || 1;
    vm.pagination = { currentPage: 1 };
    vm.openModal = openModal;
    vm.result = $stateParams.result;
    vm.remove = remove;
    vm.submit = submit;

    // $document.on('keydown', onKeydown);

    activate();

    function activate() {
      if ($stateParams.id) {
        ResultsResource.get({ id: $stateParams.id },
          function(response) {
            vm.result = response;
            getExamsResults();
          }
        )
      }
      else {
        vm.examResults = [];
      }
    }

    function getExamsResults() {
      ExamsResultsResource.get(
        {
          result_id: vm.result.id,
          page: vm.pagination.currentPage
        },
        function(response) {
          vm.examResults = response.exam_results;
          vm.pagination = response.meta;
        }
      );
    }

    // function onKeydown($event) {
    //   $event.stopImmediatePropagation();
    //
    //   if ($state.current.name === 'results.detail' && $event.which === 78 &&
    //     $event.target.id === 'page-top') {
    //     openModal();
    //   }
    // }

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
          getExamsResults();

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
          getExamsResults();
        }
      );
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        if (vm.result.id) {
          ResultsResource.update({ id: vm.result.id }, vm.result,
            function(response) {
              vm.result = response.reg;
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

(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResultsDetailController', ResultsDetailController);

  /** @ngInject */
  function ResultsDetailController(formErrorService, ResultsResource,
                             serverValidateService, $stateParams, toaster) {
    var vm = this;

    vm.formErrors = {};
    vm.page = $stateParams.page || 1;
    vm.result = {};
    vm.submit = submit;

    activate();

    function activate() {
      if ($stateParams.id) {
        getResult($stateParams);
      }
    }

    function getResult(param) {
      ResultsResource.get({ id: param.id },
        function(response) {
          vm.result = response;
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

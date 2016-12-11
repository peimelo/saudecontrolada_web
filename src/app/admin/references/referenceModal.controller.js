(function() {
  'use strict';

  angular
    .module('app')
    .controller('ReferenceModalController', ReferenceModalController);

  /** @ngInject */
  function ReferenceModalController(formErrorService, reference,
    ReferencesResource, serverValidateService, toaster, $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.formErrors = {};
    vm.submit = submit;
    vm.reference = angular.copy(reference);

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      $uibModalInstance.close(response);
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        if (vm.reference.id) {
          ReferencesResource.update(vm.reference,
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          var newReference = new ReferencesResource(vm.reference);

          newReference.$save(
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
        formErrorService.showMessage(form);
      }
    }
  }
})();

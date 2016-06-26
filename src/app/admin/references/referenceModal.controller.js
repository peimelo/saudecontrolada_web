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
    vm.reference = reference;

    activate();

    function activate() {
      if(reference) {
        ReferencesResource.get({ id: reference.id },
          function(response) {
            vm.reference = response;
          }
        );
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      $uibModalInstance.close(response);
    }

    function submit(form) {
      if (form.$valid) {
        if (vm.reference.id) {
          vm.reference.$update(function(response) {
            closeWithSuccess(response);
          });
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

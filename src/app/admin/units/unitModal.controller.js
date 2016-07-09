(function() {
  'use strict';

  angular
    .module('app')
    .controller('UnitModalController', UnitModalController);

  /** @ngInject */
  function UnitModalController(formErrorService, serverValidateService, toaster,
                               $uibModalInstance, unit, UnitsResource) {
    var vm = this;

    vm.cancel = cancel;
    vm.formErrors = {};
    vm.submit = submit;
    vm.unit = unit;

    activate();

    function activate() {
      if(unit) {
        UnitsResource.get({ id: unit.id },
          function(response) {
            vm.unit = response;
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
        vm.formErrors = {};

        if (vm.unit.id) {
          vm.unit.$update(function(response) {
            closeWithSuccess(response);
          });
        }
        else {
          var newUnit = new UnitsResource(vm.unit);

          newUnit.$save(
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

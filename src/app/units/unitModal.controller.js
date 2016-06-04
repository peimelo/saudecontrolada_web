(function() {
  'use strict';

  angular
    .module('app')
    .controller('UnitModalController', UnitModalController);

  /** @ngInject */
  function UnitModalController(toastr, $uibModalInstance, unit,
                               UnitsResource) {
    var vm = this;

    vm.cancel = cancel;
    vm.unit = unit;
    vm.submit = submit;
    vm.title = '';

    activate();

    function activate() {
      if(unit) {
        vm.title = 'Alterando';
        UnitsResource.get({ id: unit.id },
          function(response) {
            vm.unit = response;
          }
        );
      }
      else {
        vm.title = 'Incluindo';
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function submit(form) {
      if (form.$valid) {
        if (vm.unit.id) {
          vm.unit.$update(function(response) {
            toastr.success(response.message);
            $uibModalInstance.close(response);
          });
        }
        else {
          var newUnit = new UnitsResource(vm.unit);

          newUnit.$save(function(response) {
            toastr.success(response.message);
            $uibModalInstance.close(response);
          });
        }
      }
      else {
        form.submitted = true;
      }
    }
  }
})();

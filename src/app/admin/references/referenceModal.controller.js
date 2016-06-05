(function() {
  'use strict';

  angular
    .module('app')
    .controller('ReferenceModalController', ReferenceModalController);

  /** @ngInject */
  function ReferenceModalController(toastr, $uibModalInstance, reference,
                                    ReferencesResource) {
    var vm = this;

    vm.cancel = cancel;
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

    function submit(form) {
      if (form.$valid) {
        if (vm.reference.id) {
          vm.reference.$update(function(response) {
            toastr.success(response.message);
            $uibModalInstance.close(response);
          });
        }
        else {
          var newReference = new ReferencesResource(vm.reference);

          newReference.$save(function(response) {
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

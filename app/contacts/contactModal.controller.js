(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContactModalController', ContactModalController);

  /** @ngInject */
  function ContactModalController(formErrorService, serverValidateService,
                               $uibModalInstance, ContactsResource, SweetAlert) {
    var vm = this;

    vm.cancel = cancel;
    vm.contact = {};
    vm.formErrors = {};
    vm.submit = submit;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        var newContact = new ContactsResource(vm.contact);

        newContact.$save(
          function(response) {
            SweetAlert.swal({
              text: response.message,
              title: response.title,
              type: "success"
            });
            $uibModalInstance.close();
          },
          function(error) {
            serverValidateService.validate(error, vm.formErrors, form);
          }
        );
      }
      else {
        formErrorService.showMessage(form);
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('AccountActivationsController', AccountActivationsController);

  /** @ngInject */
  function AccountActivationsController(ActivationsResource, $state,
    $stateParams, SweetAlert, toaster) {
    var vm = this;

    vm.submit = submit;
    vm.user = {};

    activate();

    function activate() {
      if ($state.is('confirmAccountActivation')) {
        var account = { id: $stateParams.id, email: $stateParams.email };

        ActivationsResource.update(account,
          function(response) {
            $state.go('accredit.login');

            SweetAlert.swal({
              text: response.message,
              title: response.title,
              type: "success"
            });
          }
        );
      }
    }

    function submit(form) {
      if (form.$valid) {
        var newActivation = new ActivationsResource(vm.user);

        newActivation.$save(function (response) {
          $state.go('accredit.login');

          SweetAlert.swal({
            text: response.message,
            title: response.title,
            type: "success"
          });
        });
      }
      else {
        toaster.pop('warning', '', 'Por favor, preencha o e-mail.');
        form.submitted = true;
      }
    }
  }
})();

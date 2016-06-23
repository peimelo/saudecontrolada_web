(function() {
  'use strict';

  angular
    .module('app')
    .controller('ConfirmationController', ConfirmationController);

  /** @ngInject */
  function ConfirmationController(ConfirmationResource, serverValidateService,
    $state, $stateParams, SweetAlert, toaster) {
    var vm = this;

    vm.submit = submit;
    vm.user = {};

    activate();

    function activate() {
      if ($state.is('confirmation')) {
        var token = { token: $stateParams.token };

        ConfirmationResource.update(token,
          function(response) {
            $state.go('accredit.login');

            SweetAlert.swal({
              text: response.message,
              title: response.title,
              type: "success"
            });
          },
          function(error) {
            $state.go('accredit.login');
            serverValidateService.validate(error, null, null);
          }
        );
      }
    }

    function submit(form) {
      if (form.$valid) {
        var newActivation = new ConfirmationResource(vm.user);

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

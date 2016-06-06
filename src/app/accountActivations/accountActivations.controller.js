(function() {
  'use strict';

  angular
    .module('app')
    .controller('AccountActivationsController', AccountActivationsController);

  /** @ngInject */
  function AccountActivationsController(ActivationsResource, $state,
    $stateParams, toaster) {
    var vm = this;

    vm.submit = submit;
    vm.title = '';
    vm.user = {};

    activate();

    function activate() {
      if ($state.is('confirmAccountActivation')) {
        var data = { id: $stateParams.id, email: $stateParams.email };

        ActivationsResource.get(data,
          function(response) {
            toaster.pop('success', '', response.message);
          }
        );

        $state.go('login');
      }
      else {
        vm.title = 'Não recebeu instruções de ativação?';
      }
    }

    function submit(form) {
      if (form.$valid) {
        var newActivation = new ActivationsResource(vm.user);

        newActivation.$save(function (response) {
          toaster.pop('note', '', response.message);
          $state.go('login');
        });
      }
      else {
        toaster.pop('warning', '', 'Por favor, preencha o e-mail.');
        form.submitted = true;
      }
    }
  }
})();

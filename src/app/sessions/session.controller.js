(function() {
  'use strict';

  angular
    .module('app')
    .controller('SessionController', SessionController);

  /** @ngInject */
  function SessionController(sessionService, $state, toastr) {
    var vm = this;

    vm.submit = submit;
    vm.user = {};

    activate();

    function activate() {
      if (sessionService.user) {
        sessionService.logout();
      }
    }

    function submit(form) {
      if (form.$valid) {
        sessionService.login(vm.user).then(
          function() {
            vm.user = {};
            $state.go('dashboard');
          }
        );
      }
      else {
        toastr.warning('Todos os campos devem estar preenchidos e validados.');
        form.submitted = true;
      }
    }
  }
})();

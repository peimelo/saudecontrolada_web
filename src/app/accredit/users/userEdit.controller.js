(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserEditController', UserEditController);

  /** @ngInject */
  function UserEditController(sessionService, $state, SweetAlert, toaster,
                              UsersResource) {
    var vm = this;

    vm.cancel = cancel;
    vm.destroy = destroy;
    vm.submit = submit;
    vm.unhappy = false;
    vm.user = sessionService.user;
    vm.title = 'Minha Conta';

    activate();

    function activate() {
      UsersResource.get({ id: 0 },
        function(response) {
          assignUser(response);
        }
      );
    }

    function assignUser(user) {
      vm.user = user;
      sessionService.user = angular.copy(user);
    }

    function cancel() {
      vm.user = angular.copy(sessionService.user);
    }

    function destroy() {
      if (vm.unhappy) {
        UsersResource.delete({ id: 0 },
          function(response) {
            sessionService.logout();
            $state.go('accredit.login');

            SweetAlert.swal({
              title: response.title,
              text: response.message,
              type: "success"
            });
        });
      }
    }

    function submit(isValid) {
      if (isValid) {
        UsersResource.update({ id: 0, user: vm.user },
        function(response) {
          assignUser(response.user);
          toaster.pop('success', 'Usuário', response.meta);
        });
      }
      else {
        toaster.pop('warning', '', 'Todos os campos devem estar preenchidos e validados.');
      }
    }
  }
})();

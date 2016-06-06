(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserEditController', UserEditController);

  /** @ngInject */
  function UserEditController(sessionService, $state, toaster,
                              UsersResource) {
    var vm = this;

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

    function destroy() {
      if (vm.unhappy) {
        vm.user.$delete(function(response) {
          $state.go('home');
          toaster.pop('success', '', response.message);
        });
      }
    }

    function submit(isValid) {
      if (isValid) {
        vm.user.$update(function(response) {
          assignUser(response.user);
          toaster.pop('success', '', response.message);
        });
      }
      else {
        toaster.pop('warning', '', 'Todos os campos devem estar preenchidos e validados.');
      }
    }
  }
})();

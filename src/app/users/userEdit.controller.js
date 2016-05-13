(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserEditController', UserEditController);

  /** @ngInject */
  function UserEditController(alertingService, $scope, sessionService, $state, $stateParams, toastr, UsersResource) {
    var vm = this;

    vm.destroy = destroy;
    vm.submit = submit;
    vm.unhappy = false;
    vm.user = sessionService.user;
    vm.title = 'Minha Conta';

    activate($stateParams);

    function activate($stateParams) {
      UsersResource.get({id: $stateParams.id},
        function(response) {
          assignUser(response);
        }
      );
    }

    function assignUser(user) {
      vm.user = user;
    }

    function destroy() {
      if (vm.unhappy) {
        vm.user.$delete(function(response) {
          sessionService.cleanAuth();
          alertingService.addSuccess(response.message);
          $state.go('home');
        });
      }
    }

    function submit(isValid) {
      if (isValid) {
        vm.user.$update(function(response) {
          assignUser(response);
          toastr.success('Dados alterados com sucesso.');
        });
      }
      else {
        toastr.warning('Todos os campos devem estar preenchidos e validados.');
      }
    }
  }
})();

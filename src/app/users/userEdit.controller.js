(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserEditController', UserEditController);

  /** @ngInject */
  function UserEditController($scope, sessionService, $state, $stateParams, toastr, usersService) {
    var vm = this;

    vm.destroy = destroy;
    vm.submit = submit;
    vm.unhappy = false;
    vm.user = sessionService.user;
    vm.title = 'Minha Conta';

    activate($stateParams);

    function activate($stateParams) {
      usersService.get({id: $stateParams.id},
        function(response) {
          assignUser(response);
        }
      );
    }

    function assignUser(response) {
      vm.user = response;
    }

    function destroy() {
      if (vm.unhappy) {
        vm.user.$delete(function() {
          sessionService.cleanAuth();
          $scope.main.alerts.push({
            type: 'success',
            msg: 'Todos seus dados foram excluídos com sucesso. Esperamos que um dia você volte.'
          });
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

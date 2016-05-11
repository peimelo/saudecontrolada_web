(function() {
  'use strict';

  angular
    .module('app')
    .controller('AccountActivationsController', AccountActivationsController);

  /** @ngInject */
  function AccountActivationsController(ActivationsResource, alertingService, $location, $state, $stateParams) {
    var vm = this;

    vm.submit = submit;
    vm.title = '';
    vm.user = {};

    activate();

    function activate() {
      if ($state.is('confirmAccountActivation')) {
        var data = { id: $stateParams.id, email: $location.search().email };

        ActivationsResource.get(data, function (response) {
          alertingService.addSuccess(response.message);
        }, function (error) {
          alertingService.addDanger(error.data.message);
        });
      }
      else {
        vm.title = 'Não recebeu instruções de ativação?';
      }
    }

    function submit() {
      var newActivation = new ActivationsResource(vm.user);

      newActivation.$save(function(response) {
        alertingService.addSuccess(response.message);
        $state.go('login');
      });
    }
  }
})();

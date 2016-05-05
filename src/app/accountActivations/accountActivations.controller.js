(function() {
  'use strict';

  angular
    .module('app')
    .controller('AccountActivationsController', AccountActivationsController);

  /** @ngInject */
  function AccountActivationsController(AccountActivationsService, $location, $stateParams) {
    var vm = this;

    vm.alert = {};
    vm.title = 'Ativação de Conta';

    activate();

    function activate() {
      AccountActivationsService.get({
        id: $stateParams.id,
        email: $location.search().email
      }, function(response) {
        vm.alert = response;
      }, function(response) {
        vm.alert = response.data;
      });
    }

  }
})();

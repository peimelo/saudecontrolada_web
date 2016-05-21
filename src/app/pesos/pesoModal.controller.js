(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesoModalController', PesoModalController);

  /** @ngInject */
  function PesoModalController(peso, PesosResource, $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.peso = peso;
    vm.submit = submit;
    vm.title = '';

    activate();

    function activate() {
      if(peso.id) {
        vm.title = 'Alterando';
        PesosResource.get({ id: peso.id },
          function(response) {
            vm.peso = response;
          }
        );
      }
      else {
        vm.title = 'Incluindo';
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function submit(isValid) {
      if(isValid) {
        $uibModalInstance.close(vm.peso);
      }
    }
  }
})();

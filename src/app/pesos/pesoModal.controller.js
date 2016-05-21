(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesoModalController', PesoModalController);

  /** @ngInject */
  function PesoModalController(peso, PesosResource, $uibModalInstance) {
    var vm = this;

    vm.cancelar = cancelar;
    vm.peso = peso;
    vm.salvar = salvar;
    vm.title = '';

    activate();

    function activate() {
      if(peso.id) {
        vm.title = 'Alterando';
        PesosResource.get({id: peso.id },
          function(response) {
            vm.peso = response;
          }
        );
      }
      else {
        vm.title = 'Incluindo';
      }
    }

    function cancelar() {
      $uibModalInstance.dismiss('cancel');
    }

    function salvar(isValid) {
      if(isValid) {
        $uibModalInstance.close(vm.peso);
      }
    }
  }
})();

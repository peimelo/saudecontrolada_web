(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesoModalController', PesoModalController);

  /** @ngInject */
  function PesoModalController(moment, peso, PesosResource, toaster,
                               $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.peso = peso;
    vm.submit = submit;
    vm.title = '';

    activate();

    function activate() {
      if(peso) {
        vm.title = 'Alterando';
        PesosResource.get({ id: peso.id },
          function(response) {
            vm.peso = response;
          }
        );
      }
      else {
        vm.peso = { data: moment().format('YYYY-MM-DD') };
        vm.title = 'Incluindo';
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      $uibModalInstance.close(response.reg);
    }

    function submit(form) {
      if (form.$valid) {
        if (vm.peso.id) {
          vm.peso.$update(function(response) {
            closeWithSuccess(response);
          });
        }
        else {
          var newPeso = new PesosResource(vm.peso);

          newPeso.$save(function(response) {
            closeWithSuccess(response);
          });
        }
      }
      else {
        form.submitted = true;
      }
    }
  }
})();

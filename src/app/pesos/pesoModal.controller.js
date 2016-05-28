(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesoModalController', PesoModalController);

  /** @ngInject */
  function PesoModalController(moment, peso, PesosResource, toastr, $uibModalInstance) {
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

    function submit(form) {
      if (form.$valid) {
        if (vm.peso.id) {
          vm.peso.$update(function(response) {
            toastr.success(response.message);
            $uibModalInstance.close(response);
          });
        }
        else {
          var newPeso = new PesosResource(vm.peso);

          newPeso.$save(function(response) {
            toastr.success(response.message);
            $uibModalInstance.close(response);
          });
        }
      }
      else {
        form.submitted = true;
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('AlimentationFoodModalController', AlimentationFoodModalController);

  /** @ngInject */
  function AlimentationFoodModalController(alimentationFood, continueIncluding, foodService,
                                       AlimentationFoodResource, alimentationId, serverValidateService,
                                       toaster, $uibModalInstance) {
    var vm = this;

    vm.alimentationId = alimentationId;
    vm.alimentationFood = angular.copy(alimentationFood);
    vm.cancel = cancel;
    vm.continueIncluding = continueIncluding;
    vm.foods = [];
    vm.formErrors = {};
    vm.submit = submit;

    activate();

    function activate() {
      vm.foods = foodService.getAll();

      if (!vm.alimentationFood) {
        vm.alimentationFood = { value: 0 };
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      response.reg.continueIncluding = vm.continueIncluding;
      $uibModalInstance.close(response.reg);
    }

    function submit(form) {
      if (form.$valid) {
        if (!angular.isObject(vm.alimentationFood.food)) {
          toaster.pop(
            'error',
            '',
            'Escreva o nome do Alimento e selecione nas opções disponíveis. Se não existir, envie-nos um Contato para inserí-lo.'
          );
          return;
        }

        if (vm.alimentationFood.id) {
          AlimentationFoodResource.update(
            {
              id: vm.alimentationFood.id,
              alimentation_id: vm.alimentationId,
              food_id: vm.alimentationFood.food.id,
              value: vm.alimentationFood.value
            },
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          vm.alimentationFood.alimentation_id = vm.alimentationId;
          var newAlimentationFood = new AlimentationFoodResource(
            {
              alimentation_id: vm.alimentationId,
              food_id: vm.alimentationFood.food.id,
              value: vm.alimentationFood.value
            }
          );

          newAlimentationFood.$save(
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
      }
      else {
        form.submitted = true;
      }
    }
  }
})();

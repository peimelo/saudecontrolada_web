(function() {
  'use strict';

  angular
    .module('app')
    .controller('AlimentationDetailController', AlimentationDetailController);

  /** @ngInject */
  function AlimentationDetailController(AlimentationFoodResource, AlimentationResource,
                                        formErrorService, mealService, moment,
                                        serverValidateService, $stateParams, $timeout, toaster, $uibModal) {
    var vm = this;

    vm.amount = 0;
    vm.cho    = 0;
    vm.kcal   = 0;

    vm.alert = { message: 'Nenhum registro cadastrado. Clique em "Incluir".' };
    vm.alimentation = $stateParams.alimentation;
    vm.continueIncluding = false;
    vm.formErrors = {};
    vm.alimentationFoodId = null;
    vm.alimentationFoods = [''];
    vm.getAlimentationsFoods = getAlimentationsFoods;
    vm.meals = [];
    vm.page = $stateParams.page || 1;
    vm.pagination = { currentPage: 1 };
    vm.openModal = openModal;
    vm.remove = remove;
    vm.submit = submit;

    activate();

    function activate() {
      vm.meals = mealService.getAll();

      if ($stateParams.id) {
        AlimentationResource.get({ id: $stateParams.id },
          function(response) {
            vm.alimentation = response;
            vm.alimentation.meal_id = response.meal.id;

            getAlimentationsFoods();
          }
        )
      }
      else {
        vm.alimentation = { date: moment().format('YYYY-MM-DD HH:mm') };
        vm.alimentationFoods = [];
      }
    }

    function consolidated() {
      vm.amount = 0;
      vm.cho    = 0;
      vm.kcal   = 0;

      var size = vm.alimentationFoods.length;

      for (var i = 0; i < size; i++) {
        vm.amount += vm.alimentationFoods[i].value * vm.alimentationFoods[i].food.amount;
        vm.cho    += vm.alimentationFoods[i].value * vm.alimentationFoods[i].food.cho;
        vm.kcal   += vm.alimentationFoods[i].value * vm.alimentationFoods[i].food.kcal;
      }
    }

    function getAlimentationsFoods() {
      AlimentationFoodResource.get(
        {
          alimentation_id: vm.alimentation.id,
          page: vm.pagination.currentPage
        },
        function(response) {
          vm.alimentationFoods = response.alimentation_foods;
          vm.pagination = response.meta;
          consolidated();
        }
      );
    }

    function openModal(alimentationFoodGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'AlimentationFoodModalController',
        controllerAs: 'vm',
        resolve: {
          alimentationId: vm.alimentation.id,
          alimentationFood: alimentationFoodGrid,
          continueIncluding: vm.continueIncluding
        },
        size: 'lg',
        templateUrl: 'alimentationFoodModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function(alimentationFood) {
          getAlimentationsFoods();

          vm.alimentationFoodId = alimentationFood.id;
          $timeout(function() {
            vm.alimentationFoodId = null;
          }, 5000);

          vm.continueIncluding = alimentationFood.continueIncluding;
          if (vm.continueIncluding) {
            openModal();
          }
        },
        function() {
          vm.continueIncluding = false;
        }
      );
    }

    function remove(alimentationFood) {
      AlimentationFoodResource.delete({ id: alimentationFood.id, alimentation_id: vm.alimentation.id },
        function(response) {
          toaster.pop('success', '', response.message);
          getAlimentationsFoods();
        }
      );
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        if (vm.alimentation.id) {
          AlimentationResource.update({ id: vm.alimentation.id },
            {
              date: vm.alimentation.date,
              meal_id: vm.alimentation.meal_id
            },
            function(response) {
              vm.alimentation = response.reg;
              toaster.pop('success', '', response.message);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          var newAlimentation = new AlimentationResource({
            date: vm.alimentation.date,
            meal_id: vm.alimentation.meal_id
          });

          newAlimentation.$save(
            function(response) {
              vm.alimentation = response.reg;
              toaster.pop('success', '', response.message);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
      }
      else {
        formErrorService.showMessage(form);
      }
    }
  }
})();

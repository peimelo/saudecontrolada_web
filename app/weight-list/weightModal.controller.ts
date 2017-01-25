(function() {
  'use strict';

  angular
    .module('app.weights')
    .controller('WeightModalController', WeightModalController);

  /** @ngInject */
  function WeightModalController(moment, serverValidateService, sessionService, weight,
                                 WeightsResource, toaster, $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.formErrors = {};
    vm.weight = angular.copy(weight);
    vm.submit = submit;

    activate();

    function activate() {
      if (!weight) {
        newWeight();
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      $uibModalInstance.close(response.reg);
    }

    function newWeight() {
      vm.weight = {
        date: moment().format('YYYY-MM-DD HH:mm'),
        height: sessionService.user.height
      };
    }

    function submit(form) {
      if (form.$valid) {
        if (vm.weight.id) {
          WeightsResource.update(vm.weight,
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          var newWeight = new WeightsResource(vm.weight);

          newWeight.$save(
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

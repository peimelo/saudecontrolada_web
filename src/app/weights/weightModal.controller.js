(function() {
  'use strict';

  angular
    .module('app')
    .controller('WeightModalController', WeightModalController);

  /** @ngInject */
  function WeightModalController(moment, sessionService, weight,
                                 WeightsResource, toaster, $uibModalInstance) {
    var vm = this;

    vm.cancel = cancel;
    vm.weight = weight;
    vm.submit = submit;
    vm.title = '';

    activate();

    function activate() {
      if (weight) {
        vm.title = 'CHANGING';
        WeightsResource.get({ id: weight.id },
          function(response) {
            vm.weight = response;
          }
        );
      }
      else {
        vm.weight = {
          date: moment().format('YYYY-MM-DD'),
          height: sessionService.user.height
        };
        vm.title = 'INCLUDING';
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
        if (vm.weight.id) {
          vm.weight.$update(function(response) {
            closeWithSuccess(response);
          });
        }
        else {
          var newWeight = new WeightsResource(vm.weight);

          newWeight.$save(function(response) {
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

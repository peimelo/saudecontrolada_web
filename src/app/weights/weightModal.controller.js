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
        getWeight();
      }
      else {
        newWeight();
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

    function getWeight() {
      WeightsResource.get({ id: weight.id },
        function(response) {
          vm.weight = response;
        }
      );
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

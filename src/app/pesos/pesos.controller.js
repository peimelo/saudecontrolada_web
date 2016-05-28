(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesosController', PesosController);

  /** @ngInject */
  function PesosController(moment, PesosResource, toastr, $uibModal) {
    var vm = this;

    vm.pagination = {};
    vm.pesos = [];
    vm.openModal = openModal;
    vm.query = query;
    vm.remove = remove;
    vm.showMode = 'table';
    vm.title = 'Pesos';

    // graphics
    vm.data = [[]];
    vm.labels = [];
    vm.series = ['Peso (Kg)'];

    activate();

    function activate() {
      query();
    }
    
    function getChart() {
      vm.data = [[]];
      vm.labels = [];
      var qtde = vm.pesos.length;

      for (var i = qtde - 1; i >= 0; i--) {
        vm.labels.push(moment(vm.pesos[i].data).format('L'));
        vm.data[0].push(vm.pesos[i].valor);
      }
    }

    function openModal(pesoGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'PesoModalController',
        controllerAs: 'vm',
        resolve: {
          peso: function() {
            return angular.copy(pesoGrid);
          }
        },
        templateUrl: 'pesoModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function() {
          query();
        }
      );
    }

    function query() {
      PesosResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.pesos = response.pesos;
          vm.pagination = response.meta;
          getChart();
        }
      );
    }

    function remove(peso) {
      PesosResource.delete({ id: peso.id },
        function(response) {
          toastr.success(response.message);
          query();
        }
      );
    }
  }
})();

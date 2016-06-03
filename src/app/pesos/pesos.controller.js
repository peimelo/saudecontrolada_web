(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesosController', PesosController);

  /** @ngInject */
  function PesosController(moment, PesosResource, toastr, $uibModal) {
    var vm = this;

    vm.chartObject = {
      data: {
        cols: [
          { id: 't', label: 'Data', type: 'string' },
          { id: 's', label: 'Peso', type: 'number' }
        ],
        rows: []
      },
      options: {
        hAxis: {
          title: 'Data'
        },
        vAxis: {
          title: 'Peso (kg)'
        }
      },
      type: 'LineChart'
    };
    vm.pagination = {};
    vm.pesos = [];
    vm.openModal = openModal;
    vm.query = query;
    vm.remove = remove;
    vm.showMode = { chart: true, table: true };
    vm.title = 'Pesos';

    activate();

    function activate() {
      query();
    }

    function getChart() {
      var qtde = vm.pesos.length;
      var googleChart = [];

      for (var i = qtde - 1; i >= 0; i--) {
        googleChart.push({
          c:[
            { v: moment(vm.pesos[i].data).format('L') },
            { v: vm.pesos[i].valor }
          ]
        });
      }

      vm.chartObject.data.rows = googleChart;
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

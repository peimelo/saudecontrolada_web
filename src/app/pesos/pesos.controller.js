(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesosController', PesosController);

  /** @ngInject */
  function PesosController(moment, PesosResource, toaster, $uibModal) {
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

    vm.flotData = [{ label: 'Peso', data: [] }];

    vm.flotOptions = {
      xaxis: {
        mode: "time",
        minTickSize: [1, "month"]
      },
      colors: ["#1ab394"],
      grid: {
        color: "#999999",
        hoverable: true,
        clickable: true,
        tickColor: "#D4D4D4",
        borderWidth: 0
      },
      tooltip: true,
      tooltipOpts: {
        content: function(label, xval, yval) {
          var content = "%s em " + moment(xval).format('L') + ' = ' + yval;
          return content;
        },
        xDateFormat: "%y-%0m-%0d",
        onHover: function (flotItem, $tooltipEl) {}
      }
    };

    vm.openModal = openModal;
    vm.pagination = { currentPage: 1 };
    vm.pesos = [];
    vm.query = query;
    vm.remove = remove;
    vm.showMode = { chart: true, table: true };

    activate();

    function activate() {
      query();
    }

    function getChart() {
      var qtde = vm.pesos.length;
      var flotChart = [];
      var googleChart = [];

      for (var i = qtde - 1; i >= 0; i--) {
        googleChart.push({
          c:[
            { v: moment(vm.pesos[i].data).format('L') },
            { v: vm.pesos[i].valor }
          ]
        });

        flotChart.push([
          moment(vm.pesos[i].data).toDate().getTime(),
          vm.pesos[i].valor
        ]);
      }

      vm.chartObject.data.rows = googleChart;
      vm.flotData[0].data = flotChart;
    }

    function openModal(pesoGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'PesoModalController',
        controllerAs: 'vm',
        resolve: {
          peso: function() {
            return pesoGrid;
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
          toaster.pop('success', '', response.message);
          query();
        }
      );
    }
  }
})();

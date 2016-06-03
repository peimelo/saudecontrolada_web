(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(moment, PesosResource) {
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
    var pesos = [];

    activate();

    function activate() {
      PesosResource.query({ page: 1 },
        function(response) {
          pesos = response.pesos;
          getChart();
        }
      );
    }

    function getChart() {
      var qtde = pesos.length;
      var googleChart = [];

      for (var i = qtde - 1; i >= 0; i--) {
        googleChart.push({
          c:[
            { v: moment(pesos[i].data).format('L') },
            { v: pesos[i].valor }
          ]
        });
      }

      vm.chartObject.data.rows = googleChart;
    }
  }
})();

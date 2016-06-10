(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(DashboardsResource, moment, PesosResource) {
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

    vm.flotData = [{ label: 'Peso', data: [] }];

    vm.flotOptions = {
      xaxis: {
        mode: "time",
        minTickSize: [1, "month"]
      },
      colors: ["#ffffff"],
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

    activate();

    function activate() {
      DashboardsResource.get({ id: 0 },
        function(response) {
          pesos = response.weights;
          getChart();
        }
      );
    }

    function getChart() {
      var qtde = pesos.length;
      var googleChart = [];
      var flotChart = [];

      for (var i = qtde - 1; i >= 0; i--) {
        googleChart.push({
          c:[
            { v: moment(pesos[i].data).format('L') },
            { v: pesos[i].valor }
          ]
        });

        flotChart.push([
          moment(pesos[i].data).toDate().getTime(),
          pesos[i].valor
        ]);
      }

      vm.chartObject.data.rows = googleChart;
      vm.flotData[0].data = flotChart;
    }
  }
})();

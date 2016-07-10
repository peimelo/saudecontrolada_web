(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(DashboardsResource, moment) {
    var vm = this;

    var weights = [];

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
          weights = response.weights;
          getChart();
        }
      );
    }

    function getChart() {
      var qtde = weights.length;
      var flotChart = [];

      for (var i = qtde - 1; i >= 0; i--) {
        flotChart.push([
          moment(weights[i].date).toDate().getTime(),
          weights[i].value
        ]);
      }

      vm.flotData[0].data = flotChart;
    }
  }
})();

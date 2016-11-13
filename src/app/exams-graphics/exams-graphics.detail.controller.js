(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsGraphicsDetailController', ExamsGraphicsDetailController);

  /** @ngInject */
  function ExamsGraphicsDetailController(numberFilter, ExamsGraphicsResource, $stateParams) {
    var vm = this;

    vm.exam = $stateParams.exam;
    vm.examsResults = [];
    vm.getGraphic = getGraphic;
    vm.flotData = [{ label: 'Valor', data: [] }];
    vm.flotOptions = {
      xaxis: {
        // dayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        minTickSize: [1, "hour"],
        mode: "time",
        monthNames: [
          'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ]
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
          var content = "%s em " + moment(xval).utcOffset(0).format('DD/MM/YYYY') + ' = ' + numberFilter(yval);
          return content;
        },
        xDateFormat: "%y-%0m-%0d",
        onHover: function (flotItem, $tooltipEl) {}
      }
    };
    vm.pagination = { currentPage: ($stateParams.page || 1) };
    vm.resultsGraphics = [];

    activate();

    function activate() {
      getGraphic();
    }

    function getChart(graphicValues) {
      var qtde = graphicValues.length;
      var flotChart = [];

      for (var i = qtde - 1; i >= 0; i--) {
        flotChart.push([
          moment(graphicValues[i].date).utcOffset(0).valueOf(),
          graphicValues[i].value
        ]);
      }

      vm.flotData[0].data = flotChart;
    }

    function getGraphic() {
      ExamsGraphicsResource.get({ id: vm.exam.exam_id },
        function(response) {
          vm.examsResults = response.exam_results;
          getChart(response.exam_results);
        }
      );
    }
  }
})();

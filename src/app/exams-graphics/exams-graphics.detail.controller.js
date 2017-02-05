(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsGraphicsDetailController', ExamsGraphicsDetailController);

  /** @ngInject */
  function ExamsGraphicsDetailController(ExamsGraphicsResource, examsService,
                                         numberFilter, $stateParams, $timeout, $uibModal) {
    var vm = this;

    vm.exam = $stateParams.exam;
    vm.examResultId = null;
    vm.examsResults = [];
    vm.flotData = [];
    vm.flotOptions = {
      xaxis: {
        // dayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        minTickSize: [1, "day"],
        mode: "time",
        monthNames: [
          'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ]
      },
      // series: [
      //   { lines: { show: true }, points: { show: true } },
      //   { lines: { show: true }, points: { show: false } },
      //   { lines: { show: true }, points: { show: false } }
      // ],
      legend: {noColumns: 3},
      // colors: ["#B31204", "#E67F00", "#1ab394"],
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
    vm.openModal = openModal;
    vm.page = $stateParams.page || 1;
    vm.resultsGraphics = [];
    vm.valueStatus = valueStatus;

    activate();

    function activate() {
      examsService.getExam($stateParams.id).then(
        function(response) {
          vm.exam = response.exam;
          getGraphic();
        }
      );
    }

    function clearFloatData() {
      var qtde = vm.flotData.length;
      for (var i = qtde-1; i >= 0; i--) {
        vm.flotData.pop();
      }
    }

    function getChart(graphicValues) {
      var qtde = graphicValues.length;
      var flotChart = [];
      var maximo = [];
      var minimo = [];

      var hasMaximo = vm.exam.valor_referencia && vm.exam.valor_referencia.valor_superior;
      var hasMinimo = vm.exam.valor_referencia && vm.exam.valor_referencia.valor_inferior;

      for (var i = qtde - 1; i >= 0; i--) {
        flotChart.push([
          moment(graphicValues[i].date).utcOffset(0).valueOf(),
          graphicValues[i].value
        ]);

        if (hasMaximo && (i == (qtde - 1) || i == 0)) {
          maximo.push([
            moment(graphicValues[i].date).utcOffset(0).valueOf(),
            vm.exam.valor_referencia.valor_superior
          ]);
        }
        if (hasMinimo && (i == (qtde - 1) || i == 0)) {
          minimo.push([
            moment(graphicValues[i].date).utcOffset(0).valueOf(),
            vm.exam.valor_referencia.valor_inferior
          ]);
        }
      }

      clearFloatData();


      if (hasMaximo) {
        vm.flotData.push({ label: 'Máximo', data: maximo, color: "#B31204"});
      }
      if (hasMinimo) {
        vm.flotData.push({ label: 'Mínimo', data: minimo, color: "#E67F00"});
      }

      vm.flotData.push({
        label: 'Meu Valor',
        data: flotChart,
        color: "#1ab394",
        lines: { show: true },
        points: { show: true }
      });
      // colors: ["#B31204", "#E67F00", "#1ab394"],

      // vm.flotData = [{ label: 'Meu Valor', data: [], lines: { show: true }, points: { show: true } }];

    }

    function getGraphic() {
      ExamsGraphicsResource.get({ id: vm.exam.id },
        function(response) {
          vm.examsResults = response.exam_results;
          getChart(response.exam_results);
        }
      );
    }

    function openModal(examResultGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'ExamsResultsModalController',
        controllerAs: 'vm',
        resolve: {
          continueIncluding: false,
          examReadOnly: true,
          examResult: {
            id: examResultGrid.id,
            exam: {
              id: vm.exam.id,
              name: vm.exam.name,
              unit: vm.exam.unit
            },
            value: examResultGrid.value
          },
          resultId: examResultGrid.result_id
        },
        size: 'lg',
        templateUrl: 'examsResultsModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function(examResult) {
          getGraphic();

          vm.examResultId = examResult.id;
          $timeout(function() {
            vm.examResultId = null;
          }, 5000);
        }
      );
    }

    function valueStatus(examResult) {
      var value = parseFloat(examResult.value);

      if (value < parseFloat(vm.exam.valor_referencia.valor_inferior)) {
        return -1;
      }
      else if (value > parseFloat(vm.exam.valor_referencia.valor_superior)) {
        return 1;
      }

      return 0;
    }
  }
})();

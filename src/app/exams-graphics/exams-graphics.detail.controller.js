(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExamsGraphicsDetailController', ExamsGraphicsDetailController);

  /** @ngInject */
  function ExamsGraphicsDetailController(ExamsGraphicsResource, examsService,
                                         numberFilter, $stateParams, $uibModal) {
    var vm = this;

    vm.badExamResult = badExamResult;
    vm.exam = $stateParams.exam;
    vm.examsResults = [];
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
      colors: ["#1ab394", "#B31204", "#E67F00"],
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
    // vm.openModal = openModal;
    vm.page = $stateParams.page || 1;
    vm.resultsGraphics = [];

    activate();

    function activate() {
      examsService.getExam($stateParams.id).then(
        function(response) {
          vm.exam = response.exam;
          getGraphic();
        }
      );
    }

    function badExamResult(examResult) {
      var value = parseFloat(examResult.value);

      return (value < parseFloat(vm.exam.valor_referencia.valor_inferior)) ||
        (value > parseFloat(vm.exam.valor_referencia.valor_superior));
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

      vm.flotData[0].data = flotChart;

      if (hasMaximo) {
        vm.flotData.push({ label: 'Máximo', data: maximo});
      }
      if (hasMinimo) {
        vm.flotData.push({ label: 'Mínimo', data: minimo});
      }
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
          examResult: examResultGrid,
          resultId: vm.result.id
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
  }
})();

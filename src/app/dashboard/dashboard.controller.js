(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(DashboardsResource, moment) {
    var vm = this;

    vm.average = 0;
    vm.flotData = [{ label: 'Peso', data: [] }];
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
      // colors: ["#ffffff"],
      grid: {
        // color: "transparent",
        color: "#999999",
        hoverable: true,
        clickable: true,
        tickColor: "#D4D4D4",
        borderWidth: 0
      },
      // series: {
      //   lines: {
      //     show: false,
      //     fill: true
      //   },
      //   splines: {
      //     show: true,
      //     tension: 0.4,
      //     lineWidth: 1,
      //     fill: 0.4
      //   },
      //   points: {
      //     radius: 0,
      //     show: true
      //   },
      //   shadowSize: 2
      // },
      tooltip: true,
      tooltipOpts: {
        content: function(label, xval, yval) {
          return "%s em " + moment(xval).format('L') + ' = ' + yval;
        },
        xDateFormat: "%y-%0m-%0d",
        onHover: function (flotItem, $tooltipEl) {}
      }
    };
    vm.getImc = getImc;
    vm.getWeight = getWeight;
    vm.maximum = {};
    vm.minimum = {};
    vm.old = {};
    vm.range = 0;
    vm.recent = {};
    vm.weights = [''];

    activate();

    function activate() {
      DashboardsResource.get({ id: 0 },
        function(response) {
          vm.weights = response.weights;
          getWeight(0);
        }
      );
    }

    function consolidated(size) {
      vm.average = 0;
      vm.maximum = { value: 0 };
      vm.minimum = { value: 1000 };
      vm.size = getSize(size);
      vm.old = vm.size ? vm.weights[vm.size-1] : {};
      vm.recent = vm.size ? vm.weights[0] : {};
      var value;

      for (var i = vm.size - 1; i >= 0; i--) {
        value = parseFloat(vm.weights[i].value);

        vm.average += value;

        if (value > vm.maximum.value) {
          vm.maximum = vm.weights[i];
        }

        if (value < vm.minimum.value) {
          vm.minimum = vm.weights[i];
        }
      }

      vm.average = (vm.average / vm.size);
    }

    function getChart(size) {
      var flotChart = [];
      var size = getSize(size);

      for (var i = size - 1; i >= 0; i--) {
        flotChart.push([
          moment(vm.weights[i].date).toDate().getTime(),
          vm.weights[i].value
        ]);
      }

      vm.flotData[0].data = flotChart;
    }

    function getImc() {
      if (vm.recent) {
        return vm.recent.value / (vm.recent.height * vm.recent.height);
      }
    }

    function getSize(size) {
      if (size) {
        if (size > vm.weights.length) {
          return vm.weights.length;
        }
        else {
          return size;
        }
      }
      else {
        return vm.weights.length;
      }
    }

    function getWeight(size) {
      vm.range = size;
      consolidated(size);
      getChart(size);
    }
  }
})();

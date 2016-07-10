(function() {
  'use strict';

  angular
    .module('app')
    .controller('WeightsController', WeightsController);

  /** @ngInject */
  function WeightsController(moment, WeightsResource, $timeout,
                           toaster, $uibModal) {
    var vm = this;
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
    vm.weightId = null;
    vm.weights = [];
    vm.query = query;
    vm.remove = remove;
    vm.showMode = { chart: true, table: true };

    activate();

    function activate() {
      query();
    }

    function getChart() {
      var qtde = vm.weights.length;
      var flotChart = [];

      for (var i = qtde - 1; i >= 0; i--) {
        flotChart.push([
          moment(vm.weights[i].date).toDate().getTime(),
          vm.weights[i].value
        ]);
      }

      vm.flotData[0].data = flotChart;
    }

    function openModal(weightGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'WeightModalController',
        controllerAs: 'vm',
        resolve: {
          weight: function() {
            return weightGrid;
          }
        },
        templateUrl: 'weightModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function(weight) {
          query();
          vm.weightId = weight.id;
          $timeout(function() {
            vm.weightId = null;
          }, 5000);
        }
      );
    }

    function query() {
      WeightsResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.weights = response.weights;
          vm.pagination = response.meta;
          getChart();
        }
      );
    }

    function remove(weight) {
      WeightsResource.delete({ id: weight.id },
        function(response) {
          toaster.pop('success', '', response.message);
          query();
        }
      );
    }
  }
})();

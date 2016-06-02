(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesosController', PesosController);

  /** @ngInject */
  function PesosController(moment, PesosResource, toastr, $uibModal) {
    var vm = this;

    vm.pagination = {};
    vm.pesos = [];
    vm.openModal = openModal;
    vm.query = query;
    vm.remove = remove;
    vm.showMode = { chart: true, table: true };
    vm.title = 'Pesos';

    // graphics
    vm.data = [[]];
    vm.labels = [];
    vm.series = ['Peso (Kg)'];

    vm.chartObject = {};
    vm.chartObject.type = "LineChart";
    vm.chartObject.data = {
      "cols": [
        { id: "t", label: "Data", type: "string" },
        { id: "s", label: "Peso", type: "number" }
      ],
      "rows": []
    };
    vm.chartObject.options = {
      hAxis: {
        title: 'Data'
      },
      vAxis: {
        title: 'Meu Peso (Kg)'
      }
    };
    // vm.chartObject.options = {
    //   'title': 'Meu Peso (Kg)'
    // };

    activate();

    function activate() {
      query();
    }

    function getChart() {
      vm.data = [[]];
      vm.labels = [];
      var qtde = vm.pesos.length;
      var google = [];

      for (var i = qtde - 1; i >= 0; i--) {
        vm.labels.push(moment(vm.pesos[i].data).format('L'));
        vm.data[0].push(vm.pesos[i].valor);

        google.push({
          c:[
            { v:moment(vm.pesos[i].data).format('L') },
            { v:vm.pesos[i].valor }
          ]
        });
      }

      vm.chartObject.data.rows = google;
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

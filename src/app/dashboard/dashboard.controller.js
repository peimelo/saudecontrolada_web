(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(sessionService, moment, PesosResource) {
    var vm = this;

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
      'title': 'Meu Peso (Kg)'
    };
    vm.data = [[]];
    vm.labels = [];
    vm.series = ['Peso (Kg)'];
    vm.sessionService = sessionService;

    activate();

    function activate() {
      PesosResource.query(
        function(response) {
          var pesos = response.pesos;
          var qtde = pesos.length;
          var google = [];

          for(var i = qtde-1; i >=0; i--) {
            vm.labels.push(moment(pesos[i].data).format('L'));
            vm.data[0].push(pesos[i].valor);

            google.push({
              c:[
                { v:moment(pesos[i].data).format('L') },
                { v:pesos[i].valor }
              ]
            });
          }

          vm.chartObject.data.rows = google;
        }
      );
    }
  }
})();

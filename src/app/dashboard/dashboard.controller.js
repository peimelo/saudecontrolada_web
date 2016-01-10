(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(loginService, moment, pesosService) {
    var vm = this;

    vm.loginService = loginService;

    vm.chartObject = {};
    vm.chartObject.type = "LineChart";
    vm.chartObject.data = {
      "cols": [
        {id: "t", label: "Data", type: "string"},
        {id: "s", label: "Peso", type: "number"}
      ],
      "rows": []
    };
    vm.chartObject.options = {
      'title': 'Meu Peso (Kg)'
    };


    vm.data = [[]];
    vm.labels = [];
    vm.series = ['Peso (Kg)'];

    active();

    function active() {
      pesosService.query(
        function(response) {
          var qtde = response.length;
          var google = [];

          for(var i = qtde-1; i >=0; i--) {
            vm.labels.push(moment(response[i].data).format('L'));
            vm.data[0].push(response[i].valor);

            google.push({
              c:[
                {v:moment(response[i].data).format('L')},
                {v:response[i].valor}
              ]
            });
          }

          vm.chartObject.data.rows = google;
        }
      );
    }
  }
})();

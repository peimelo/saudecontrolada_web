(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesosController', PesosController);

  /** @ngInject */
  function PesosController(pesosService) {
    var vm = this;

    vm.pesos = [];

    active();

    function active() {
      pesosService.query(function (response) {
        vm.pesos = response.pesos;
      });
    }
  }
})();

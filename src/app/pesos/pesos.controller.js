(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesosController', PesosController);

  /** @ngInject */
  function PesosController(pesosService) {
    var vm = this;

    vm.pagination = {};
    vm.pesos = [];
    vm.query = query;
    vm.title = 'Pesos';

    active();

    function active() {
      query();
    }

    function query() {
      pesosService.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.pesos = response.pesos;
          vm.pagination = response.meta;
        }
      );
    }
  }
})();

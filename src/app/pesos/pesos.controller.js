(function() {
  'use strict';

  angular
    .module('app')
    .controller('PesosController', PesosController);

  /** @ngInject */
  function PesosController(PesosResource, $uibModal) {
    var vm = this;

    vm.pagination = {};
    vm.pesos = [];
    vm.openModal = openModal;
    vm.query = query;
    vm.title = 'Pesos';

    activate();

    function activate() {
      query();
    }

    function openModal(pesoGrid) {
      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'PesoModalController',
        controllerAs: 'vm',
        windowClass: 'center-modal',
        resolve: {
          peso: function() {
            return angular.copy(pesoGrid);
          }
        },
        templateUrl: 'pesoModal.html'
      });

      modalInstance.result.then(
        function(peso) {
          if (peso.id) {
          }
          else {
          }
        }
      );
    }

    function query() {
      PesosResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.pesos = response.pesos;
          vm.pagination = response.meta;
        }
      );
    }
  }
})();

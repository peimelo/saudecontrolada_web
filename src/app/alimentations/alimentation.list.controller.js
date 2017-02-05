(function() {
  'use strict';

  angular
    .module('app')
    .controller('AlimentationListController', AlimentationListController);

  /** @ngInject */
  function AlimentationListController(AlimentationResource, $stateParams, toaster) {
    var vm = this;

    vm.alert = { message: 'Nenhum registro cadastrado. Clique em "Incluir".' };
    vm.pagination = { currentPage: ($stateParams.page || 1) };
    vm.alimentations = [''];
    vm.query = query;
    vm.remove = remove;

    activate();

    function activate() {
      query();
    }

    function query() {
      AlimentationResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.alimentations = response.alimentations;
          vm.pagination = response.meta;
        }
      );
    }

    function remove(alimentation) {
      AlimentationResource.delete({ id: alimentation.id },
        function(response) {
          toaster.pop('success', '', response.message);
          query();
        }
      );
    }
  }
})();

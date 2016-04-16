(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserEditController', UserEditController);

  /** @ngInject */
  function UserEditController($stateParams, toastr, usersService) {
    var vm = this;

    vm.submit = submit;
    vm.user = {};
    vm.title = 'Minha Conta';

    activate($stateParams);

    function activate($stateParams) {
      usersService.get({id: $stateParams.id},
        function(response) {
          assignUser(response);
        }
      );
    }

    function assignUser(response) {
      vm.user = response;
      // vm.user.date_of_birth = strToDate(vm.user.date_of_birth);
    }

    // function dateToStr(date) {
    //   date = moment(date, 'YYYY-MM-DD', 'pt-BR');
    //   return date;
    // }
    // function strToDate(date) {
    //   date = date.split('-');
    //   date = new Date(date[0], date[1], date[2], '4', '0', '0', '0');
    //   return date;
    // }

    function submit(isValid) {
      if (isValid) {
        // vm.user.date_of_birth = dateToStr(vm.user.date_of_birth);
        vm.user.$update(function(response) {
          assignUser(response);
          toastr.success('Dados alterados com sucesso.');
        });
      }
    }
  }
})();

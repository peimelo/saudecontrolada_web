(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService, $scope, $state) {
    var vm = this;

    vm.registrationForm = {};
    vm.submit = submit;
    vm.title = 'Cadastrar-se';

    function submit() {
      return cadastrarService.create(vm.registrationForm).then(
        function() {
          vm.registrationForm = {};
          $state.go('home');
        },
        function(response) {
          angular.forEach(response.data, function(errors, key) {
            angular.forEach(errors, function(e) {
              $scope.form[key].$dirty = true;
              $scope.form[key].$setValidity(e, false);
            });
          });
        }
      );
    }
  }
})();

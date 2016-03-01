(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService, $scope, $state, toastr) {
    var vm = this;

    vm.errorMessage = errorMessage;
    vm.registrationForm = {};
    vm.submit = submit;
    vm.title = 'Cadastrar-se';

    function errorMessage(name) {
      if($scope.form[name]) {
        var result = [];
        angular.forEach($scope.form[name].$error, function (key, value) {
          if(name != value) {
            result.push(value);
          }
        });
        return result.join(", ");
      }
    }

    function submit() {
      $scope.form.$setPristine();

      if(cadastrarService.hasAttributes(vm.registrationForm)) {
        return cadastrarService.create(vm.registrationForm).then(
          function() {
            vm.registrationForm = {};
            $state.go('home');
          },
          function(response) {
            angular.forEach(response.data, function(errors, key) {
              $scope.form[key].$error = {};

              angular.forEach(errors, function(e) {
                $scope.form[key].$dirty = true;
                $scope.form[key].$setValidity(e, false);
              });
            });
          }
        );
      }
      else {
        toastr.info('Campos com * preenchimento obrigatorio');
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService, $scope, $state, toastr) {
    var vm = this;

    vm.errorMessage = errorMessage;
    vm.errors = {};
    vm.clearServerError = clearServerError;
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

    function clearServerError(form, key) {
      if(form[key].$error.server) {
        form[key].$setValidity('server', true);
        //form[key].$error.serverMessage = false;
      }
    }

    function submit(form) {
      //$scope.form.$setPristine();
      vm.errors = {};

      if(cadastrarService.hasAttributes(vm.registrationForm)) {
        return cadastrarService.create(vm.registrationForm).then(
          function() {
            vm.registrationForm = {};
            $state.go('home');
          },
          function(response) {
            angular.forEach(response.data, function(errors, field) {
              //$scope.form[key].$error.serverMessage = errors.join(', ');
              //form[field].$error.serverMessage = errors.join(', ');
              //$scope.form[key].$error = {};

              //angular.forEach(errors, function(e) {
              //  form[field].$dirty = true;
                //$scope.form[key].$dirty = true;
                form[field].$setValidity('server', false);
              vm.errors[field] = errors.join(', ');
                //form[key].$setValidity(e, false);
              //});
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

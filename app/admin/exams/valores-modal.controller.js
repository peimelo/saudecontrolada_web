(function() {
  'use strict';

  angular
    .module('app')
    .controller('ValoresModalController', ValoresModalController);

  /** @ngInject */
  function ValoresModalController(examId, referencesService, serverValidateService,
                                  toaster, $uibModalInstance, valor, ValoresResource) {
    var vm = this;

    vm.cancel = cancel;
    vm.formErrors = {};
    vm.examId = examId;
    vm.references = [];
    vm.submit = submit;
    vm.valor = valor ? angular.copy(valor) : {};

    activate();

    function activate() {
      vm.references = referencesService.getAll();
      if (!vm.valor.reference) {
        vm.valor.reference = null;
      }
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function closeWithSuccess(response) {
      toaster.pop('success', '', response.message);
      $uibModalInstance.close(response.reg);
    }

    function submit(form) {
      if (form.$valid) {
        if (vm.valor.reference && !angular.isObject(vm.valor.reference)) {
          toaster.pop(
            'error',
            '',
            'Escreva o nome da Referência e selecione nas opções disponíveis. Se não existir, deverá cadastrá-la.'
          );
          return;
        }

        if (vm.valor.id) {
          ValoresResource.update(
            {
              id: vm.valor.id,
              exam_id: vm.examId,
              gender: vm.valor.gender,
              idade_inferior: vm.valor.idade_inferior,
              idade_superior: vm.valor.idade_superior,
              reference_id: vm.valor.reference ? vm.valor.reference.id : null,
              valido: vm.valor.valido ? true: false,
              valor_inferior: vm.valor.valor_inferior,
              valor_superior: vm.valor.valor_superior
            },
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
        else {
          var newValor = new ValoresResource(
            {
              exam_id: vm.examId,
              gender: vm.valor.gender,
              idade_inferior: vm.valor.idade_inferior,
              idade_superior: vm.valor.idade_superior,
              reference_id: vm.valor.reference ? vm.valor.reference.id : null,
              valido: vm.valor.valido ? true: false,
              valor_inferior: vm.valor.valor_inferior,
              valor_superior: vm.valor.valor_superior
            }
          );

          newValor.$save(
            function(response) {
              closeWithSuccess(response);
            },
            function(error) {
              serverValidateService.validate(error, vm.formErrors, form);
            }
          );
        }
      }
      else {
        form.submitted = true;
      }
    }
  }
})();

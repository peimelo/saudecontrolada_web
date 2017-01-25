(function() {
  'use strict';

  angular
    .module('app')
    .factory('formErrorService', formErrorService);

  /** @ngInject */
  function formErrorService(toaster) {
    var service = {
      showMessage: showMessage
    };

    return service;

    function showMessage(form) {
      form.submitted = true;
      toaster.pop('error', '', 'Por favor, corrija o(s) erro(s) encontrado(s).');
    }
  }
})();

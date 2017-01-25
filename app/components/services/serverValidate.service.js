(function() {
  'use strict';

  angular
    .module('app')
    .factory('serverValidateService', serverValidateService);

  /** @ngInject */
  function serverValidateService(alertingService) {
    var service = {
      addOtherErrorsInAlert: addOtherErrorsInAlert,
      validate: validate
    };

    return service;

    function validate(error, formErrors, form) {
      if (error.status === 422) {
        addErrorsInForm(error, formErrors, form);
        deleteErrorsAdded(error, formErrors);
        addOtherErrorsInAlert(error);
      }
    }

    function addErrorsInForm(error, formErrors, form) {
      if (form) {
        form.submitted = true;

        angular.forEach(error.data, function (errors, field) {
          if (field in form) {
            form[field].$setValidity('server', false);
            formErrors[field] = errors.join(', ');
          }
        });
      }
    }

    function addOtherErrorsInAlert(error) {
      angular.forEach(error.data, function (errors) {
        alertingService.addDanger(errors.join(', '));
      });
    }

    function deleteErrorsAdded(error, formErrors) {
      angular.forEach(formErrors, function (errors, field) {
        delete error.data[field];
      });
    }
  }
})();

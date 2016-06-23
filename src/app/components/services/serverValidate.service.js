(function() {
  'use strict';

  angular
    .module('app')
    .factory('serverValidateService', serverValidateService);

  /** @ngInject */
  function serverValidateService(alertingService) {
    var service = {
      validate: validate
    };

    return service;

    function validate(error, formErrors, form) {
      if (error.status === 422) {

        if (form) {
          form.submitted = true;

          angular.forEach(error.data, function (errors, field) {
            if (field in form) {
              form[field].$setValidity('server', false);
              formErrors[field] = errors.join(', ');
            }
          });
        }

        angular.forEach(formErrors, function (errors, field) {
          delete error.data[field];
        });

        angular.forEach(error.data, function (errors) {
          alertingService.addDanger(errors.join(', '));
        });
      }
    }
  }
})();

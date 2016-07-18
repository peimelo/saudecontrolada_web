(function() {
  'use strict';

  angular
    .module('app')
    .directive('changeDateHour', changeDateHour);

  /** @ngInject */
  function changeDateHour(moment) {
    var directive = {
      restrict: 'A',
      require: 'ngModel',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, element, attrs, ngModel) {
      // model to view
      ngModel.$formatters.push(function(value) {
        return moment(value, 'YYYY-MM-DD HH:mm').format('DD/MM/YYYY HH:mm');
      });

      // view to model
      ngModel.$parsers.push(function(value) {
        var conversion = null;
        if (value !== '') {
          conversion = moment(value, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm');
        }
        if (conversion === 'Invalid date') {
          ngModel.$setValidity('date', false);
          return value;
        }
        else {
          ngModel.$setValidity('date', true);
          return conversion;
        }
      });
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('app')
    .directive('icheck', icheck);

  /** @ngInject */
  function icheck($timeout) {
    var directive = {
      restrict: 'A',
      require: 'ngModel',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc($scope, element, $attrs, ngModel) {
      return $timeout(function() {
        var value;
        value = $attrs['value'];

        $scope.$watch($attrs['ngModel'], function(newValue) {
          $(element).iCheck('update');
        });

        return $(element).iCheck({
          checkboxClass: 'icheckbox_square-green',
          radioClass: 'iradio_square-green'
        }).on('ifChanged', function(event) {
          if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
            $scope.$apply(function() {
              return ngModel.$setViewValue(event.target.checked);
            });
          }
          if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
            return $scope.$apply(function() {
              return ngModel.$setViewValue(value);
            });
          }
        });
      });
    }
  }
})();


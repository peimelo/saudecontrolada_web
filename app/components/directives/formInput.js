(function() {
  'use strict';

  angular
    .module('app')
    .directive('formInput', formInput);

  /** @ngInject */
  function formInput($compile) {
    var directive = {
      require: '^form',
      restrict: 'A',
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope, element, attributes, form) {
        var name = setupDom(element[0]);
        addMessages(form, element, name, $compile, scope);
    }

    /**
     * <div class="help-block"
     *   ng-if="form.email.$invalid && form.submitted"
     *   ng-messages="form.email.$error">
     *     <div ng-messages-include="app/components/messages.html"></div>
     *     <div ng-message="server">{{vm.formErrors.email}}</div>
     * </div>
    
     * @param form
     * @param element
     * @param name
     * @param $compile
     * @param scope
     */
    function addMessages(form, element, name, $compile, scope) {
      var messages = '<div class="help-block" ' +
        'ng-if="' + form.$name + '.' + name + '.$invalid && ' +
        form.$name + '.submitted" ' +
        'ng-messages="' + form.$name + '.' + name + '.$error">' +
        '<div ng-messages-include="app/components/messages.html"></div>' +
        '<div ng-message="server">{{ vm.formErrors.' + name + ' }}</div>'
        '</div>';
      element.append($compile(messages)(scope));
    }

    function setupDom(element) {
      var input = element.querySelector('input');
      var type = input.getAttribute('type');
      var name = input.getAttribute('name');
      if (type !== 'checkbox' && type !== 'radio') {
        input.classList.add('form-control');
      }

      var label = element.querySelector('label');
      if (label) {
        label.classList.add('control-label');
      }

      element.classList.add('form-group');

      return name;
    }
  }
})();


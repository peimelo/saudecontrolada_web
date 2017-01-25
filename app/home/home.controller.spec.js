(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('app'));

    it('should define 2 slides', inject(function($controller) {
      var vm = $controller('HomeController');

      expect(angular.isArray(vm.presentations)).toBeTruthy();
      expect(vm.presentations.length == 4).toBeTruthy();

      expect(angular.isArray(vm.slides)).toBeTruthy();
      expect(vm.slides.length == 2).toBeTruthy();
    }));
  });
})();

(function() {
  'use strict';

  describe('Home Route', function () {
    beforeEach(module('app'));

    var breadCrumb = 'Home',
      $injector,
      $rootScope,
      specialClass = 'landing-page',
      state = 'home',
      $state;

    beforeEach(inject(function (_$rootScope_, _$state_, _$injector_, $templateCache) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;

      $templateCache.put('app/home/home.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
      expect($state.current.data.specialClass).toBe(specialClass);
      expect($state.current.ncyBreadcrumb.label).toBe(breadCrumb);
    });
  });
})();

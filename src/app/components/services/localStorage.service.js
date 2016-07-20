(function() {
  'use strict';

  angular
    .module('app')
    .factory('localStorageService', localStorageService);

  /** @ngInject */
  function localStorageService($window) {

    var store = $window.localStorage;

    var service = {
      add: add,
      get: get,
      remove: remove
    };
    return service;

    function add(key, value) {
      try {
        value = angular.toJson(value);
        store.setItem(key, value);
      }
      catch (error) {
        return false;
      }
    }

    function get(key) {
      try {
        var value = store.getItem(key);
        if (value) {
          value = angular.fromJson(value);
        }
        return value;
      }
      catch (error) {
        return false;
      }
    }

    function remove(key) {
      try {
        store.removeItem(key);
      }
      catch (error) {
        return false;
      }
    }
  }
})();

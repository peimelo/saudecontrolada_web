(function() {
  'use strict';

  angular
    .module('app')
    .factory('alertingService', alertingService);

  /** @ngInject */
  function alertingService() {
    var alertTypes = ['danger', 'info', 'success', 'warning'];
    var currentAlerts = [];

    var service = {
      addDanger: addDanger,
      addInfo: addInfo,
      addSuccess: addSuccess,
      clearAll: clearAll,
      getAlerts: getAlerts
    };

    return service;

    function addAlert(type, message) {
      currentAlerts.push({ type: type, message: message });
    }

    function addDanger(message) {
      addAlert(alertTypes[0], message);
    }

    function addInfo(message) {
      addAlert(alertTypes[1], message);
    }

    function addSuccess(message) {
      addAlert(alertTypes[2], message);
    }

    function clearAll() {
      currentAlerts = [];
    }

    function getAlerts() {
      return currentAlerts;
    }
  }
})();

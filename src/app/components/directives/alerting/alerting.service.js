// (function() {
//   'use strict';
//
//   angular
//     .module('app')
//     .factory('alertingService', alertingService);
//
//   /** @ngInject */
//   function alertingService() {
//     var alertTypes = ['danger', 'info', 'success', 'warning'];
//     var currentAlerts = [];
//
//     var service = {
//       addDanger: addDanger,
//       addSuccess: addSuccess,
//       currentAlerts: currentAlerts
//     };
//
//     return service;
//
//     function addAlert(type, message) {
//       currentAlerts.push({ type: type, message: message });
//     }
//
//     function addDanger(message) {
//       addAlert(alertTypes[0], message);
//     }
//
//     function addSuccess(message) {
//       addAlert(alertTypes[2], message);
//     }
//   }
// })();

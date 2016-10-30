(function() {
  'use strict';

  angular
    .module('app')
    .factory('examsService', examsService);

  /** @ngInject */
  function examsService($http) {
    var exams = [];

    return {
      getExams: getExams
    };

    function getExams() {
      if (exams.length) {
        return exams;
      }
      else {
        return $http.get('/api/exams').then(
          function(response) {
            exams = response.data.exams;
            return response.data.exams;
          }
        );
      }
    }
  }
})();

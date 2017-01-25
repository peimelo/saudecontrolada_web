(function() {
  'use strict';

  angular
    .module('app')
    .factory('examsService', examsService);

  /** @ngInject */
  function examsService($http) {
    var exams = [];

    return {
      clearExams: clearExams,
      getExam: getExam,
      getExams: getExams
    };

    function clearExams() {
      exams = [];
    }

    function getExam(id) {
      return $http.get('/api/exams/' + id).then(
        function(response) {
          return response.data;
        }
      );
    }

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

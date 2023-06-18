// app.js

(function() {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.userInput = '';
      $scope.message = '';
  
      $scope.checkItems = function() {
        if ($scope.userInput.trim() === '') {
          $scope.message = 'Please enter data first';
        } else {
          var items = $scope.userInput.split(',');
          if (items.length <= 3) {
            $scope.message = 'Enjoy!';
          } else {
            $scope.message = 'Too much!';
          }
        }
      };
    }
  
  })();
  
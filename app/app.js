'use strict';
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'components',
  'treebuilder'
])
    .config(['$routeProvider', function($routeProvider) {
      // Routes will be here
    }])
    .controller( 'DateCtrl', ['$scope', function($scope) {
      $scope.currentdate = new Date();
    }]);

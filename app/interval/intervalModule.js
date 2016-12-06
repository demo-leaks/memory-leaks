'use strict';

angular.module('intervalLeakModule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/intervalLeak', {
    template: `
      <h1>Interval memory leak</h1>
      <p>Start using page (navigate through routes) or simply wait 2-5 seconds after each measure.</p>
      <p>Take heap snapshot and notice increase</p>
      <img src="imgs/interval-leak.png" alt="rootScope snapshots"/>
      <button ng-click="stopLeak()">Stop interval</button>`,
    controller: 'IntervalController'
  });
}])

.controller('IntervalController', ['$scope', '$rootScope', '$interval', function($scope, $rootScope, $interval) {
	var leakedArray = [];

  var intervalLeakFunction = function() {
    leakedArray.push(new Array(10000));
    $rootScope.leak = leakedArray;
    console.log($rootScope.leak);
  }
  
  var interval = $interval(intervalLeakFunction, 1000);

  $scope.$on('$destroy', function() {
    // $interval.cancel(intervalML);
    console.log("Timeout destroy!");   
  });

  $scope.stopLeak = function() {
    $interval.cancel(interval);
  }
}]);
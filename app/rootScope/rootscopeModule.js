'use strict';

angular.module('rootscopeLeakModule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rootscopeLeak', {
    template: `
      <h1>Root scope Memory leak</h1>
      <p>Added event handler to rootScope</p>
      <p>Start using app (navigate to home and back). Take heap snapshot after every iteration</p>
      <p>Due to little size of event handler take a look on heap snapshots in comparison mode and notice delta (after every iteration (closure) attribute has increasing by 1)</p>`,
    controller: 'rootscopeLeak'
  });
}])

.controller('rootscopeLeak', ['$scope', '$rootScope', function($scope, $rootScope) {
	var leakedArray = [];

  var rootScopeLeakedFunction = function() {
    leakedArray.push(new Array(new Array(1000)));
  }

  var rootScopeML = $rootScope.$on('someEvent', rootScopeLeakedFunction);
    

  $scope.$on("$destroy", function() {
    // rootscopeML();
    console.log("Rootscope destroy!");
  });
}]);
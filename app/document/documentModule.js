'use strict';

angular.module('documentLeakModule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/documentLeak', {
    template: `
    <h1 ng-init="leakDocument()">Document/Window event listeners memory leak</h1>
    <p>Added event listener to document</p>
    <p>Start using page (navigate to Home and back). Get heap snapshots. Make sure that in context you will have documentLeakFunction in (scope) section in comparison view</p>
    `,
    controller: 'documentController'
  });
}])

.controller('documentController', ['$scope', '$rootScope', '$document', function($scope, $rootScope, $document) {
    var leakedArray = [];
    leakedArray.push(new Array(new Array(1000)));
    
     var documentLeakFunction = function() {
       leakedArray.push(new Array(new Array(1000)));
       console.log('click');
    }

    $scope.leakDocument = function() {
      document.addEventListener("click", documentLeakFunction, false);
    }
   

    $scope.$on("$destroy", function() {
      // document.removeEventListener('click', documentLeakFunction);
      console.log("Document/Window destroy!")
    });
}]);
'use strict';

angular.module('homeModule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    template: `
    	<h1>Home</h1>
		<p>Take several heap snapshots</p>
		<p>Make sure that in current controller we haven't get any memory leaks</p>`,
    controller: 'HomeController'
  });
}])

.controller('HomeController', [function() {
	console.log("Home controller")
}]);
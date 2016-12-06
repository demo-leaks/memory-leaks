'use strict';

angular.module('homeModule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    template: `
    	<h1>Home</h1>
		<p>Take several heap snapshots</p>
		<p>Note that all measures should be in incognito mode. Allocated size of heap snapshots might be diffetent because of different OS preferences and for other different reasons</p>
		<img src="imgs/home-snapshot.png" alt="take snapshots"/>
		<p>Make sure that in current controller we haven't get any memory leaks</p>
		<img src="imgs/home-snapshots-res.png" alt="snapshots results" />`,
    controller: 'HomeController'
  });
}])

.controller('HomeController', [function() {
	console.log("Home controller")
}]);
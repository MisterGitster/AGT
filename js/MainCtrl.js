var app = angular.module('tabsOnAngular');

app.controller('MainController', function($scope, mainService) {

	$scope.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	
	$scope.submit = function(songTitle, artistName, subType, tabText) {
		console.log(songTitle);
		console.log(artistName);
		console.log(subType);
		console.log(tabText);
	};

});
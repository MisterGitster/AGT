var app = angular.module('tabsOnAngular');

app.controller('HomeController', function($scope, songService) {

	$scope.homeSongs = songService.getSongs();

});
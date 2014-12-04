var app = angular.module('tabsOnAngular');

app.controller('BandController', function($scope, $stateParams, songService) {

	$scope.initial = $stateParams.firstInitial;

	$scope.alphArtists = songService.getSongs();

})
.filter('artistByLetter', function() {
	return function(text, initial) {
		if (!text) {return;}
		var filteredArtists = [];
		for (var i = 0; i < text.length; i++) {
			if (text[i].artist_name.charAt(0) === initial) {
				filteredArtists.push(text[i]);
			}
		}
		return filteredArtists;
	};
});
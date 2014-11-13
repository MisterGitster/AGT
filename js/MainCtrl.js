var app = angular.module('tabsOnAngular');

app.controller('MainController', function($scope, songService, $stateParams, artistService) {

	$scope.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	
	$scope.allSongs = songService.getSongs();

	$scope.submit = function(songTitle, artistName, subType, tabText) {
			var timestamp = new Date().getTime();
		$scope.allSongs.$add({
			song_name: songTitle,
			artist_name: artistName,
			sub_type: subType,
			tab_text: tabText,
			insert_date: timestamp
		});
	};

	$scope.initial = $stateParams.firstInitial;

	$scope.getArtists = function(letter) {
		$scope.artists = artistService.getArtists(letter);
	};
});
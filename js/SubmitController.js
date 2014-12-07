var app = angular.module('tabsOnAngular');

app.controller('SubmitController', function($scope, songService) {

	$scope.allSongs = songService.getSongs();

	$scope.submit = function(songTitle, artistName, subType, tabText, lyrics) {
		var timestamp = new Date().getTime();
		var urlArtist = artistName.replace(/ /g, '-');
		var urlSong = songTitle.replace(/ /g, '-');

		if (!lyrics) {
			lyrics = false;
		}

		$scope.allSongs.$add({
			song_name: songTitle,
			url_song: urlSong,
			artist_name: artistName,
			url_artist: urlArtist,
			sub_type: subType,
			tab_text: tabText,
			insert_date: timestamp,
			recommended: false,
			page_views: 0,
			searchField: songTitle + " " + artistName,
			lyrics: lyrics
		});

		var clearSearch = function() {
			$scope.songTitle = '',
			$scope.artistName = '',
			$scope.subType = '',
			$scope.tabText = '',
			$scope.lyrics = ''
		};
		clearSearch();
	};

});
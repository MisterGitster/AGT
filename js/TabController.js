var app = angular.module('tabsOnAngular');

app.controller('TabController', function($scope, songService, $stateParams) {

		$scope.getTabInfo = songService.getSongs().$loaded(function (artists) {
		var thisSong = $stateParams.selectedSong;
		var songTab = '';
		for (var i = 0; i < artists.length; i++) {
			if (artists[i].url_song === thisSong) {
				songTab = artists[i];
			}
		}
		$scope.songTab = songTab;
		$scope.incrementPageViews($scope.songTab.$id);
		$scope.showButton = true;

		if (songTab.lyrics === false) {
			$scope.showButton = false;
		}

		$scope.lyrics = false;

		$scope.showOrHide = 'Show Lyrics';

		$scope.lyricsToggle = function() {
			$scope.lyrics = !$scope.lyrics;
			if ($scope.showOrHide === 'Show Lyrics') {
				$scope.showOrHide = 'Hide Lyrics';
			} else {
				$scope.showOrHide = 'Show Lyrics';
			};
		};
	});

});
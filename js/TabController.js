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
	});

});
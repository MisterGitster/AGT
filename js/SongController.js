var app = angular.module('tabsOnAngular');

app.controller('SongController', function($scope, $stateParams, songService) {

	$scope.selectedArtist = songService.getSongs();

	$scope.selectedBand = $stateParams.selectedBand;

	var columnHeader = function(band) {
		var spacedBand = band.replace(/-/g, ' ');
		return spacedBand;
	};
	$scope.columnheader = columnHeader($scope.selectedBand);

})
.filter('songByBand', function() {
	return function(text, selectedBand) {
		if (!text) {return;}
		var filteredSongs = [];
		for (var i = 0; i < text.length; i++) {
			if (text[i].url_artist === selectedBand) {
				filteredSongs.push(text[i]);
			}
		}
		return filteredSongs;
	};
});


	// console.log("selectedBand: ", $scope.selectedBand);

	// var firebaseEndpoint = 'https://accurateguitartabs.firebaseio.com/';
	// var childRef = $firebase(new Firebase(firebaseEndpoint + '/songs/'));
	// var parentRef = childRef.parent($scope.selectedBand);
	// console.log("here: ", parentRef);

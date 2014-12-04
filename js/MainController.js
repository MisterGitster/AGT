var app = angular.module('tabsOnAngular');

app.controller('MainController', function($scope, $stateParams, songService, $firebase) {

	$scope.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	$scope.songCollection = songService.getSongs();

	$scope.getArtists = function() {
		$scope.artists = [];
		$scope.artists = songService.getSongs();
	};

	$scope.searchClick = function() {
		$scope.searchString = '';
	};

	$scope.incrementPageViews = function(id) {

		var songRef = $firebase(new Firebase('https://accurateguitartabs.firebaseio.com/songs/' + id)),
			song = songRef.$asObject();

		song.$loaded().then(function() {
			var views = parseInt(song.page_views, 10);
			song.page_views = views + 1;
			song.$save();
		});
	};
});






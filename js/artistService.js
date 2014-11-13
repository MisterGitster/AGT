var app = angular.module('tabsOnAngular');

app.service('artistService', function ($firebase) {
	var firebaseEndpoint = 'https://accurateguitartabs.firebaseio.com/';

	return {
		getArtists: function(letter) {
			var artists = $firebase(new Firebase(firebaseEndpoint + '/songs')).$asArray();

			var results = [];

			artists.$loaded().then(function(array) {

			for (var i = 0; i < array.length; i++); {
				console.log('i: ' + array[i]);
				if (array[i].artist_name.indexOf(letter) === 0) {
					results.push(array[i]);
				}
			}

			});

			return artists;
		}
	};
});
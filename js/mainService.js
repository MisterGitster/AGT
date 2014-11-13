var app = angular.module('tabsOnAngular');

app.service('songService', function ($firebase) {
	var firebaseEndpoint = 'https://accurateguitartabs.firebaseio.com/';

	return {
		getSongs: function() {
			return $firebase(new Firebase(firebaseEndpoint + '/songs')).$asArray();
		}
	};
});
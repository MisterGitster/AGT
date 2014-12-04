var app = angular.module('tabsOnAngular');

app.service('songService', function ($firebase) {
	var firebaseEndpoint = 'https://accurateguitartabs.firebaseio.com/';
	var myDatabase = $firebase(new Firebase(firebaseEndpoint + '/songs')).$asArray();

	return {
		getSongs: function() {
			return myDatabase;
		}
	};
});


///////////////////////
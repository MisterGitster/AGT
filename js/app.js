var app = angular.module('tabsOnAngular', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/views/home.html',
			controller: ''
		})
		.state('submit', {
			url: '/submit',
			templateUrl: '/views/submit.html',
			controller: ''
		})
		.state('bands_alph', {
			url: '/bands',
			templateUrl: '/views/bands_alph.html',
			controller: ''
		})
		.state('band_page', {
			url: '/thisisthename',
			templateUrl: '/views/band_page.html',
			controller: ''
		});
});
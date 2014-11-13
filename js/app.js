var app = angular.module('tabsOnAngular', ['ui.router', 'firebase','ui.utils']);

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
			url: '/bands/:firstInitial',
			templateUrl: '/views/bands_alph.html',
			controller: 'MainController'
		})
		.state('band_page', {
			url: '/band',
			templateUrl: '/views/band_page.html',
			controller: ''
		})
		.state('tab_page', {
			url: '/songnamewillgohere',
			templateUrl: '/views/tab_page.html',
			controller: ''
		});
});
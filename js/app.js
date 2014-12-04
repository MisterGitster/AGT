var app = angular.module('tabsOnAngular', ['ui.router', 'firebase','ui.utils']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/views/home.html',
			controller: 'HomeController'
		})
		.state('submit', {
			url: '/submit',
			templateUrl: '/views/submit.html',
			controller: 'SubmitController'
		})
		.state('bands', {
			url: '/bands/:firstInitial',
			templateUrl: '/views/bands_alph.html',
			controller: 'BandController'
		})
		.state('band', {
			url: '/band/:selectedBand',
			templateUrl: '/views/band_page.html',
			controller: 'SongController'
		})
		.state('tab_page', {
			url: '/song/:selectedSong',
			templateUrl: '/views/tab_page.html',
			controller: 'TabController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: '/views/contact_us.html',
			controller: ''
		});
});
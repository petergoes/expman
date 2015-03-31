(function() {
	'use strict';

	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(states)
	.config(themes);

	function states($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					'contentView': {
						templateProvider: function($templateCache) {
							return $templateCache.get('src/components/app/app.html');
						},
						controller: 'AppController',
						controllerAs: 'app'
					}
				},
				data: {
					title: 'ExpMan'
				}
			});
	}

	function themes($mdThemingProvider) {
		$mdThemingProvider
			.theme('default')
				.primaryPalette('indigo')
				.accentPalette('pink')
				.warnPalette('red')
				.backgroundPalette('grey');
	}
})();

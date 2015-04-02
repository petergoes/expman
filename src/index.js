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
							return $templateCache.get('src/pages/home/home.html');
						},
						controller: 'HomeController',
						controllerAs: 'home'
					}
				},
				data: {
					title: 'ExpMan'
				}
			})

			.state('tags', {
				url: '/tags',
				views: {
					'contentView': {
						templateProvider: function($templateCache) {
							return $templateCache.get('src/pages/tags/tags.html');
						},
						controller: 'TagsController',
						controllerAs: 'tags'
					}
				},
				data: {
					title: 'Tags'
				}
			})

			.state('thismonth', {
				url: '/thismonth',
				views: {
					'contentView': {
						templateProvider: function($templateCache) {
							return $templateCache.get('src/pages/thisMonth/thisMonth.html');
						},
						controller: 'ThisMonthController',
						controllerAs: 'tmc'
					}
				},
				data: {
					title: 'This Month'
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

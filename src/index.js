(function() {
	'use strict';

	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(config);

	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: '/home',
				views: {
					'contentView': {
						templateProvider: function($templateCache) {
							console.log('blub');
							return $templateCache.get('src/components/app/app.html');
						},
						controller: 'AppController',
						controllerAs: 'app'
					}
				}
			});
	}
})();

(function() {
	'use strict';

	angular
		.module('app')
		.controller('HomeController', HomeController);

	/* @ngInject */
	function HomeController() {
		var vm = this;
		vm.title = 'HomeController';

		init();

		////////////////

		function init() {
		}
	}
})();

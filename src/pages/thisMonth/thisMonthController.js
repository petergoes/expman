(function() {
	'use strict';

	angular
		.module('app')
		.controller('ThisMonthController', ThisMonthController);

	/* @ngInject */
	function ThisMonthController() {
		var vm = this;
		vm.title = 'ThisMonthController';

		init();

		////////////////

		function init() {
		}
	}
})();

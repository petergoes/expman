(function() {
	'use strict';

	angular
		.module('app')
		.controller('PrimaryFabController', PrimaryFabController);

	/* @ngInject */
	function PrimaryFabController() {
		var vm = this;
		vm.title = 'PrimaryFabController';

		activate();

		////////////////

		function activate() {
		}
	}
})();

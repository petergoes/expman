(function() {
	'use strict';

	angular
		.module('app')
		.controller('TagsController', TagsController);

	/* @ngInject */
	function TagsController() {
		var vm = this;
		vm.title = 'TagsController';

		init();

		////////////////

		function init() {
		}
	}
})();

(function() {
	'use strict';

	angular
		.module('app')
		.controller('TagsController', TagsController);

	/* @ngInject */
	function TagsController(Tags) {
		var vm = this;
		vm.tags = Tags.getTags();
		vm.title = 'TagsController';

		init();

		////////////////

		function init() {
		}
	}
})();

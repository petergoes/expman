(function() {
	'use strict';

	angular
		.module('app')
		.controller('TagsController', TagsController);

	/* @ngInject */
	function TagsController($scope, Tags) {
		var vm = this;
		vm.tags = Tags.getTags();
		vm.title = 'TagsController';

		init();

		$scope.$on('primary-fab-clicked', onPrimaryFab);

		////////////////

		function init() {
		}

		function onPrimaryFab() {
			Tags.createTag();
		}
	}
})();

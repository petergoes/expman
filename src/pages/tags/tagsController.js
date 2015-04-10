(function() {
	'use strict';

	angular
		.module('app')
		.controller('TagsController', TagsController);

	/* @ngInject */
	function TagsController($scope, $rootScope, Tags) {
		var vm = this;
		vm.editTag = editTag;
		vm.tags = Tags.getTags();
		vm.title = 'TagsController';

		init();

		$scope.$on('primary-fab-clicked', onPrimaryFab);

		////////////////

		function editTag(tag) {
			if (!tag.edit) {
				Tags.startEditTag(tag.id);
			} else {
				Tags.endEditTag(tag.id);
			}
		}

		function init() {
			$rootScope.$broadcast('primary-fab-activate');
		}

		function onPrimaryFab() {
			Tags.createTag();
		}
	}
})();

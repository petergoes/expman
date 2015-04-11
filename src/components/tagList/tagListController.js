(function() {
	'use strict';

	angular
		.module('app')
		.controller('TagListController', TagListController);

	/* @ngInject */
	function TagListController(Tags) {
		var vm = this;
		vm.newTag = newTag;
		vm.tags = Tags.getTags();
		vm.title = 'TagListController';
		vm.toggleMoreTags = false;
		vm.toggleTags = toggleTags;

		init();

		////////////////

		function init() {
		}

		function newTag() {
			Tags.createTag();
		}

		function toggleTags() {
			vm.toggleMoreTags = !vm.toggleMoreTags;
		}
	}
})();

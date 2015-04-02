(function() {
	'use strict';

	angular
		.module('app')
		.controller('NewEntryController', NewEntry);

	/* @ngInject */
	function NewEntry($scope, $rootScope, Entry, Tags) {
		var vm = this;
		vm.amount = null;
		vm.canSubmit = false;
		vm.description = '';
		vm.newTag = newTag;
		vm.tags = Tags.getTags();
		vm.title = 'NewEntry';
		vm.toggleMoreTags = false;
		vm.toggleTags = toggleTags;

		init();

		$scope.$on('primary-fab-clicked', primaryFabClicked);

		$scope.$watch('newEntry.amount', amountChanged);
		$scope.$watch('newEntry.canSubmit', canSubmitChanged);

		////////////////

		function amountChanged(newValue) {
			if (newValue > 0) {
				vm.canSubmit = true;
			} else {
				vm.canSubmit = false;
			}
		}

		function canSubmitChanged(canSubmit) {
			if (canSubmit) {
				$rootScope.$broadcast('primary-fab-activate');
			} else {
				$rootScope.$broadcast('primary-fab-deactivate');
			}
		}

		function init() {
		}

		function newTag() {
			Tags.createTag();
		}

		function primaryFabClicked() {
			Entry.createNew(vm.amount, vm.description, _.filter(vm.tags, filter));

			resetValues();

			function filter(tag) {
				return tag.checked;
			}
		}

		function resetValues() {
			vm.amount = null;
			vm.description = '';
			vm.tags = Tags.getTags();
		}

		function toggleTags() {
			vm.toggleMoreTags = !vm.toggleMoreTags;
		}
	}

})();

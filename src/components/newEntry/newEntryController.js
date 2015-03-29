(function() {
	'use strict';

	angular
		.module('app')
		.controller('NewEntryController', NewEntry);

	/* @ngInject */
	function NewEntry($scope, $rootScope, Tags) {
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
			console.log('build new entry');
			var newEntryObj = {};
			newEntryObj.amount = vm.amount;
			newEntryObj.date = Date.now();
			newEntryObj.description = vm.description;
			newEntryObj.tags = _.filter(vm.tags, filter);

			_.each(newEntryObj.tags, stripHashKey);

			console.log(newEntryObj);

			function filter(tag) {
				return tag.checked;
			}

			function stripHashKey(tag) {
				delete tag.$$hashKey;
			}
		}

		function toggleTags() {
			vm.toggleMoreTags = !vm.toggleMoreTags;
		}
	}

})();

(function() {
	'use strict';

	angular
		.module('app')
		.controller('NewEntryController', NewEntry);

	/* @ngInject */
	function NewEntry($scope, $rootScope) {
		var vm = this;
		vm.amount = null;
		vm.canSubmit = false;
		vm.description = '';
		vm.tags = [
			{name: 'Food', used: 2, checked: false},
			{name: 'Home', used: 1, checked: false},
			{name: 'Other', used: 1, checked: false},
			{name: 'Sports', used: 5, checked: false}];
		vm.title = 'NewEntry';
		vm.toggleMoreTags = false;
		vm.toggleTags = toggleTags;

		init();

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

		function toggleTags() {
			vm.toggleMoreTags = !vm.toggleMoreTags;
		}
	}

})();

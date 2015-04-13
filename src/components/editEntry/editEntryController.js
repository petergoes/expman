(function(document) {
	'use strict';

	angular
		.module('app')
		.controller('EditEntryController', EditEntryController);

	/* @ngInject */
	function EditEntryController($scope, $mdDialog, entry, Entry) {
		var orgEntry = _.clone(entry);

		var vm = this;
		vm.cancel = cancel;
		vm.entry = entry;
		vm.remove = remove;
		vm.save = save;
		vm.title = 'EditEntryController';

		init();

		////////////////

		function cancel() {
			stripTags();

			_.forEach(orgEntry, function(n, key) {
				entry[key] = n;
			});

			$mdDialog.cancel(orgEntry);
		}

		function init() {
			_.delay(function() {

				_.each($scope.tags, function(atag) {
					_.each(entry.tags, function(etagid) {
						if (atag.id === etagid) {
							atag.checked = true;
						}
					});
				});

			}, 0);

		}

		function remove() {
			stripTags();
			var confirm = $mdDialog.confirm()
				.title('Delete')
				.content('Are you sure?')
				.ok('Yes')
				.cancel('No');
			$mdDialog.show(confirm)
				.then(function() {
					Entry.deleteEntry(vm.entry.id);
				});
		}

		function save() {
			vm.entry.tags = [];
			_.each($scope.tags, fillTags);

			stripTags();

			$mdDialog.hide(vm.entry);

			function fillTags(tag) {
				if (tag.hasOwnProperty('checked') && tag.checked === true) {
					vm.entry.tags.push(tag.id);
				}
			}
		}

		function stripTags() {
			_.each($scope.tags, strip);

			function strip(tag) {
				delete tag.checked;
			}
		}
	}
})(document);

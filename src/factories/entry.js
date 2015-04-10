(function() {
	'use strict';

	angular
		.module('app')
		.factory('Entry', Entry);

	/* @ngInject */
	function Entry($rootScope, $mdDialog, $templateCache, Tags) {
		var entriesThisMonth = getEntriesFromLocalStorage();

		var service = {
			createNew: createNew,
			editEntry: editEntry,
			getEntries: entriesThisMonth,
			getMonthTotal: getEntriesTotal
		};
		return service;

		////////////////

		function createNew(amount, description, tags) {
			var obj = {
				id: Date.now(),
				amount: amount,
				description: description,
				tags: [],
				date: Date.now()
			};

			_.each(tags, addTags);
			_.each(tags, updateTag);

			saveEntry(obj);

			function updateTag(tag) {
				Tags.useTag(tag.id);
			}

			function addTags(tag) {
				obj.tags.push(tag.id);
			}
		}

		function editEntry(id) {
			var theEntry = getEntry(id);

			$mdDialog.show({
				controller: 'EditEntryController',
				controllerAs: 'editEntry',
				template: $templateCache.get('src/components/editEntry/editEntry.html'),
				locals: {
					entry: theEntry
				}
			}).then(successEdit);

			function successEdit(entry) {
				updateEntrys();
			}
		}

		function getEntry(id) {
			return _.find(entriesThisMonth, find);

			function find(entry) {
				return (entry.id === id);
			}
		}

		function getEntriesFromLocalStorage() {
			var date = moment().format('YYYYMM');
			var entries = JSON.parse(localStorage.getItem('entries' + date)) || [];

			_.each(entries, addMomentdate);

			return entries;

			function addMomentdate(entry) {
				entry.momentDate = moment(entry.date).fromNow();
			}
		}

		function getEntriesTotal() {
			var amount = 0;
			_.each(entriesThisMonth, addToAmount);
			return amount;

			function addToAmount(entry) {
				amount += entry.amount;
			}
		}

		function updateEntrys() {
			var date = moment().format('YYYYMM');
			localStorage.setItem('entries' + date, angular.toJson(entriesThisMonth));
			$rootScope.$broadcast('entries-updated');
		}

		function saveEntry(entry) {
			entriesThisMonth.push(entry);
			updateEntrys();
		}
	}
})();

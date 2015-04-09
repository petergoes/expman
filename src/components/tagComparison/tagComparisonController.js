(function() {
	'use strict';

	angular
		.module('app')
		.controller('TagComparisonController', TagComparisonController);

	/* @ngInject */
	function TagComparisonController(Entry, Tags) {
		var vm = this;
		var tags = getTags();

		vm.maxTotal = 0;
		vm.tags = tags;
		vm.title = 'TagComparisonController';

		init();

		////////////////

		function getTags() {
			var entries = Entry.getEntries;
			var usedTagIds = [];
			var usedTagObjects = [];
			var noTagTotal = 0;

			// find used tags
			_.each(entries, filterTagsFromEntries);
			usedTagIds = _.uniq(usedTagIds);

			// fetch tag objects
			_.each(usedTagIds, getTagObject);

			// sum amount per tag
			_.each(usedTagObjects, sumAmount);

			if (noTagTotal) {
				usedTagObjects.push({name: 'No tags', total: noTagTotal});
			}
			vm.maxTotal = _.max(usedTagObjects, getTagAmount).total;

			// set percentage of max
			_.each(usedTagObjects, setPercentage);

			return usedTagObjects;

			function filterTagsFromEntries(entry) {

				usedTagIds = usedTagIds.concat(entry.tags);

				if (entry.tags.length === 0) {
					noTagTotal += entry.amount;
				}
			}

			function getTagObject(id) {

				usedTagObjects.push(Tags.getTag(id));
			}

			function getTagAmount(tagObj) {

				return tagObj.total;
			}

			function setPercentage(tagObj) {

				tagObj.percentage = (tagObj.total / vm.maxTotal) * 100;
			}

			function sumAmount(tagObj) {
				tagObj.total = 0;

				for (var entry in entries) {
					if (_.contains(entries[entry].tags, tagObj.id)) {
						tagObj.total += entries[entry].amount;
					}
				}
			}
		}

		function init() {
		}
	}
})();

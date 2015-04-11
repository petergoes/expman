(function() {
	'use strict';

	angular
		.module('app')
		.factory('Tags', Tags);

	/* @ngInject */
	function Tags($mdDialog, $templateCache) {
		var tags = getTagsFromLocalStorage();

		var service = {
			createTag: createTag,
			endEditTag: endEditTag,
			getTag: getTag,
			getTags: getTags,
			useTag: useTag,
			startEditTag: startEditTag
		};
		return service;

		////////////////

		function createTag() {
			$mdDialog.show({
				controller: 'NewTagController',
				controllerAs: 'nt',
				template: $templateCache.get('src/components/newTag/newTag.html')
			})
			.then(handler);

			function handler(name) {
				if (name) {
					var obj = {
						id: Date.now(),
						name: name,
						used: 0,
					};

					tags.push(obj);
					saveTags();
				}
			}
		}

		function endEditTag(id) {
			var tag = _.find(tags, find);
			delete tag.edit;

			saveTags();

			function find(tag) {
				return (tag.id === id);
			}
		}

		function getTagsFromLocalStorage() {
			var tags = localStorage.getItem('tags');
			if (!tags) {
				return [];
			}
			return JSON.parse(tags);
		}

		function getTag(id) {
			return _.find(tags, find);

			function find(tag) {
				return (tag.id === id);
			}
		}

		function getTags() {
			return tags;
		}

		function saveTags() {
			_.each(tags, stripChecked);
			localStorage.setItem('tags', angular.toJson(tags));

			function stripChecked(tag) {
				delete tag.checked;
			}
		}

		function startEditTag(id) {
			var tag = _.find(tags, find);
			tag.edit = true;
			return tag;

			function find(tag) {
				return (tag.id === id);
			}
		}

		function useTag(id) {
			var tag = _.find(tags, find);
			tag.used = tag.used + 1;
			delete tag.checked;

			saveTags();

			function find(tag) {
				return (tag.id === id);
			}
		}
	}
})();

(function() {
	'use strict';
	angular
		.module('app')
		.filter('tagname', tagname);
	function tagname(Tags) {
		return tagnameFilter;
		////////////////
		function tagnameFilter(tagid) {
			return Tags.getTag(tagid).name;
		}
	}
})();

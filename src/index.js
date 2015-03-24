angular.module('app', ['ngMaterial']);

angular.module('app')
	.controller('App', ['$scope', '$mdSidenav', App]);


function App($scope, $mdSidenav) {
	$scope.toggleSidenav = function(menuId) {
		var viewModel = this;

		$mdSidenav(menuId).toggle();
	};
}
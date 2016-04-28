angular.module('join').config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/join', {
			templateUrl: 'join/views/join.client.view.html'
		});
	}
]);
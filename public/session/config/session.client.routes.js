angular.module('session').config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/session', {
			templateUrl: 'session/views/session.client.view.html'
		});
	}
]);
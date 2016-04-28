angular.module('home').controller('HomeController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.name = 'Welcome to Game On!';

	$scope.authentication = Authentication;

	$scope.signout = function() {
		Authentication.user = null;
		Parse.User.logOut();
	};
}]);
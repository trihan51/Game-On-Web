angular.module('home').controller('HomeController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.name = 'Welcome to Game On!';

	$scope.authentication = Authentication;

	console.log($scope.authentication.user);
}]);
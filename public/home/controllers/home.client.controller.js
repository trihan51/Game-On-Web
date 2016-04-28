angular.module('home').controller('HomeController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.name = 'Welcome to Game On!';

	$scope.authentication = Authentication;

<<<<<<< HEAD
	console.log($scope.authentication.user);
=======
	$scope.signout = function() {
		Authentication.user = null;
		Parse.User.logOut();
	};
>>>>>>> dev2
}]);
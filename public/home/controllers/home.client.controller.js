angular.module('home').controller('HomeController', ['$scope', 'Authentication', 'CurrentSession', function($scope, Authentication, CurrentSession) {
	$scope.name = 'Welcome to Game On!';

	$scope.authentication = Authentication;
	$scope.currentsession = CurrentSession.currentSession;

	$scope.signout = function() {
		Authentication.user = null;
		Parse.User.logOut();
	};
}]);
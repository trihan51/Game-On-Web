angular.module('signin').controller('SigninController', ['$scope', '$window', 'Authentication', function($scope, $window, Authentication) {

	$scope.signin = function() {
		Parse.User.logIn($scope.username, $scope.password, {
			success: function(user) {
				// Do stuff after successful login.
				Authentication.user = user;
				alert("You successfully logged in!");
			},
			error: function(user, error) {
				// The login failed. Check error to see why.
				alert("You did not successfuly logged in!");
			}
		});
	};

}]);
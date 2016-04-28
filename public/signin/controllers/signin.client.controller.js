angular.module('signin').controller('SigninController', ['$scope', 'Authentication', function($scope, Authentication) {

	$scope.signin = function() {
		console.log($scope.username);
		console.log($scope.password);
		Parse.User.logIn($scope.username, $scope.password, {
			success: function(user) {
				// Do stuff after successful login.
				window.user = user;
				Authentication.user = user;
				alert("You have successfully logged in!");
			},
			error: function(user, error) {
				// The login failed. Check error to see why.
				console.log(error);
				alert("You did not successfuly log in!");
			}
		});
	};

}]);
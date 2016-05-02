angular.module('signin').controller('SigninController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.signin = function() {
		Parse.User.logIn($scope.username, $scope.password, {
			success: function(user) {
				// Do stuff after successful login.
				window.user = user;
				Authentication.user = user;
				alert("You have successfully logged in!");
				
				// redirect user back to home
				location.href = "/#!/";
			},
			error: function(user, error) {
				// The login failed. Check error to see why.
				console.log(error);
				alert("You did not successfuly log in!");
			}
		});
	};
}]);
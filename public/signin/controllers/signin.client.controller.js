angular.module('signin').controller('SigninController', ['$scope', 'Authentication', 'ServerMessage', function($scope, Authentication, ServerMessage) {
	$scope.signin = function() {

		var json = ServerMessage.get(null, 
			function() {
				alert("The server says: " + json.message);
			}
		);

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
	
	$scope.username_alert = function(username) {
		alert('your username is: ' + username);
	}
}]);
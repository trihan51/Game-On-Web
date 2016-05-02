angular.module('host').controller('HostController', ['$scope', 'Authentication', '$q', function($scope, Authentication, $q) {
	$scope.authentication = Authentication;

	$scope.initialize = function() {
		$scope.fetchBoardGames();
	}

	$scope.fetchBoardGames = function() {
		var BoardGames = Parse.Object.extend("BoardGames");
		var query = new Parse.Query(BoardGames);

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise.then(
			function(results) {
				console.log(results);
				$scope.boardgames = results;
			},
			function(error) {
				console.log(error);
			}
		);

		query.find().then(
			function(results) {
				deferred.resolve(results);
			},
			function(error) {
				deferred.reject(results);
			}
		);

	}

	$scope.hostNewSessionFor = function(boardgame) {
		var GameOnSession = Parse.Object.extend("GameOnSession");
		var gameonsession = new GameOnSession();

		gameonsession.set("gameTitle", boardgame.attributes.boardName);
		gameonsession.set("host", Parse.User.current());
		gameonsession.set("participants", []);
		gameonsession.set("open", true);

		gameonsession.save(null, {
			success: function(session) {
				console.log("You saved it!");
			},
			error: function(session, error) {
				console.log("You did not save it!");
			}
		});
	};

}]);
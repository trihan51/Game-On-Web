angular.module('join').controller('JoinController', ['$scope', 'Authentication', '$q', 'CurrentSession', function($scope, Authentication, $q, CurrentSession) {
	$scope.authentication = Authentication;

	$scope.initialize = function() {
		$scope.UserHasSelectedBoardGame = false;
		$scope.findOpenSessions();
	}

	$scope.findOpenSessions = function() {
		var BoardGames = [];
		var GameOnSessions = [];

		var GameOnSession = Parse.Object.extend("GameOnSession");
		var query = new Parse.Query(GameOnSession);

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise.then(function(results) {
			console.log(results);
			var numOfOpenSessions = results.length;
			for (var i = 0; i < numOfOpenSessions; i++) {
				var gameTitle = results[i].get("gameTitle");
				if (BoardGames.indexOf(gameTitle) === -1) {
					BoardGames.push(gameTitle);
				}

				GameOnSessions.push(results[i]);
			}
			$scope.boardgames = BoardGames;
			$scope.gameonsessions = GameOnSessions;
		}, function(error) {
			console.log(error);
		});

		query.equalTo("open", true);
		query.notEqualTo("host", Parse.User.current());
		query.include("host");
		query.find().then(
			function(results) {
				deferred.resolve(results);
			},
			function(error) {
				deferred.reject(error);	
			}
		);
	};

	$scope.displayOpenSessionsFor = function(boardgame) {
		console.log($scope.UserHasSelectedBoardGame);

		var sessionsOfSelectedBoardGame = [];
		var i = 0;
		var numOfGameOnSessions = $scope.gameonsessions.length;
		for (; i < numOfGameOnSessions; i++) {
			if ($scope.gameonsessions[i].attributes.gameTitle === boardgame) {
				sessionsOfSelectedBoardGame.push($scope.gameonsessions[i]);
			}
		}
		$scope.sessions = sessionsOfSelectedBoardGame;
		$scope.UserHasSelectedBoardGame = true;

		console.log($scope.UserHasSelectedBoardGame);
	}

	$scope.joinSession = function(session) {
		var participants = session.attributes.participants;

		if (participants.indexOf(Parse.User.current().id) === -1) {
			participants.push(Parse.User.current().id);
		}	

		session.set("participants", participants);
		session.save(null, {
			success: function(session) {
				console.log("user added to session successfully");
				CurrentSession.currentSession = session;
				location.href = "/#!/session";
			},
			error: function(session, error) {
				console.log(error);
			}
		});
	}
}]);
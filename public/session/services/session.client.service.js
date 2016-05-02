angular.module('session').factory('CurrentSession', [
	function() {
		this.currentSession = null;

		return {
			currentSession: this.currentSession
		};
	}
])
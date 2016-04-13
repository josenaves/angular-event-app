'use strict';

eventsApp.directive('upvote', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			upvote: "&",	// function to be executed
			downvote: "&",	// function to be executed
			count: "="		// object
		}
	};
}); 
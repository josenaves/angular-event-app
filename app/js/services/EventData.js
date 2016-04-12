'use strict';
// We are injecting the $http built-in service into our service
eventsApp.factory('eventData', function($http) {
	return {
		getEvent: function() {
			// now we are returning a promisse
			return $http({method: 'GET', url: '/data/event/1'});
		}
	};
});
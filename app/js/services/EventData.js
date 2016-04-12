'use strict';
// We are injecting the $resource built-in service into our service
eventsApp.factory('eventData', function($resource) {
	return {
		getEvent: function() {
			// now we are returning a promisse
			return $resource('/data/event/:id', {id: '@id'}).get({id:1});
		}
	};
});
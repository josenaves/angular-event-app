'use strict';
// We are injecting the $resource built-in service into our service
eventsApp.factory('eventData', function($resource) {
	var resource = $resource('/data/event/:id', {id: '@id'}, {"getAll" : {method: "GET", isArray: true}});
	return {
		getEvent: function(eventId) {
			// now we are returning a promisse
			return resource.get({id:eventId});
		},
		save: function(event) {
			event.id = 999;
			return resource.save(event);
		},
		getAllEvents: function() {
			return resource.query();
		}
	};
});
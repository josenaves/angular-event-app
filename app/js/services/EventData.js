'use strict';
// We are injecting the $http built-in service into our service
// $log too
eventsApp.factory('eventData', function($http, $log) {
	return {
		// successcb = callback
		getEvent: function(successcb) {
			// asynchronous call
			$http({method: 'GET', url: '/data/event/1'}).
				success(function(data, status, headers, config){
					successcb(data); // 
				}).
				error(function(data, status, headers, config) {
					$log.warn(data, status, headers, config);
				});
		}

	};
});
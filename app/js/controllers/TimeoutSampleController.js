'use strict';

eventsApp.controller('TimeoutSampleController',
	// We injected $timeout service 
	function TimeoutSampleController($scope, $timeout) {

		var promise = $timeout(function() {
			$scope.name = "John Doe";
		}, 3000);

		$scope.cancel = function() {
			$timeout.cancel(promise);
			$scope.foo = "cancelled";
		}	
	}
); 
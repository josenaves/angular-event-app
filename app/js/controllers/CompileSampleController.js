'use strict';

eventsApp.controller('CompileSampleController',
	// We injected $compile service
	function CompileSampleController($scope, $compile) {
		$scope.appendDivToElement = function(markup) {
			return $compile(markup) ($scope).appendTo(angular.element("#appendHere"));
		};
	}
); 
'use strict';

eventsApp.controller('LocaleSampleController',
	// We injected $locale service 
	function LocaleSampleController($scope, $locale) {

		console.log($locale);
		$scope.myDate = Date.now();
		$scope.myShortFormat = $locale.DATETIME_FORMATS.shortDate;
		$scope.myFullFormat = $locale.DATETIME_FORMATS.longDate;

		// Uncomment the line below just to test $exceptionHandler
		// throw { message: 'error message'};
	}
); 
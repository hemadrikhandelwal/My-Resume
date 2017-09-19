var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/section', {
		controller: 'SectionController',
		templateUrl: 'views/section.html',
	})

	.when('/how', {
		controller: 'HowController',
		templateUrl: 'views/how.html',
	})

	.when('/dis', {
		controller: 'DisclaimerController',
		templateUrl: 'views/disclaimer.html',
	})

	.when('/faq', {
		controller: 'FaqController',
		templateUrl: 'views/faq.html',
	})

	.when('/feed',{
		controller:'feedController',
		templeteUrl:'views/feed.html',
	})
	
	.when('/calcs', {
		controller: 'CalCSController',
		templateUrl: 'views/calcs.html',
	})

	.when('/caltc', {
		controller: 'CalTCController',
		templateUrl: 'views/caltc.html',
	})

	.when('/result', {
		controller: 'ResultController',
		templateUrl: 'views/result.html',
	})

		.when('/', {
		controller: 'SetionController',
		templateUrl: 'views/section.html',
	})
	.otherwise({
		redirectTo: '/section'
	});
});

// Create the factory that share the Fact
app.factory('data', function(){
  return { 
  Total:'',
  };

});

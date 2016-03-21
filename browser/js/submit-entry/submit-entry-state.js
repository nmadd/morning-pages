app.config(function($stateProvider, $urlRouterProvider){
	// $urlRouterProvider.otherwise('/');
	$stateProvider
	.state('submit', {
		url: "/submit",
		templateUrl: 'js/submit-entry/submit-entry-view.html',
		controller: 'SubmitEntryController',
		resolve: {
			theEntryFields: function(SubmitEntryFactory){
				// return SubmitEntryFactory.getEntryFields()
				// .then(function(response){
				// 	return response;
				// })
			}
		}
	})
})
-app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('submit', {
		url: "/view",
		templateUrl: 'js/view-entries/view-entries-view.html',
		controller: 'ViewEntiesController',
		resolve: {
			theEntryFields: function(SubmitEntryFactory){
				return SubmitEntryFactory.getFields()
				.then(function(response){
					return response;
				})
			}
		}
	})
})
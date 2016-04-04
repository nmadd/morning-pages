app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('entries', {
		url: "/entries",
		templateUrl: 'js/view-entries/view-entries-view.html',
		controller: 'ViewEntriesController',
		resolve: {
			theEntries: function(ViewEntriesFactory){
				return ViewEntriesFactory.getEntries()
				.then(function(response){
					return response;
				})
			}
		}

	})
})
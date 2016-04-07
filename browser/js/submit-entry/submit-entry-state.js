app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('submit', {
            url: "/",
            templateUrl: 'js/submit-entry/submit-entry-view.html',
            controller: 'SubmitEntryController',
            resolve: {
                theEntryFields: function(SubmitEntryFactory) {
                    return SubmitEntryFactory.getFields()
                },
                //Check to see if saved text exists on cookie. If it does, return it. Otherwise return an empty string
                theCookieText: function() {
                	var toReturn = '';
                    var cookieArr = document.cookie.split(';');
                    if (cookieArr.length > 0) {
	                    cookieArr.forEach(function(cookie) {
	                        if (cookie.search('saved_text') >= 0) toReturn = cookie.substring(12);
	                    })
                    }
                    return toReturn;
                },
                theLogin: function(AuthService){
                	return AuthService.isAuthenticated()
                }
            }
        })
})

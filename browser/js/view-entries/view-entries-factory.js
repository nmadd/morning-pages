app.factory('ViewEntriesFactory', function($http, AuthService) {
    var factory = {};


    factory.getEntries = function() {
        return AuthService.getLoggedInUser()
        .then(function(user) {
            return $http({
                method: "GET",
                url: "/api/entries/" + user._id
            })
        })

        .then(function(response) {
            console.log("RESPONSE?", response)
            return response.data
        })
    };

    return factory;
})

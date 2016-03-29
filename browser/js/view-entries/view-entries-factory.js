app.factory('ViewEntriesFactory', function($http) {
    var factory = {};

    factory.getEntries = function(){
        return $http({
            method: "GET",
            url: "/api/entries"
        })
        .then(function(response){
            return response.data
        })
    };

    return factory;
})

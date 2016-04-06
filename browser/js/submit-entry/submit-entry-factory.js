app.factory('SubmitEntryFactory', function($http) {
    var factory = {};

    factory.getFields = function() {
        return $http({
            method: "GET",
            url: "/api/fields"
        })
        .then(function(response){
        	return response.data
        })
    };

    factory.hideField = function(id) {
        return $http({
            method: "PUT",
            url: "/api/fields/" + id
        })
        .then(function(response){
            return response.data
        })
    };



    return factory;
})

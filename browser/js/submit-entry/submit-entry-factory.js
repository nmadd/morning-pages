app.factory('SubmitEntryFactory', function($http) {
    var factory = {};

    factory.addField = function(newField){
        console.log('New Field', newField)
    }

    factory.getFields = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/api/get-entry-fields"
        })
        .then(function(response){
        	return response.data
        })
    }

    factory.deleteField = function(field){
        return $http({
            method: 'POST',
            url: "http://localhost:3000/api/delete-field",
            data: field
        })
    }






 //    factory.submitEntry = function(data){
	// 	$http({
	// 		method: "POST",
	// 		url: "/api/submit-entry",
	// 		data: data
	// 	})
	// }


    return factory;
})
